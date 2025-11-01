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
                            <div className="w-[33%] py-8  pl-6 flex justify-start items-center border border-(--border-muted) rounded-2xl bg-(--foreground-color) hover:bg-(--dark-bg) transition duration-150 ease-in-out shadow-[0px_9px_0px_0px_rgba(50,_50,_50,_1)] gap-4 relative">
                                <div className="p-4 bg-[#1E1E1E] rounded-xl z-1">
                                    <img src="/images/Frontend-session-icon.svg" alt="front-icon" />
                                </div>
                                <h3 className="text-xl font-semibold text-(--muted) z-1">
                                    Frontend
                                </h3>
                                <img
                                    src="/images/Frontend-session-image.png"
                                    alt="front-decoration"
                                    className="absolute right-0 top-0 z-0"
                                />
                            </div>
                            <div className="w-[33%] py-10 pr-20 pl-8 flex justify-start items-center border border-(--border-muted) rounded-2xl bg-(--foreground-color) hover:bg-(--dark-bg) transition duration-150 ease-in-out shadow-[0px_9px_0px_0px_rgba(50,_50,_50,_1)] gap-4 relative">
                                <div className="p-4 bg-[#1E1E1E] rounded-xl z-1">
                                    <img src="/images/Backend-session-icon.svg" alt="front-icon" />
                                </div>
                                <h3 className="text-xl font-semibold text-(--muted) z-1">
                                    Backend
                                </h3>
                                <img
                                    src="/images/Backend-session-image.png"
                                    alt="front-decoration"
                                    className="absolute right-0 top-0 z-0"
                                />
                            </div>
                            <div className="w-[33%] py-10 pr-20 pl-8 flex justify-start items-center border border-(--border-muted) rounded-2xl bg-(--foreground-color) hover:bg-(--dark-bg) transition duration-150 ease-in-out shadow-[0px_9px_0px_0px_rgba(50,_50,_50,_1)] gap-4 relative">
                                <div className="p-4 bg-[#1E1E1E] rounded-xl z-1">
                                    <img src="/images/Fullstack-session-icon.svg" alt="front-icon" />
                                </div>
                                <h3 className="text-xl font-semibold text-(--muted) z-1">
                                    Fullstack
                                </h3>
                                <img
                                    src="/images/Fullstack-session-image.png"
                                    alt="front-decoration"
                                    className="absolute right-0 top-0 z-0"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-16 mb-6">

                            <h2 className="text-xl font-semibold">Projetos</h2>
                            <h4 className="text-md font-medium opacity-80">Esses são seus últimos projetos:</h4>
                            
                        </div>
                        <LastProjectsCard />
                    </div>
                </div>

                <div className="flex flex-col py-8 w-[30%] gap-6">
                    <LastSession />
                    
                    <LastProject />
                </div>
            </div>
        </>
    )
}
