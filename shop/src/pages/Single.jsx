import { useParams } from "react-router-dom"

function Single() {

    const { id } = useParams(() => {

    })

    return (
        <div>
            <h3>Article {id}</h3>
        </div>
    )
}

export default Single;