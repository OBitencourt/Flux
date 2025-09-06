

export default function SignUp () {

    return (

        <>  
            <div className="p-8">
                <div className="flex justify-between">
                    <div className="pl-36 pt-22 flex flex-col w-[40%]">
                        <h2 className="text-4xl font-bold mb-3">
                            Sign Up
                        </h2>
                        <p className="text-(--muted) text-xl">
                            Joins us and have access to your best organization
                        </p>

                        <div className="bg-(--border) h-[1px] w-full mt-6 mb-4"></div>

                        <label
                            htmlFor="name"
                            className="text-(--text-light) text-lg mb-2 mt-3"
                        >
                            Full name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="e.g: Arthur Bitencourt Vieira Silva" 
                            className="bg-(--dark-bg) text-(--light-text) p-4 outline-black rounded-2xl focus-within:outline-1 focus-within:outline-(--cp)"
                        />
                        
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
                            className="bg-(--dark-bg) text-(--light-text) p-4 outline-black rounded-2xl focus-within:outline-1 focus-within:outline-(--cp)"
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
                            className="bg-(--dark-bg) text-(--light-text) p-4 outline-black rounded-2xl focus-within:outline-1 focus-within:outline-(--cp)"
                        />

                        <label
                            htmlFor="confPassword"
                            className="text-(--text-light) text-lg mb-2 mt-3"
                        >
                            Confirm Password
                        </label>
                        <input 
                            id="confPassword" 
                            type="text" 
                            placeholder="e.g: yhA2Udh1" 
                            className="bg-(--dark-bg) text-(--light-text) p-4 outline-black rounded-2xl focus-within:outline-1 focus-within:outline-(--cp)"
                        />

                        <button
                            className="w-full bg-(--cp) text-(--foreground-color) p-4 mt-6 rounded-2xl font-semibold hover:opacity-75 transition duration-150 ease-in-out cursor-pointer"
                        >
                            Cadastrar-se
                        </button>

                    </div>
                    <div className="w-[50%] border-1 border-(--border-muted) h-[95dvh] rounded-[50px] bg-(--foreground-color)">

                    </div>
                </div>
            </div>
        
        </>
    )
}