import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import marketplaceAbi from "@/app/abis/marketplaceAbi.json"; // Ruta al archivo JSON con el ABI

const useInitMarketplace = () => {
  const [tokenContract, setTokenContract] = useState<ethers.Contract | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const contractAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDR;

  useEffect(() => {
    async function initContract() {
      if (!contractAddress) {
        setError("Contract address is not set");
        return;
      }

      let provider;
      let signer;

      if (window.ethereum == null) {
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
      }

      try {
        // Usa el ABI importado del JSON en lugar de `Marketplace__factory.abi`
        const contract = new ethers.Contract(
          contractAddress,
          marketplaceAbi,
          signer ?? provider
        );
        setTokenContract(contract);
      } catch (error) {
        console.error("Error initializing contract:", error);
        setError("Failed to initialize contract.");
      }
    }

    initContract();
  }, [contractAddress]);

  console.log(marketplaceAbi); // Verifica que el ABI se está cargando correctamente
  return { tokenContract, error };
};

export default useInitMarketplace;
