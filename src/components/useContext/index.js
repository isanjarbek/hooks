import React, { useContext } from "react";
import { Contex } from "./context";

const Hook7 = () => {
  const { visible, setVisible } = useContext(Contex);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Click</button>
      {visible ? "Open" : "Visible"}
    </div>
  );
};

export default Hook7;
