import { useLoaderData } from 'react-router-dom'

export default function BookPage() {
  const data = useLoaderData()
  return (
    <>
      <h1>{data.Name}</h1>
      <img src={data.Image}></img>
      <p>{data.Description}</p>
    </>
  )
}
