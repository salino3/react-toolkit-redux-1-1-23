import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 1) => {
    return async (dispatch) => {
      dispatch(startLoadingPokemons() );

    const resp = await pokemonApi.get(`/pokemon?offset=10&limit=${page * 10}`);
    const {data} = resp;

      dispatch(setPokemons({pokemons: data.results, page: page + 1 }) )
    }
}





