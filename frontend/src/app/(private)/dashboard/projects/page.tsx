"use client"

import { technologies } from "@/techs"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

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

    return (
        <>
            <div className="flex flex-col gap-8 pl-24 pr-20 py-12 w-full">
                <h2 className="text-(--text-light) text-4xl font-semibold">
                    Projects
                </h2>
                <div className="flex gap-4">
                    <div className="rounded-lg border-1 border-(--muted) py-2 px-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out cursor-default">
                        Frontend
                    </div>
                    <div className="rounded-lg border-1 border-(--muted) py-2 px-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out cursor-default">
                        Backend
                    </div>
                    <div className="rounded-lg border-1 border-(--muted) py-2 px-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out cursor-default">
                        Fullstack
                    </div>
                </div>
                
                <div className="flex gap-8 flex-wrap wrap-normal">
                    
                    {
                        
                        
                        projects.length > 0 ? (
                            projects.map((project) => {

                                console.log(project)

                                const projectTechs = project.techs
                                const techs = projectTechs.map(tech => tech.name)

                                const filteredTechs = technologies.filter((tech) => techs.includes(tech.name))
                                
                                return (
                                    <div key={project._id} className="bg-(--foreground-color) border border-(--border-muted) hover:brightness-130 hover:scale-105 transition duration-100 ease-in-out rounded-xl p-6 flex gap-10 shadow-[0px_9px_0px_0px_rgba(50,_50,_50,_1)]">
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold text-2xl mb-3 text-(--text-light)">
                                                {project.title}
                                            </h3>
                                            <div className="mb-4">
                                                <h6 className="text-lg font-medium text-(--muted)">Iniciado no dia: 12/05/2025</h6>
                                                <h6 className="text-lg font-medium text-(--muted)">Prazo: 12/08/2025</h6>
                                            </div>
                                            <div className="mt-3 flex gap-3 items-center">
                                                {
                                                    
                                                    filteredTechs.length > 0 ? (
                                                        filteredTechs.map((tech) => {
                                                            
                                                            return (
                                                                <div key={tech.name} className="flex justify-center text-center items-center p-2 border-1 border-(--border-muted) bg-(--dark-bg) rounded-md">
                                                                    <img src={tech.src} alt={tech.name} />
                                                                </div>
                                                                
                                                            )
                                                            
                                                        })
                                                    ) : (
                                                        <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) bg-(--dark-bg) rounded-md">
                                                            No techs found
                                                        </div>
                                                    )
                                                }
                                                <div className="rounded-full bg-(--dark-bg) text-(--cp) px-3 py-2 border-1 border-(--border-muted)">
                                                    +1
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 items-end">
                                            <div className="border-(--border) border-1 px-3 py-1.5 rounded-lg text-(--border)">
                                                {project.layer}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            )
                        ) : (
                            <h3>
                                No projects found
                            </h3>
                        )
                        
                    } 
                    
                    <div className="bg-(--foreground-color) hover:brightness-120 transition duration-100 ease-in-out rounded-xl p-6 flex justify-center items-center gap-10  border-dashed border-1 border-(--border) w-1/4 shadow-[0px_9px_0px_0px_rgba(220,220,220,_1)]">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-2xl mb-3 text-(--text-light)">
                                Add project
                            </h3>
                            <span className="font-semibold text-4xl mb-3 text-(--text-light) text-center">
                                +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
