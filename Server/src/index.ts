import express, { Application, Request, Response } from "express";
import "dotenv/config";
import ejs, { name } from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import Routes from "./routes/index.js"
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//seting view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//routes
app.use(Routes);

// app.get("/", async (req: Request, res: Response) => {
//   //return res.send("Hiii Raj");
//   const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
//     name: "Raj"
//   });
//   await sendEmail("raj6767@yopmail.com", "Testing SMTP",html);
//   return res.json({ msg: "Email send successfully" });
//  // return res.render("emails/welcome",{name:"Raj"});
// });

app.get("/", async (req: Request, res: Response) => {
  try {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
      name: "Raj",
    });
    // await sendEmail("rajbharati2705@yopmail.com", "Testing SMTP", html);

    await emailQueue.add(emailQueueName,{to:"cepow18144@kwalah.com",subject:"Testing queue",body:html})
    return res.json({ msg: "Email sent successfully.." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Error sending email", error });
  }
});

//queues
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
