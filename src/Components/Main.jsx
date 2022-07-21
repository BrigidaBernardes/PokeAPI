import React from "react";
import Card from "./Card";
import { Box, Stack, Button } from "@mui/material";
import Pokeinfo from "./Pokeinfo";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", margin: "0 4rem" }}>
        <img
          src={`https://user-images.githubusercontent.com/69367907/105195232-72462e00-5b08-11eb-9bd0-dfa95f8e7e9a.png`}
          alt="Pokémon Logo"
          width="400px"
        />
        <Stack spacing={2}>
          <div>
            {nextUrl && (
              <Button
                variant="contained"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Próximo
              </Button>
            )}
          </div>
          <div>
            {prevUrl && (
              <Button
                variant="contained"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Voltar
              </Button>
            )}
          </div>
        </Stack>
      </Box>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};
export default Main;
