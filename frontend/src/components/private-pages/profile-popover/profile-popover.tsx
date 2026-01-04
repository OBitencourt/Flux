"use client"

import { useEffect, useRef } from "react"
import { useCookies } from "react-cookie"


type ProfilePopoverProps = {
    profilePopoverActive: boolean
    onClose: () => void
}

export default function ProfilePopover ({ profilePopoverActive, onClose }: ProfilePopoverProps) {
    const [cookie, setCookie, removeCookie] = useCookies(["token", "userId"])
    const popoverRef = useRef<HTMLDivElement>(null)

    const logout = () => {
        removeCookie("token", { path: "/" })
        removeCookie("token", { path: "" }) // path atual
        removeCookie("userId", { path: "/" })
        removeCookie("userId", { path: "" })

        // Força a limpeza imediata no estado também
        setCookie("token", "", { path: "/", maxAge: 0 })
        setCookie("userId", "", { path: "/", maxAge: 0 })

        window.location.href = "/signin"

        onClose()
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        if (profilePopoverActive) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })

    return (
        <>
            {
                profilePopoverActive && (
                    <div ref={popoverRef} className="absolute w-50 top-12 right-0 border rounded-xl border-border-muted p-2 bg-foreground">
                        <button onClick={() => logout()} className="w-full cursor-pointer p-2 rounded-lg bg-red-500 hover:bg-red-600 text-sm text-white">
                            Logout
                        </button>
                    </div>
                )
            }
        </>
    )   
}