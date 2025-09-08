import { AppSidebar } from "@/components/layout/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className=" flex flex-1 flex-col">
                <SidebarInset>
                    <Outlet />
                </SidebarInset>
            </main>
        </SidebarProvider>
    )
}