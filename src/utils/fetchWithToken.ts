import { msalInstance } from "../auth/msalInstance";

export async function fetchWithToken(url: string, options: RequestInit = {}) {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    console.error("No active account");
    throw new Error("No active account");
  }

  try {
    const tokenResponse = await msalInstance.acquireTokenSilent({
      scopes: ["User.Read"], 
      account,
    });

    console.log("Access Token:", tokenResponse.accessToken); 

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${tokenResponse.accessToken}`,
      },
    });
  } catch (error) {
    console.error("Error acquiring token:", error);
    throw new Error("Unable to acquire token.");
  }
}
