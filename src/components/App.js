import React from "react";
import Navbar from "./Navbar";
import { AuthContextProvider } from "./AuthContext";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
      </AuthContextProvider>
    </div>
  );
}

export default App;
