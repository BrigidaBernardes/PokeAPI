import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <Typography variant="h2" component="h4">
            {data.name}
          </Typography>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          />
          <Box className="abilities">
            {data.abilities.map((poke) => {
              return (
                <Button variant="contained" sx={{ marginRight: "1rem" }}>
                  <Typography variant="subtitle" component="p">
                    {poke.ability.name}
                  </Typography>
                </Button>
              );
            })}
          </Box>
          <Box sx={{ paddingTop: "2rem" }}>
            <Typography variant="h6" component="p">
              <i>Status Básicos</i>
            </Typography>
            {data.stats.map((poke) => {
              return (
                <Typography variant="h6" component="p">
                  <b>{poke.stat.name}</b>: {poke.base_stat}
                </Typography>
              );
            })}
          </Box>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
