"use client"

import { useRouter } from 'next/navigation'
import {toast} from "sonner"
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { loginAction, signupAction } from '@/actions/users'

type AuthFormProps = {
  type: "login" | "register"
}

function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === "login";
  
  const router = useRouter();
  const [isPending, startTransition] = useTransition();


    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            if (!email || !password) {
                toast.error("Please fill in all fields", {
                    description: "All fields are required.",
                    action: {
                        label: "Try again",
                        onClick: () => {
                            router.push(isLogin ? "/login" : "/signup");
                        }
                    }
                });
                return;
            }

            let errormessage
            let title
            let description

            if (isLogin) {
                const result = await loginAction(email, password);
                errormessage = result?.error;
                title = "Login";
                description = "Please check your credentials and try again.";
            } else {
                const result = await signupAction(email, password);
                errormessage = result?.error;
                title = "Register"
                description = "Please check your details and try again."
            }


            if (errormessage) {
                toast.error(errormessage, {
                    description: description,
                    action: {
                        label: "Try again",
                        onClick: () => {
                            router.push(isLogin ? "/login" : "/signup");
                        }
                    }
                });
            } else {
                toast.success(`${title} successfully`, {
                    description: "Redirecting to your dashboard.",
                    duration: 2000
                });
                router.push("/");
            }
        });
    }

  return <form action={handleSubmit} className="flex flex-col gap-4">
    <CardContent className="grid gap-4 w-full items-center">
        <div className="flex flex-col gap-2 w-full mb-4">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email" required disabled={isPending} className="mt-1"/>
        </div>
        <div className="flex flex-col gap-2 w-full mb-4">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Enter your password" required disabled={isPending} className="mt-1"/>
        </div>
    </CardContent>
    <CardFooter className="flex flex-col justify-center">
        <Button className='w-full'>
            {isPending ? <Loader2 className='animate-spin'/> : isLogin ? "Login" : "Register"}
        </Button>
        <p className='text-xs text-center mt-4'>
            {isLogin ? "Don't have an account ?" : "Already have an account ?"}{" "}
            <Link href={isLogin ? "/signup" : "/login"} className='text-blue-500 underline {isPending ? "cursor-not-allowed" : ""}'>
                {isLogin ? "Sign up" : "Login"}
            </Link> 
        </p>
    </CardFooter>

  </form>
}

export default AuthForm
