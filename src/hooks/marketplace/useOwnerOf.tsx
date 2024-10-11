import { useState, useCallback, useEffect } from "react";
import useInitMarketplace from "./initMarketplace";

interface TokenProperties {
  owner: string;
}

export function useOwnerOf() {
  const [owner, setOwner] = useState<string | null>(null);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const { tokenContract, error: contractError } = useInitMarketplace();

  useEffect(() => {
    if (contractError) {
      setTokenError(contractError);
    } else if (tokenContract) {
      (async () => {
        try {
          const ownerAddress = await tokenContract.owner();
          console.log("OWNER: ", ownerAddress);
          setOwner(ownerAddress);
        } catch (err: any) {
          setTokenError(err.message || "Failed to fetch owner address.");
        }
      })();
    }
  }, [tokenContract, contractError]);

  return { owner, tokenError };
}
