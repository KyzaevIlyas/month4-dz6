import React from 'react';

const PokemonCard = ({data}) => {
    console.log(data)
    return (
        <div>
            {
                data?.map((item) => (
                    <div>
                        <h1>{item.name}</h1>
                        <img src={item.sprites.other.dream_world.front_default} alt=""/>
                    </div>
                ))
            }
        </div>
    );
};

export default PokemonCard;