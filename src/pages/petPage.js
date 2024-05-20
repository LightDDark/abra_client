import { useLoaderData } from 'react-router-dom'

export default function PetsPage() {
    const data = useLoaderData()
    return(
        <h1>{data[0]}</h1>
    )
}