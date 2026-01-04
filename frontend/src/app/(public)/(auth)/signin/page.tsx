"use client"

import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'

const userSignInSchema = z.object({
    email: z.string().nonempty("Insira um email válido."),
    password: z.string().nonempty("Por favor introduza a sua senha")
})

type UserSignInType = z.infer<typeof userSignInSchema>

type UserSignInResponse = {
    userId: string
    message: string
    token: string
}

export default function SignIn () {
    const [cookie, setCookie] = useCookies(["token", "userId"])
    const router = useRouter()

    const userSignInForm = useForm<UserSignInType>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(userSignInSchema)
    })
 
    const handleSignInSubmit = async (data: UserSignInType) => {

        const response = await fetch("http://localhost:3333/api/user/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        if(!response.ok) {
            const text = await response.text()
            console.error("Erro na response:", text)
        }

        const userData:UserSignInResponse = await response.json()

        const { token, userId } = userData

        setCookie('token', token, {path: '/'})
        setCookie('userId', userId, {path: '/'})

        if(token) {
            router.push("/dashboard/home")
        } else {
            console.log("Não há token guardado nos cookies")
        }

    }


    return ( 
        <>
            <div className="w-full h-dvh flex justify-center items-center">
                <div className="flex flex-col w-[32%] bg-(--foreground-color) px-8 py-14 rounded-xl border border-(--border-muted)">
                    <h2 className="text-center text-4xl font-bold mb-1">Welcome Back!</h2>
                    <p className="text-center text-(--muted) text-xl">Login to have access to all your data</p>

                    <div className="bg-linear-to-r from-(--background-color) via-(--cp) to-(--background-color) h-px w-full mt-8 mb-6 opacity-50"></div>

                    <form
                        onSubmit={userSignInForm.handleSubmit(handleSignInSubmit)}
                        className="flex flex-col"
                    >

                        <label
                            htmlFor="Email"
                            className="text-(--text-light) text-lg mb-2 mt-3"
                        >
                            Email
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="e.g: youruser@gmail.com"
                            {...userSignInForm.register("email")} 
                            className="bg-(--dark-bg) text-(--light-text) p-4 outline-black rounded-lg border border-(--border-muted) focus-within:outline-1 focus-within:outline-(--cp)"
                        />
                        
                        <label
                            htmlFor="password"
                            className="text-(--text-light) text-lg mb-2 mt-3"
                        >
                            Password
                        </label>
                        <input 
                            id="password" 
                            type="text" 
                            placeholder="e.g: yhA2Udh1" 
                            {...userSignInForm.register("password")} 
                            className="bg-(--dark-bg) text-(--light-text) p-4 outline-black rounded-lg border border-(--border-muted) focus-within:outline-1 focus-within:outline-(--cp)"
                        />

                        <button
                            className="w-full bg-(--cp) text-(--foreground-color) text-lg py-3.5 mt-8 rounded-lg font-bold hover:opacity-75 transition duration-150 ease-in-out cursor-pointer"
                            type='submit'
                        >
                            Entrar
                        </button>
                    
                    </form>

                    <div className="bg-linear-to-r from-(--background-color) via-(--cp) to-(--background-color) h-px w-full mt-10 mb-4 opacity-50"></div>

                    <div className="w-4 bg-(--foreground-color)">

                    </div>
                </div>
            </div>       
        </>
    )
}