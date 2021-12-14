import { useState } from "react";
import { Contex } from "./context";

export const ProviderContainer = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Contex.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </Contex.Provider>
  );
};
