import {AnyProps} from 'types';
import URI from 'urijs';

const endpoint = new URI('https://pokeapi.co');

export async function handleErrors(resp) {
  if (!resp.ok) {
    const error = await resp.text();
    const response = {ok: false, error};
    console.log(response);
    if (error === 'Error: Session not found') {
      // need to logout
    } else {
    }
    return response;
  }
  return resp.json();
}

export const requestOptions = ({
  method = 'POST',
  data = null,
  credentials = null,
}: {
  method?: string;
  data?: AnyProps | null;
  credentials?: string | null;
}) => {
  return {
    method,
    credentials,
    headers: new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // need this?
    }),
    ...(data ? {body: JSON.stringify(data)} : {}),
  };
};

export const getPokemons = async () => {
  // const url = endpoint.path(`api/v2/pokemon?limit=${limit}`).toString();
  const url = endpoint.path('api/v2/pokemon').toString();
  const response = await fetch(url, requestOptions({method: 'GET'})).then(
    handleErrors,
  );
  // for (let index = 0; index < response.results?.length; index++) {
  //   response.results[index].metadata = await getPokemon(
  //     response.results[index].url,
  //   );
  // }
  return response;
};

export const getPokemon = async url => {
  const response = await fetch(url, requestOptions({method: 'GET'})).then(
    handleErrors,
  );
  return response;
};

export const getPokemonSpecies = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const response = await fetch(url, requestOptions({method: 'GET'})).then(
    handleErrors,
  );
  return response;
};

export const getPokemonEvolutions = async id => {
  const url = `https://pokeapi.co/api/v2/evolution-chain/${id}`;
  console.log(url);
  const response = await fetch(url, requestOptions({method: 'GET'})).then(
    handleErrors,
  );
  return response;
};
