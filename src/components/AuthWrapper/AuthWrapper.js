import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const AuthWrapper = ({ children }) => {
  const curOrganization = localStorage.getItem("organization_id");
  const options = {
    domain: "training-mp-dev.eu.auth0.com",
    clientId: "fu0KIw5QQMp1bo3hP161qYyUWkEHQhQs",
    redirectUri: window.location.origin,
    ...(curOrganization ? { organization: curOrganization } : null)
  };
  return <Auth0Provider {...options}>{children}</Auth0Provider>;
};
