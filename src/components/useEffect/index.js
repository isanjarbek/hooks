// import axios from "axios";
import React, { useEffect, useState } from "react";

const Hook2 = () => {
  // const [state, setState] = useState(0);
  // const [data, setData] = useState([]);
  // const fetchData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log("render");
  // }, [state]);

  // console.log(data);
  const [value, setValue] = useState({
    name: "1",
    userName: "2",
  });

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log("effect");
    console.log(value);
    return () => {
      console.log("cleaned up");
      console.log(value);
    };
  }, [value]);


  return (
    <div>
      {/* <button onClick={() => setState(state + 1)}>Click</button> */}

      <div>
        <input
          name="name"
          value={value.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="userName"
          value={value.userName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <div>
          <span>{value.name}</span>
        </div>
        <div>
          <span>{value.userName}</span>
        </div>
      </div>
    </div>
  );
};

export default Hook2;
