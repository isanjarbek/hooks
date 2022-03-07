import React, { useMemo, useState } from "react";

const createUser = (name, surname) => {
  const user = { name, surname };
  console.log(user);
  return user;
};

const Hook5 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => {
    createUser(name, surname);
  }, [name, surname]);

  // const user = createUser(name, surname);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Click counter rendred: {counter}
      </button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Hook5;

// useMemo:Componentda statelarni bir biriga bog'liq bo'lmagan holatda render bo'lishini oldini oladi.
// ya'ni 1state render bo'lsa boshqa state render bo'lmaslik un useMemo ishlatilinadi.
