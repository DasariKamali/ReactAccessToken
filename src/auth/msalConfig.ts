export const msalConfig = {
    auth: {
      clientId: "7a770a40-315a-4348-b170-4323f0b58e0e",
      authority: "https://login.microsoftonline.com/df1e53b3-1663-4279-8a43-f33a0b883196",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "localStorage", 
      storeAuthStateInCookie: false,
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read"], 
  };
  