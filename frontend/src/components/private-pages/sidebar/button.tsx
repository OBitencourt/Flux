import Link from "next/link"

interface SidebarButtonTypes {
    children: React.ReactNode
    active: boolean
    route: string
}


export default function SidebarButton ({children, active, route}: SidebarButtonTypes) {
    return (
        <>
            {
                active ? (
                    <button
                        className="border-none bg-(--dark-bg) py-3 px-6 w-full flex items-center gap-8 rounded-xl my-4"
                    >
                        {children}
                    </button> 
                ) : (
                    <Link
                        href={route}
                    >
                        <button
                            className="border-none bg-transparent py-3 px-6 w-full flex items-center gap-8 rounded-xl my-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out"
                        >
                            {children}
                        </button> 
                    </Link>
                )
            }
                   
        </>
    )
}

