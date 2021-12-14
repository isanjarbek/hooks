import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return { ...state, loading: true };
    case "GET_POSTS_SUCCESS":
      return { ...state, loading: false, data: payload };
    case "GET_POSTS_ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};

// init boshlang'ich initialState ga qo'shimcha data qo'shadi

const init = (state) => ({
  ...state,
  name: "Sanjar",
});

const Hook4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const fetchData = () => {
    dispatch({
      type: "GET_POSTS",
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({
          type: "GET_POSTS_SUCCESS",
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_POSTS_ERROR",
          payload: err,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state);

  return <div>Posts</div>;
};

export default Hook4;
