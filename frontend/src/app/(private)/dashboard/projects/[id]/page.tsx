"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useCookies } from "react-cookie"

export default function SingleProject () {
    const [cookies] = useCookies(["token", "userId"])   

    const params = useParams()
    const { id } = params
    const { token } = cookies

    useEffect(() => {

        const fetchProject = async () => {
            const response = await fetch(`http://localhost:3333/api/project/getSingleProject/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })

            const projectData = await response.json()
            console.log(projectData)
        }

        fetchProject()
    }, [])

    return (
        <>
        </>
    )
}