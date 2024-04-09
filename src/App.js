import React, {useEffect, useState} from 'react';
import PokemonCard from "./components/PokemonCard";

const App = () => {
    const [data, setData]= useState()
    useEffect(() => {
        const fetchAsyncData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
            const dataResponse = await response.json()
            const detailPokemon = dataResponse.results.map( async (item) => {
                const response = await fetch(item.url)
                const responseData = await response.json()
                return responseData
            })
            const newDetailPokemon = await Promise.all(detailPokemon)
            setData(newDetailPokemon)

        }
        fetchAsyncData()
    },[])
    return (
        <div>
          <PokemonCard data={data}/>
        </div>
    );
};

export default App;