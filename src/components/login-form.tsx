import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Login</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Business Email Address</Label>
                    <Input id="email" type="email" placeholder="username@domain.com" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Enter Password" type="password" required />
                </div>
                <a
                    href="#"
                    className="ml-auto text-blue-400 text-sm underline-offset-4 underline"
                >
                    Forgot your password?
                </a>
                <Button type="submit" className="w-full bg-blue-400 hover:bg-blue-500">
                    Login
                </Button>
            </div>
            <div className="text-center text-sm ">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline text-blue-400 underline-offset-4">
                    Sign up
                </a>
            </div>
        </form>
    )
}
