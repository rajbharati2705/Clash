import { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidations.js";
import { ZodError } from "zod";
import { formatError, renderEmailEjs } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";
import {v4 as uuid4} from "uuid";
import { emailQueue, emailQueueName } from "../jobs/EmailJob.js";
const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payload = registerSchema.parse(body);
    let user = await prisma.user.findUnique({
      where: { email: payload.email },
    });
    if(user){
       return  res.status(422).json({
        errors:{
            email:"Email already taken. Please use another email"
        }
       });
    }

    const salt= await bcrypt.genSalt(10)
    payload.password= await bcrypt.hash(payload.password,salt);

    const token = await bcrypt.hash(uuid4(),salt);
    const url =`${process.env.APP_URL}/verify-email?email=${payload.email}&token=${token}`;

    const emailBody = await renderEmailEjs("email-verify",{name:payload.name,url:url});
    await emailQueue.add(emailQueueName, {to:payload.email,subject:"Clash Email verification", body:emailBody})

    await prisma.user.create({
        data:{
            name:payload.name,
            email:payload.email,
            password:payload.password,
            email_verify_token:token
        }
    })

    return res.json({message:"Please check your email we have sent you verification link"})
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatError(error);
      return res.status(422).json({ message: "Invalid Data", errors });
    }
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again" });
  }
});

export default router;
