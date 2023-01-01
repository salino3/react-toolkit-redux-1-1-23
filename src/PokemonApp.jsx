import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

 const dispatch = useDispatch();
 const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);


useEffect(() => {
  // el número de páginas en el método es opcional 
 dispatch(getPokemons());

}, []);


  return (
    <>
      <h1>Pokemon Api</h1>
      <hr />
      <span>{isLoading ? "Loading..." : ""}</span>
      <ul className="ulPokemonApp">
        {pokemons.map(({ name }) => (
          <li key={name}>
            <b>{name}</b>
          </li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
      <hr className="myhr" />
    </>
  );
};
