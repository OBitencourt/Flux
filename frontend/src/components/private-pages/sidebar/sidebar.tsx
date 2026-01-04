"use client"

import { usePathname } from "next/navigation";
import SidebarButton from "./button";

export default function Sidebar () {

    const pathname = usePathname()

    return (
        <>
            <div className="w-[260px] h-[91dvh] flex flex-col border-r border-border-muted px-6 py-2">
                
                <SidebarButton route="/dashboard/home" active={pathname === "/dashboard/home" ? true : false}>
                    <img
                        src={pathname === "/dashboard/home" ? "/images/home-green-icon.svg" : "/images/home-icon.svg"}
                        alt="home-icon"
                        className="w-5"
                    />
                    Home
                </SidebarButton>

                <div className="my-3 border-y border-border-muted py-2">
                    <SidebarButton route="/dashboard/tasks" active={pathname === "/dashboard/tasks" ? true : false}>
                        <img
                            src={pathname === "/dashboard/tasks" ? "/images/tasks-green-icon.svg" : "/images/tasks-icon.svg"}
                            alt="tasks-icon"
                            className="w-5"
                        />
                        Tasks
                    </SidebarButton>
                    <SidebarButton route="/dashboard/projects" active={pathname === "/dashboard/projects" ? true : false}>
                        <img
                            src={pathname === "/dashboard/projects" ? "/images/projects-green-icon.svg" : "/images/projects-icon.svg"}
                            alt="projects-icon"
                            className="w-5"
                        />
                        Projects
                    </SidebarButton>
                    <SidebarButton route="/dashboard/sessions" active={pathname === "/dashboard/sessions" ? true : false}>
                        <img
                            src={pathname === "/dashboard/sessions" ? "/images/sessions-green-icon.svg" : "/images/sessions-icon.svg"}
                            alt="sessions-icon"
                            className="w-5"
                        />
                        Sessions
                    </SidebarButton>
                </div>
            </div>
        </>
    )
}

