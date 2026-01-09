import { technologies } from "@/techs"

const filteredTechs = technologies.filter((tech) => ["HTML", "CSS", "Javascript"].includes(tech.name))

export default function LastProject () {
    return (
        <>
            <div className="w-[90%] border border-border-muted rounded-xl ">
                <div className="flex flex-col">

                    <div className="px-5 py-4 flex justify-between mb-4 border-b border-border-muted">
                        <h3>Último projeto:</h3>

                        <h6 className="opacity-80">Há 12 horas</h6>

                    </div>


                    <div className="px-4 pb-4">
                        
                        <div className="flex w-full items-center">
                            <div className="flex w-full justify-between gap-4 items-center">
                                <h3 className="font-medium opacity-80 text-xl text-text-light">Projeto Flux</h3>
                                <div className="rounded-md text-primary/70 border border-primary/50 flex items-center justify-center px-2 py-1 hover:bg-dark-bg transition duration-75 ease-in">
                                    Fullstack
                                </div>
                            </div>

                        </div>

                        <div className="bg-foreground py-3 px-3 rounded-md flex flex-col mt-4 hover:brightness-125 transition duration-150 ease-in-out cursor-pointer">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold mb-0">Descrição:</h3>
                                <p className="text-sm">
                                    Projeto em que estou desenvolvendo um web app de gestão de rotina e organização para programadores.
                                </p>
                            </div>


                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold mt-6 mb-0.5">Techs:</h3>
                                <div className="flex gap-3 items-center mt-0">
                                    {
                                        filteredTechs.length > 0 ? (
                                            
                                            filteredTechs.map(tech => (
                                                <div key={tech.name} className="flex justify-center items-center p-2 border border-border-muted rounded-md">
                                                    <img src={tech.src} alt={tech.name} />
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex justify-center items-center p-2 border border-border-muted rounded-md">
                                                No techs found
                                            </div>
                                        )
                                    }
                            
                                </div>
                            </div>
                            

                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold mb-0 mt-6">Passos:</h3>
                                <p className="text-sm">
                                    O Projeto "Projeto Flux" já tem 5/10 passos concluídos!
                                </p>

                                <div className="bg-(--background-color) w-full px-3 py-2 relative flex justify-between items-center rounded-xl gap-3 mt-2">
                                    
                                    <div className="bg-border-muted w-full rounded-2xl min-h-2">
                                        <div className="bg-primary w-1/2 min-h-2 rounded-2xl">
                                            
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
        </>
    )
}