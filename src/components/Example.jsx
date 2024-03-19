import { useState , useEffect} from "react";
import axios from "axios";
export function Example() {
    const [loading, setLoading] = useState(true)
    const [click, setClick] = useState(false)
    const [data, setData] = useState([])
    const fetchPokemon = () =>{
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
        .then(response => {
            console.log(response.data)
            setData(response.data.results)
            setLoading(false)
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(() => {
        if(click){
            fetchPokemon()
        }
    }, [click])
    return(
        <>
            <button className="fetchPokemon" onClick={() => setClick(true)} >Fetch Pokemon</button>
                {loading ?(
                <>
                
                </>):(
                <div className="pokemonDiv">
                    <ol className="pokemonList">
                        {data.map((pokemon, index) => (<li key={index}>{pokemon.name}</li>))}
                    </ol> 
                </div>
            )}
        </>
    )
}