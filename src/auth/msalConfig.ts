export const msalConfig = {
    auth: {
      clientId: "<ClientID>",
      authority: "https://login.microsoftonline.com/<TenantID>",
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
  
