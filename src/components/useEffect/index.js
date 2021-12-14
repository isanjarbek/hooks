import axios from "axios";
import React, { useEffect, useState } from "react";

const Hook2 = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("render");
  }, [state]);

  console.log(data);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
};

export default Hook2;
