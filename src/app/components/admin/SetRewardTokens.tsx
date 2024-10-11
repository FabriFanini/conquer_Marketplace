"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useSetRewardTokens } from "@/hooks/marketplace/useSetRewardTokens";

const SetRewardTokensComponent: React.FC = () => {
  const [tokens, setTokens] = useState<number>(20);
  const { setRewardTokens, loading, error, success } = useSetRewardTokens();

  const handleSetTokens = () => {
    setRewardTokens(tokens);
  };

  useEffect(() => {
    if (success) {
      alert("Cantidad de tokens de recompensa actualizada exitosamente");
    }
  }, [success]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        border: "1px solid grey",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
        my: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Establecer Tokens de Recompensa
      </Typography>
      <TextField
        label="Cantidad de Tokens"
        type="number"
        value={tokens}
        onChange={(e) => setTokens(parseInt(e.target.value, 10))}
        sx={{ mb: 2 }}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" color="primary" onClick={handleSetTokens}>
          Establecer Tokens
        </Button>
      )}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default SetRewardTokensComponent;
