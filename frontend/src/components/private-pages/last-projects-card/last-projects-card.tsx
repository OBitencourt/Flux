

export default function LastProjectsCard () {
    return  (
        <>
            <div className="flex flex-col gap-4 w-[33%] hover:brightness-125 transition duration-150 ease-in-out">

                <div className="flex flex-col min-h-10 border-1 border-primary bg-foreground  rounded-3xl p-6 relative">
                    <h3 className="text-xl font-semibold mb-4">Projeto Flux</h3>

                    <div className=" border-t-[1px] border-border-muted mb-6 py-4">
                        <h4 className="opacity-80 font-normal">
                            Descrição: <span>Projeto em que estou desenvolvendo um sistema de gestão de rotina e organização para programadores</span>
                        </h4>
                    </div>

                    <div>
                        <h4 className="font-normal opacity-80">Prazo: <span className="font-medium text-primary">27/04/2025</span></h4>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <div className="rounded-2xl text-primary border-1 border-primary flex items-center justify-center px-3 py-2 hover:bg-dark-bg transition duration-75 ease-in">
                            Fullstack
                        </div>
                        <div className="rounded-xl text-primary border-1 border-primary flex items-center justify-center px-3 py-2 hover:bg-dark-bg transition duration-75 ease-in">
                            Solo
                        </div>
                    </div>
                </div>
                
                <button className="flex justify-center items-center bg-primary text-dark-bg px-4 py-3 font-semibold rounded-2xl hover:opacity-70 transition duration-150 ease-in-out cursor-pointer">
                    Acessar Projeto
                </button>
            </div>
        </>
    )
}