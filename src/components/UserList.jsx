import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/UserList.css";  

function UserList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                // Fetch all Pokemon (limit set to 151 for first generation, you can adjust this)
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await response.json();
                
                const pokemonDetails = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const resp = await fetch(pokemon.url);
                        return resp.json();
                    })
                );
                
                setPokemonList(pokemonDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    if (loading) return <div className="loading">Loading Pokemon...</div>;
    if (!pokemonList.length) return <div>No Pokemon found</div>;

    return (
        <div className="slider-container">
            <Slider {...sliderSettings}>
                {pokemonList.map((pokemon) => (
                    <div key={pokemon.id} className="pokemon-slide">
                        <div className="pokemon-card">
                            <div className="pokemon-number">#{String(pokemon.id).padStart(3, '0')}</div>
                            <h2>{pokemon.name.toUpperCase()}</h2>
                            <div className="pokemon-image">
                                <img 
                                    src={pokemon.sprites.front_default} 
                                    alt={pokemon.name}
                                />
                            </div>
                            <div className="pokemon-info">
                                <div className="types">
                                    {pokemon.types.map((type, index) => (
                                        <span 
                                            key={index} 
                                            className={`type-badge ${type.type.name}`}
                                        >
                                            {type.type.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="stats">
                                    <p><strong>Height:</strong> {pokemon.height/10}m</p>
                                    <p><strong>Weight:</strong> {pokemon.weight/10}kg</p>
                                    <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default UserList;