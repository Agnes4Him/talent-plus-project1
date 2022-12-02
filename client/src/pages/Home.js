import { useEffect, useState } from 'react'

const Home = () => {

    const [text, setText] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("/backend")
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setText(result.message)
            setError("")
        })
        .catch((err) => {
            setError("Unable to fetch text. Try again later.")
            setText("")
        })
    })

    return (
        <div className="display-container">
            { text && <h2>{text}</h2>}
            { error && <p>{error}</p>}
        </div>
    )
}

export default Home