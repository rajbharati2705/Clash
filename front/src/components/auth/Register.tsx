import React, { useEffect } from "react";
import { registerAction } from "@/actions/authActions";
import { SubmitButton } from "@/components/common/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { toast } from "sonner";

function Register() {
  const initState = {
    status: 0,
    message: "",
    errors: {},
  };

  const [state, formAction] = useFormState(registerAction, initState);
  useEffect( ()=>{
    if(state.status ==500)
    {
      toast.error(state.message)
    }else if(state.status == 200){
      toast.success(state.message)
    }
  })
  return (
    <form action={formAction}>
      <div className="mt-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
        ></Input>
        <span className="text-red-500">{state.errors?.name}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email.."
        ></Input>
        <span className="text-red-500">{state.errors?.email}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password.."
        ></Input><span className="text-red-500">{state.errors?.password}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="cpassword">Confirm Password</Label>
        <Input
          id="cpassword"
          name="confirm_password"
          type="password"
          placeholder="Confirm your password.."
        ></Input>
        <span className="text-red-500">{state.errors?.confirm_password}</span>
      </div>
      <div className="mt-4">
        <SubmitButton></SubmitButton>
      </div>
    </form>
  );
}

export default Register;
