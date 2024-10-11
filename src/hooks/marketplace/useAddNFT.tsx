import { useState, useCallback } from "react";
import { ethers } from "ethers";
import useInitMarketplace from "./initMarketplace";

export function useAddNFTToMarketplace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const { tokenContract, error: contractError } = useInitMarketplace();

  const addNFTToMarketplace = useCallback(async () => {
    if (!tokenContract) {
      setError("Token contract not loaded.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const tx = await tokenContract.addNFTToMarketplace();
      await tx.wait();
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Failed to add NFT to marketplace.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, [tokenContract]);

  return { addNFTToMarketplace, loading, error, success };
}
