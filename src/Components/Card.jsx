import React from "react";
import Box from "@mui/material/Box";
import { Paper, Typography, Button } from "@mui/material";

const Card = ({ pokemon, loading, infoPokemon, data }) => {
  return (
    <>
      {loading ? (
       <Typography variant="h4" component="p">Loading...</Typography>
      ) : (
        pokemon.map((item) => {
          return (
            <Box key={item.id}>
              <Paper
                sx={{
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                elevation={3}
                onClick={() => infoPokemon(item)}
              >
                <Typography variant="h4" component="h1">
                  {item.id}
                </Typography>
                <img src={item.sprites.front_default} alt="" />
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
              </Paper>
            </Box>
          );
        })
      )}
    </>
  );
};
export default Card;
