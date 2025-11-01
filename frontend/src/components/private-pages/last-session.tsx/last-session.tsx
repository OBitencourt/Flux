import { technologies } from "@/techs";

export default function LastSession () {
    const filteredTechs = technologies.filter((tech) => ["HTML", "CSS", "Javascript"].includes(tech.name))

    return (
        <>
            <div className="w-[90%] py-6 px-5 border-1 border-border-muted rounded-3xl ">
                <div className="flex flex-col">

                    <div className="flex justify-between mb-4">
                        <h3>Última sessão</h3>

                        <h6 className="opacity-80">Há 12 horas</h6>

                    </div>

                    <div className="border-t-1 border-border-muted py-4 hover:brightness-125 transition duration-150 ease-in-out cursor-pointer">
                        <div className="bg-foreground py-3 px-5 rounded-xl flex flex-col hover:border-1 hover:border-border-muted border-1 border-transparent">
                            <div className="flex justify-between items-center">

                                <h3 className="font-medium text-text-light opacity-80">Criando sessão de contatos</h3>
                                <div className="bg-primary p-2 text-foreground rounded-md text-sm font-bold">
                                    57:32
                                </div>

                            </div>
                            <div className="mt-3 flex gap-3 items-center">
                                {
                                    filteredTechs.length > 0 ? (
                                        filteredTechs.map((tech) => {
                                            
                                            return (
                                                <div key={tech.name} className="flex justify-center items-center p-2 border-1 border-border-muted bg-dark-bg rounded-md">
                                                    <img src={tech.src} alt={tech.name} />
                                                </div>
                                            )
                                            
                                        })
                                    ) : (
                                        <div className="flex justify-center items-center p-2 border-1 border-border-muted bg-dark-bg rounded-md">
                                            No techs found
                                        </div>
                                    )
                                }
                                
                                <div className="rounded-lg text-primary border-1 border-primary flex items-center justify-center px-3 py-2 hover:bg-dark-bg transition duration-75 ease-in text-sm">
                                    Frontend
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="text-sm self-end text-muted hover:text-text-light hover:underline transition duration-100 ease-in-out cursor-default">
                        Ver todas
                    </span>
                </div>
            </div>
        </>
    )
}