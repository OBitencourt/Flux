

export default function LastProjectsCard () {
    return  (
        <>
            <div className="flex flex-col w-full hover:brightness-125 transition duration-150 ease-in-out">

                <div className="flex flex-col min-h-10 border border-primary/10 bg-foreground  rounded-t-md relative">

                    <div className="flex items-center justify-between p-4 border-b border-border-muted">
                        <h3 className="text-xl font-semibold">Projeto Flux</h3>

                        <div className="flex gap-3">
                            <div className="rounded-md text-primary/70 border border-primary/50 flex items-center justify-center px-2 py-1 hover:bg-dark-bg transition duration-75 ease-in">
                                Fullstack
                            </div>
                            <div className="rounded-md text-primary/70 border border-primary/50 flex items-center justify-center px-2 py-1 hover:bg-dark-bg transition duration-75 ease-in">
                                Solo
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-0.5">

                        <div className="pt-4 pb-1">
                            <h4 className="opacity-80 font-normal">
                                Descrição: <span className="font-light ml-2 text-sm">Projeto em que estou desenvolvendo um sistema de gestão de rotina e organização para programadores</span>
                            </h4>
                        </div>
                        <div className="mb-5">
                            <h4 className="font-normal opacity-80">
                                Prazo: <span className="font-medium ml-2 text-sm text-primary brightness-125">27/04/2025</span>
                            </h4>
                        </div>
                    </div>

                    

                    
                </div>
                
                <button className="flex justify-center text-sm items-center bg-primary/90 text-dark-bg px-4 py-3 font-semibold rounded-b-md hover:bg-primary/70 transition duration-150 ease-in-out cursor-pointer">
                    Acessar Projeto
                </button>
            </div>
        </>
    )
}