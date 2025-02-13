import { ethers } from "ethers";
import { useEffect, useState } from "react";
import tokenErc721Abi from "@/app/abis/tokenErc721Abi.json"; // ABI del contrato NFT

const useInitConquerNFT = () => {
  const [nftContract, setNftContract] = useState<ethers.Contract | null>(null);
  const [error, setError] = useState<string | null>(null);
  const contractAddress = process.env.NEXT_PUBLIC_CONQUER_NFT_ADDR; // Dirección del contrato NFT en .env.local

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
        // Usamos el ABI importado del JSON en lugar de `ConquerNFT__factory.abi`
        const contract = new ethers.Contract(
          contractAddress,
          tokenErc721Abi,
          signer ?? provider
        );
        setNftContract(contract);
      } catch (error) {
        console.error("Error initializing NFT contract:", error);
        setError("Failed to initialize NFT contract.");
      }
    }

    initContract();
  }, [contractAddress]);

  return { nftContract, error };
};

export default useInitConquerNFT;
