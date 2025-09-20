import LastProject from "@/components/private-pages/last-project/last-project"
import LastProjectsCard from "@/components/private-pages/last-projects-card/last-projects-card"
import LastSession from "@/components/private-pages/last-session.tsx/last-session"

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
                        <LastProjectsCard />
                    </div>
                </div>

                <div className="flex flex-col py-8 w-[30%] gap-20">
                    <LastSession />
                    
                    <LastProject />
                </div>
            </div>
        </>
    )
}
