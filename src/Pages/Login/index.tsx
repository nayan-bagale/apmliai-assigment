import { LoginForm } from "@/components/login-form"

const Login = () => {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    {/* <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Acme Inc.
                    </a> */}
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 relative hidden lg:flex items-center justify-center p-10">
                <p className="text-5xl/normal px-10 text-white" >Drive Better Decisions with Centralize Performance & Account Intelligence.</p>
            </div>
        </div>
    )
}

export default Login