"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useAddNFTToMarketplace } from "@/hooks/marketplace/useAddNFT";
import axios from "axios";
import FormData from "form-data";

const AddNFTComponent = () => {
  const [tokenURI, setTokenURI] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const { addNFTToMarketplace, loading, error, success } =
    useAddNFTToMarketplace({ tokenURI: tokenURI });

  useEffect(() => {
    if (success) {
      alert("NFT añadido al marketplace exitosamente");
    }
  }, [success]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsImageUploaded(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file detected");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const pinataMetadata = JSON.stringify({ name: "NFT-Image" });
    formData.append("pinataMetadata", pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", pinataOptions);

    try {
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: Infinity,
          headers: {
            "Content-Type": `multipart/form-data`,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
          },
        }
      );
      const ipfsHash = response.data.IpfsHash;
      const ipfsURI = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
      setTokenURI(ipfsURI);
      setIsImageUploaded(true);
    } catch (error) {
      console.error("Error uploading file: ", error);
    } finally {
      setIsUploading(false);
    }
  };

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

      {isUploading ? (
        <CircularProgress />
      ) : (
        <>
          <input type="file" name="file" onChange={handleFileChange} />

          <Button variant="contained" color="primary" onClick={handleUpload}>
            Cargar Imagen
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={addNFTToMarketplace}
            disabled={!isImageUploaded || loading}
          >
            Añadir NFT
          </Button>
        </>
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
