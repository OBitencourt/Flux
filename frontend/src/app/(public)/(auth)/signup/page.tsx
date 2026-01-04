"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"
import Link from "next/link"

const userSignUpSchema = z.object({
    name: z.string().nonempty("Nome de usuário é obrigatório"),
    email: z.email().nonempty("Email é obrigatório"),
    password: z.string().nonempty("Insira uma senha de usuário"),
    confirm_password: z.string().nonempty("Confirme a sua senha")
}).refine(({ password, confirm_password}) => password === confirm_password, {
  message: "As senhas precisam ser iguais",
  path: ["confirm_password"]
})

type UserSignUpType = z.infer<typeof userSignUpSchema>

type UserSignUpResponseType = {
    token: string,
    newUserId: string
}

export default function SignUp () {
    const [cookies, setCookies] = useCookies(["token", "userId"])
    const router = useRouter()

    const userSignUpForm = useForm<UserSignUpType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        resolver: zodResolver(userSignUpSchema)
    })

    const handleSubmitSignUp = async (data: UserSignUpType) => {
        console.log(data, "Formulario enviado.")

        const payload = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        const response = await fetch("http://localhost:3333/api/user", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        const userData:UserSignUpResponseType = await response.json()

        const { token, newUserId } = userData

        setCookies("token", token, {path: '/'})
        setCookies("userId", newUserId, {path: '/'})

        if(token) {
            router.push("/dashboard/home")
        }

    }

    return (

        <>  
            <div className="p-8">
                <div className="flex justify-between">
                    <div className="pl-36 pt-22 flex flex-col w-[40%]">
                        <h2 className="text-4xl font-bold mb-2">
                            Sign Up
                        </h2>
                        <p className="text-(--muted) text-xl">
                            Joins us and have access to your best organization
                        </p>

                        <div className="bg-linear-to-r from-(--background-color) via-primary to-(--background-color) h-px w-full mt-6 mb-4"></div>

                        <form className="flex flex-col" onSubmit={userSignUpForm.handleSubmit(handleSubmitSignUp)}>


                            <label
                                htmlFor="name"
                                className="text-muted text-md mb-2 mt-3"
                            >
                                Full name:
                            </label>
                            <input 
                                id="name" 
                                type="text" 
                                placeholder="e.g: Arthur Bitencourt Vieira Silva" 
                                className="bg-(--dark-bg) text-text-light p-3 outline-black rounded-xl focus-within:outline-1 focus-within:outline-primary border border-(--border-muted)"
                                {...userSignUpForm.register("name")}
                                
                            />
                            <label
                                htmlFor="Email"
                                className="text-muted text-md  mb-2 mt-3"
                            >
                                Email:
                            </label>
                            <input 
                                id="email" 
                                type="text" 
                                placeholder="e.g: youruser@gmail.com" 
                                className="bg-(--dark-bg) text-text-light p-3 outline-black rounded-xl focus-within:outline-1 focus-within:outline-primary border border-border-muted"
                                {...userSignUpForm.register("email")}
                            />
                            
                            <label
                                htmlFor="password"
                                className="text-muted text-md  mb-2 mt-3"
                            >
                                Password:
                            </label>
                            <input 
                                id="password" 
                                type="text" 
                                placeholder="e.g: yhA2Udh1" 
                                className="bg-(--dark-bg) text-text-light p-3 outline-black rounded-xl focus-within:outline-1 focus-within:outline-primary border border-border-muted"
                                {...userSignUpForm.register("password")}
                            />

                            <label
                                htmlFor="confPassword"
                                className="text-muted text-md  mb-2 mt-3"
                            >
                                Confirm Password:
                            </label>
                            <input 
                                id="confPassword" 
                                type="text" 
                                placeholder="e.g: yhA2Udh1" 
                                className="bg-(--dark-bg) border border-border-muted text-text-light p-3 outline-black rounded-xl focus-within:outline-1 focus-within:outline-primary"
                                {...userSignUpForm.register("confirm_password")}
                            />

                            <button
                                className="w-full bg-primary text-foreground p-3 mt-8 rounded-xl font-semibold hover:opacity-75 transition duration-150 ease-in-out cursor-pointer"
                                type="submit"
                            >
                                Cadastrar-se
                            </button>

                            <span className='text-sm mt-6 text-muted self-center'>
                                Já tem uma conta? <Link className='text-primary hover:brightness-70 transition duration-150 ease-in-out' href="/signin">Entre aqui.</Link>
                            </span>
                        </form>

                    </div>
                    <div className="w-[50%] border border-border-muted h-[93dvh] rounded-[50px] bg-foreground">

                    </div>

                    
                </div>
            </div>
        
        </>
    )
}