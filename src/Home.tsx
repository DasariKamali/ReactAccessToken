import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./auth/msalConfig";

export default function Home() {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const acquireTokenFromCacheOnly = async () => {
      if (accounts.length === 0) return;

      try {
        const response = await instance.acquireTokenSilent({
          scopes: loginRequest.scopes,
          account: accounts[0],
          forceRefresh: false,
        });

        console.log("Access Token acquired from cache:", response.accessToken);
        localStorage.setItem("home_access_token", response.accessToken);
        setAccessToken(response.accessToken);
      } catch (error: any) {
        console.error("Token not in cache (no silent token):", error);
      }
    };

    acquireTokenFromCacheOnly();
  }, [accounts, instance]);

  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

