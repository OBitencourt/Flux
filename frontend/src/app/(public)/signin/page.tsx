

export default function SignIn () {

    return (
        <>
            <div className="w-full h-dvh flex justify-center items-center">
                <div className="flex flex-col w-[30%]">
                    <h2 className="text-center text-4xl font-bold mb-3">Welcome Back!</h2>
                    <p className="text-center text-(--muted) text-xl">Login to have access to all your data</p>

                    <div className="bg-(--border-muted) h-[1px] w-full mt-6 mb-4"></div>

                    <form

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

                        <button
                            className="w-full bg-(--cp) text-(--foreground-color) p-4 mt-6 rounded-2xl font-semibold hover:opacity-75 transition duration-150 ease-in-out cursor-pointer"
                        >
                            Cadastrar-se
                        </button>
                    
                    </form>

                    <div className="bg-(--border-muted) h-[1px] w-full mt-6 mb-4"></div>

                    <div className="w-4 bg-(--foreground-color)">

                    </div>
                </div>
            </div>       
        </>
    )
}