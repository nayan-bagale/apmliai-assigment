import { Calendar, LayoutDashboard, Settings } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {
    IconBell,
    IconChevronsDown,
    IconCreditCard,
    IconLogout,
    IconUserCircle
} from '@tabler/icons-react';
import { Link } from "react-router";
import { OrgSwitcher } from "../org-switcher";
import { UserAvatarProfile } from "../user-avatar-profile";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Companies",
        url: "/companies",
        icon: Calendar,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]


export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader>
                <OrgSwitcher/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size='lg'
                                    className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                                >
                                    <UserAvatarProfile
                                        className='h-8 w-8 rounded-lg'
                                        showInfo
                                        user={null}
                                    />
                                    <IconChevronsDown className='ml-auto size-4' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
                                side='bottom'
                                align='end'
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className='p-0 font-normal'>
                                    <div className='px-1 py-1.5'>
                                        <UserAvatarProfile
                                            className='h-8 w-8 rounded-lg'
                                            showInfo
                                            user={null}
                                        />
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                    >
                                        <IconUserCircle className='mr-2 h-4 w-4' />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <IconCreditCard className='mr-2 h-4 w-4' />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <IconBell className='mr-2 h-4 w-4' />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <IconLogout className='mr-2 h-4 w-4' />
                                    {/* <SignOutButton redirectUrl='/auth/sign-in' /> */}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}