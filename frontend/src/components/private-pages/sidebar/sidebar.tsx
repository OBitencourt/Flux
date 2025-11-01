"use client"

import { usePathname } from "next/navigation";
import SidebarButton from "./button";
import Link from "next/link";

export default function Sidebar () {

    const pathname = usePathname()

    return (
        <>
            <div className="w-[16%] h-[89dvh] flex flex-col border-r-1 border-border-muted px-6 py-4">
                
                <SidebarButton route="/dashboard/home" active={pathname === "/dashboard/home" ? true : false}>
                    <img
                        src={pathname === "/dashboard/home" ? "/images/home-green-icon.svg" : "/images/home-icon.svg"}
                        alt="home-icon"
                    />
                    Home
                </SidebarButton>

                <div className="my-6 border-y-1 border-border-muted py-8">
                    <SidebarButton route="/dashboard/tasks" active={pathname === "/dashboard/tasks" ? true : false}>
                        <img
                            src={pathname === "/dashboard/tasks" ? "/images/tasks-green-icon.svg" : "/images/tasks-icon.svg"}
                            alt="tasks-icon"
                        />
                        Tasks
                    </SidebarButton>
                    <SidebarButton route="/dashboard/projects" active={pathname === "/dashboard/projects" ? true : false}>
                        <img
                            src={pathname === "/dashboard/projects" ? "/images/projects-green-icon.svg" : "/images/projects-icon.svg"}
                            alt="projects-icon"
                        />
                        Projects
                    </SidebarButton>
                    <SidebarButton route="/dashboard/sessions" active={pathname === "/dashboard/sessions" ? true : false}>
                        <img
                            src={pathname === "/dashboard/sessions" ? "/images/sessions-green-icon.svg" : "/images/sessions-icon.svg"}
                            alt="sessions-icon"
                        />
                        Sessions
                    </SidebarButton>
                </div>
            </div>
        </>
    )
}

