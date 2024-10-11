// components/SetNFTPriceComponent.tsx
"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useSetNFTPrice } from "@/hooks/marketplace/useSetNftPrice";

const SetNFTPriceComponent: React.FC = () => {
  const [price, setPrice] = useState<number>(0.05);
  const { setNFTPrice, loading, error, success } = useSetNFTPrice();

  const handleSetPrice = () => {
    setNFTPrice(price);
  };

  useEffect(() => {
    if (success) {
      alert("Precio de NFT actualizado exitosamente");
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
        Establecer Precio de NFT
      </Typography>
      <TextField
        label="Precio (ETH)"
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        sx={{ mb: 2 }}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" color="primary" onClick={handleSetPrice}>
          Establecer Precio
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

export default SetNFTPriceComponent;
