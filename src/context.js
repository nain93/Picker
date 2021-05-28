import React from "react";

const UserContext = React.createContext();

function UserContextProvider({ children }) {
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export default UserContextProvider;
