
import { Building2 } from 'lucide-react';

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';


export function OrgSwitcher() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                        <SidebarMenuButton
                            size='lg'
                            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                        >
                            <div className='bg-secondary text-sidebar-accent flex aspect-square size-8 items-center justify-center rounded-lg'>
                                <Building2 className='size-4' />
                            </div>
                            <div className='flex flex-col gap-0.5 leading-none'>
                                <span className='font-semibold'>FlowState</span>
                            </div>
                        </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}