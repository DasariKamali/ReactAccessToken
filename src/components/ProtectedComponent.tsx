import { useEffect, useState } from "react";
import { fetchWithToken } from "../utils/fetchWithToken";
import { useMsal } from "@azure/msal-react";

const ProtectedComponent = () => {
  const { instance, accounts } = useMsal();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (accounts.length === 0) return;

      try {
        const response = await instance.acquireTokenSilent({
          scopes: ["User.Read"],
          account: accounts[0],
        });

        const accessToken = response.accessToken;
        const res = await fetchWithToken("http://localhost:8000/api/protected", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Token acquisition or API call failed:", error);
      }
    };
    fetchData();
  }, [instance, accounts]);

  return (
    <div>
      <h2>Protected API Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProtectedComponent;
