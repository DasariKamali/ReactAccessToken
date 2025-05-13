import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { Outlet } from "react-router-dom";
import { msalInstance } from "./auth/msalInstance";
import { loginRequest } from "./auth/msalConfig";

const App = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
      >
        <Outlet />
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
};

export default App;
