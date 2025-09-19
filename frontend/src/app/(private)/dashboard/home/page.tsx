
export default function Home () {

    return (
        <>
            <div className="flex">
                
                <div className="pl-24 pr-20 py-8">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-xl font-semibold">Sessões</h2>
                            <h4 className="text-md font-medium opacity-80">Escolha uma camada para começar uma sessão de código:</h4>
                        </div>

                        <div className="flex gap-8 mt-6">
                            <div className="w-[33%] py-10 pr-20 pl-8 flex justify-start items-center border-1 border-(--border-muted) rounded-2xl hover:bg-(--foreground-color)">
                                <h3>
                                    Frontend
                                </h3>
                            </div>
                            <div className="w-[33%] py-10 pr-20 pl-8 flex justify-start items-center border-1 border-(--border-muted) rounded-2xl hover:bg-(--foreground-color)">
                                Backend
                            </div>
                            <div className="w-[33%] py-10 pr-20 pl-8 flex justify-start items-center border-1 border-(--border-muted) rounded-2xl hover:bg-(--foreground-color)">
                                Fullstack
                            </div>
                        </div>
                        
                        <div className="mt-16 mb-6">

                            <h2 className="text-xl font-semibold">Projetos</h2>
                            <h4 className="text-md font-medium opacity-80">Esses são seus últimos projetos:</h4>
                            
                        </div>
                        <div className="flex flex-col gap-4 w-[33%] hover:brightness-125 transition duration-150 ease-in-out">

                            <div className="flex flex-col min-h-10 border-1 border-(--cp) bg-(--foreground-color)  rounded-3xl p-6 relative">
                                <h3 className="text-xl font-semibold mb-4">Projeto Flux</h3>

                                <div className=" border-t-[1px] border-(--border-muted) mb-6 py-4">
                                    <h4 className="opacity-80 font-normal">
                                        Descrição: <span>Projeto em que estou desenvolvendo um sistema de gestão de rotina e organização para programadores</span>
                                    </h4>
                                </div>

                                <div>
                                    <h4 className="font-normal opacity-80">Prazo: <span className="font-medium text-(--cp)">27/04/2025</span></h4>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <div className="rounded-2xl text-(--cp) border-1 border-(--cp) flex items-center justify-center px-3 py-2 hover:bg-(--dark-bg) transition duration-75 ease-in">
                                        Fullstack
                                    </div>
                                    <div className="rounded-xl text-(--cp) border-1 border-(--cp) flex items-center justify-center px-3 py-2 hover:bg-(--dark-bg) transition duration-75 ease-in">
                                        Solo
                                    </div>
                                </div>
                            </div>
                            
                            <button className="flex justify-center items-center bg-(--cp) text-(--dark-bg) px-4 py-3 font-semibold rounded-2xl hover:opacity-70 transition duration-150 ease-in-out cursor-pointer">
                                Acessar Projeto
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col py-8 w-[30%] gap-20">
                    <div className="w-[90%] py-6 px-5 border-1 border-(--border-muted) rounded-3xl ">
                        <div className="flex flex-col">

                            <div className="flex justify-between mb-4">
                                <h3>Última sessão</h3>

                                <h6 className="opacity-80">Há 12 horas</h6>

                            </div>

                            <div className="border-t-1 border-(--border-muted) py-4 hover:brightness-125 transition duration-150 ease-in-out cursor-pointer">
                                <div className="bg-(--foreground-color) py-3 px-5 rounded-xl flex flex-col">
                                    <div className="flex justify-between items-center">

                                        <h3 className="font-medium opacity-80">Criando sessão de contatos</h3>
                                        <div className="bg-(--cp) p-2 text-(--foreground-color) rounded-md text-sm font-semibold">
                                            57:32
                                        </div>

                                    </div>
                                    <div className="mt-3 flex gap-3 items-center">
                                        <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                            CS
                                        </div>
                                        <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                            HT
                                        </div>
                                        <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                            JS
                                        </div>
                                        <div className="rounded-2xl text-(--cp) border-1 border-(--cp) flex items-center justify-center px-3 py-2 hover:bg-(--dark-bg) transition duration-75 ease-in text-sm">
                                            Frontend
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[90%] py-4 px-5 border-1 border-(--border-muted) rounded-3xl ">
                        <div className="flex flex-col">

                            <div className="flex justify-between mb-4">
                                <h3>Último projeto:</h3>

                                <h6 className="opacity-80">Há 12 horas</h6>

                            </div>


                            <div className="border-t-1 border-(--border-muted) py-4 ">
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <h3 className="font-medium opacity-80 text-xl text-(--text-light)">Projeto Flux</h3>
                                        <div className="rounded-2xl text-(--cp) border-1 border-(--cp) flex items-center justify-center px-3 py-1 hover:bg-(--dark-bg) transition duration-75 ease-in">
                                            Fullstack
                                        </div>
                                    </div>

                                </div>

                                <div className="bg-(--foreground-color) py-3 px-3 rounded-xl flex flex-col mt-4 hover:brightness-125 transition duration-150 ease-in-out cursor-pointer">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold mb-0">Descrição:</h3>
                                        <p className="text-sm">
                                            Projeto em que estou desenvolvendo um web app de gestão de rotina e organização para programadores.
                                        </p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold mt-6 mb-0.5">Techs:</h3>
                                        <div className="flex gap-3 items-center mt-0">
                                            <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                                CS
                                            </div>
                                            <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                                HT
                                            </div>
                                            <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                                JS
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold mb-0 mt-6">Passos:</h3>
                                        <p className="text-sm">
                                            O Projeto "Projeto Flux já tem 5/10 passos concluídos!"
                                        </p>

                                        <div className="bg-(--background-color) w-full px-3 py-2 relative flex justify-between items-center rounded-xl gap-3 mt-2">
                                            
                                            <div className="bg-(--border-muted) w-full rounded-2xl min-h-2">
                                                <div className="bg-(--cp) w-1/2 min-h-2 rounded-2xl">
                                                    
                                                </div>
                                            </div>

                                            <span className="text-sm">
                                                5/10
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
