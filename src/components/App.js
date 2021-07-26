// create your App component here
import React, {useState, useEffect} from "react"


function App() {
    const [dogData, setDogData] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setDogData(data));
    }, [])


    return (
        <div>
        {dogData && <img alt="A Random Dog" src={dogData.message} />}
        {!dogData && <p>Loading...</p>}
        </div>
    )
}

export default App;