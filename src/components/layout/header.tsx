import { Bell, Sparkles, Square } from "lucide-react";
import FYSelect from "../fy-select";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import type { FC } from "react";

interface HeaderProps {
    title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
    return (
        <header className='flex bg-white h-16 shrink-0 w-full border-b items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
            <div className='flex items-center gap-3 px-4'>
                <SidebarTrigger className='-ml-1 text-7xl' />
                <h1 className=" font-bold" >{title}</h1>
                <FYSelect />
            </div>

            <div className='flex items-center gap-3 px-4'>
                <div className=" flex items-center gap-2 ">
                    <Square />
                    <span className="text-sm">Quben Infra</span>
                </div>

                <Button variant={'outline'} size={'icon'} className=" rounded-full">
                    <Bell />
                </Button>

                <Button variant={'secondary'}>
                    <Sparkles className=" text-amber-400" />
                    AI Chat
                </Button>
            </div>
        </header>
    );
}

export default Header;