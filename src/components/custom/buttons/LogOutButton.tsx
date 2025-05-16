"use client"

import { Button } from "@/components/ui/button"
import {Loader2} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { logOutAction } from "@/actions/users"
    

function LogOutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleLogOut = async () => {
        setLoading(true);

        const result = await logOutAction();
        const error = result?.error|| null;

        if(!error) {
            toast.success("Logged out successfully", {
                description: "You have been logged out.",
                action: {
                    label: "Login again",
                    onClick: () => {
                        router.push("/login");
                    }
                }
            });
        } else {
            toast.error("Logout failed", {
                description: error,
                action: {
                    label: "Try again",
                    onClick: () => {
                        router.push("/login");
                    }
                }
            });
        }

        setLoading(false);
        
    }

  return (
    <Button variant="outline" onClick={handleLogOut} disabled={loading} className="w-24">{loading ? <Loader2 className="animate-spin"/> : "Logout"}</ Button>
  )
}

export default LogOutButton;
