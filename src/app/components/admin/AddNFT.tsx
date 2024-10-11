// components/AddNFTComponent.tsx
"use client";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useAddNFTToMarketplace } from "@/hooks/marketplace/useAddNFT";
const AddNFTComponent: React.FC = () => {
  const { addNFTToMarketplace, loading, error, success } =
    useAddNFTToMarketplace();

  useEffect(() => {
    if (success) {
      alert("NFT añadido al marketplace exitosamente");
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
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Añadir NFT al Marketplace
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={addNFTToMarketplace}
        >
          Añadir NFT
        </Button>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {success && (
        <Typography color="primary" sx={{ mt: 2 }}>
          NFT añadido correctamente al marketplace.
        </Typography>
      )}
    </Box>
  );
};

export default AddNFTComponent;
