import { useState, useEffect } from "react";
import useInitMarketplace from "./initMarketplace";
import { ethers, BigNumberish } from "ethers";

export function useGetAvailableNfts() {
  const [availableNFTs, setAvailableNFTs] = useState<number[]>([]);
  const [tokenError, setTokenError] = useState<string | null>(null);

  const { tokenContract, error: contractError } = useInitMarketplace();

  useEffect(() => {
    if (contractError) {
      setTokenError(contractError);
      return;
    }

    const fetchAvailableNFTs = async () => {
      if (!tokenContract) return;

      try {
        const nfts: BigNumberish[] = await tokenContract.getAvailableNFTs();
        setAvailableNFTs(nfts.map((nft) => Number(ethers.toBigInt(nft))));
      } catch (error: any) {
        console.error("Error fetching available NFTs:", error);
        setTokenError(error.message || "Error fetching available NFTs");
      }
    };

    fetchAvailableNFTs();
  }, [tokenContract, contractError]);

  return { availableNFTs, tokenError };
}
