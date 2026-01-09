"use client"

import { technologies } from "@/techs"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"

type ProjectsStepsType = Array<{
    _id: string
    name: string
    index: number
    isChecked: boolean
}>

type ProjectsTechsType = Array<{
    name: string
    _id: string
}>

type UserProjectsType = Array<{
    createdAt: string
    description: string
    layer: string
    steps: ProjectsStepsType
    techs: ProjectsTechsType
    title: string
    userId: string
    _id: string
}>

type ProjectsResponse = {
    message: string
    userProjects: UserProjectsType
}

export default function Projects () {
    const router = useRouter()

    const [cookies] = useCookies(["token", "userId"])
    const [projects, setProjects] = useState<UserProjectsType>([])

    const { token, userId } = cookies

    useEffect(() => {

        const fetchProjects = async () => {
            const response = await fetch(`http://localhost:3333/api/project/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
            const projectsData: ProjectsResponse = await response.json()
            const { userProjects } = projectsData
            setProjects(userProjects)
        }
        fetchProjects()
    }, [token, userId])

    const handleProjectRedirect = (id: string) => {
        router.push(`/dashboard/projects/${id}`)
    }

    return (
        <>
            <div className="flex flex-col pl-24 pr-20 py-12 w-full">
                <h2 className="text-text-light text-4xl mb-4 font-semibold">
                    Projects
                </h2>

                <span className="mb-2">Filter:</span>
                <div className="flex gap-2 mb-8">
                    <div className="rounded-lg border border-border-muted py-2 px-3 hover:bg-dark-bg transition duration-100 ease-in-out cursor-default">
                        Frontend
                    </div>
                    <div className="rounded-lg border border-border-muted py-2 px-3 hover:bg-dark-bg transition duration-100 ease-in-out cursor-default">
                        Backend
                    </div>
                    <div className="rounded-lg border border-border-muted py-2 px-3 hover:bg-dark-bg transition duration-100 ease-in-out cursor-default">
                        Fullstack
                    </div>
                </div>
                
                <div className="flex gap-8 flex-wrap wrap-normal">
                    
                    {
                        
                        
                        projects ? (
                            projects.map((project) => {
                                const projectTechs = project.techs
                                const techs = projectTechs.map(tech => tech.name)
                                const filteredTechs = technologies.filter((tech) => techs.includes(tech.name))
                                
                                return (
                                    <div
                                        onClick={() => {handleProjectRedirect(project._id)}}
                                        key={project._id}
                                        className="bg-foreground border border-border-muted hover:brightness-110 hover:scale-105 transition duration-100 ease-in-out rounded-md p-6 flex gap-10 shadow-[0px_9px_0px_0px_rgba(50,50,50,1)]"
                                    >
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold text-2xl mb-3 text-text-light">
                                                {project.title}
                                            </h3>
                                            <div className="mb-4">
                                                <h6 className="text-md font-medium text-muted">
                                                    Iniciado no dia: <span className="text-primary/70">12/05/2025</span>
                                                </h6>
                                                <h6 className="text-md font-medium text-muted">
                                                    Prazo: <span className="text-primary/70">12/08/2025</span>
                                                </h6>
                                            </div>
                                            <div className="mt-3 flex gap-3 items-center">
                                                {
                                                    
                                                    filteredTechs.length > 0 ? (
                                                        filteredTechs.map((tech) => {
                                                            
                                                            return (
                                                                <div key={tech.name} className="flex justify-center text-center items-center p-2 border border-border-muted bg-dark-bg rounded-md">
                                                                    <img src={tech.src} alt={tech.name} />
                                                                </div>
                                                                
                                                            )
                                                            
                                                        })
                                                    ) : (
                                                        <div className="flex justify-center items-center p-2 border border-border-muted bg-dark-bg rounded-md">
                                                            No techs found
                                                        </div>
                                                    )
                                                }
                                                <div className="rounded-full bg-dark-bg text-primary px-3 py-2 border border-border-muted">
                                                    +1
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 items-end">
                                            <div className="border-primary/50 border px-2 py-1 rounded-md text-primary/70">
                                                {project.layer}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            )
                        ) : (
                            <h3 className="mr-5">
                                No projects found. Create your first!
                            </h3>
                        )
                        
                    } 
                    
                    <div className="bg-foreground hover:brightness-120 transition duration-100 ease-in-out rounded-md p-6 flex justify-center items-center gap-10  border-dashed border border-border-muted w-1/4 shadow-[0px_9px_0px_0px_#1E1E1E]">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-md text-muted">
                                Add project
                            </h3>
                            <span className="font-light text-3xl text-muted text-center">
                                +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
