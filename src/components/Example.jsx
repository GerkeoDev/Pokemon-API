import { useState , useEffect} from "react";
export function Example() {
    const [loading, setLoading] = useState(true)
    const [click, setClick] = useState(false)
    const [data, setData] = useState([])
    const fetchPokemon = () =>{
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
          .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            setData(data.results)
            setLoading(false)
        }).catch(err=>{
            console.log(err);
        });}
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