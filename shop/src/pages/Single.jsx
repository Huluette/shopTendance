import { useParams } from "react-router-dom"

export default function Single() {

    const {id} = useParams(() => {
        
    })

    return (
        <div>
            <h3>Article {id}</h3>
        </div>
    )
}

