import React, { useState, useEffect } from "react";
import { Search } from "../services/Dogs";

export default function DogsPage() {
  const [dogs, setDogs] = useState([]);
  const [inputUser, setInputUser] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (inputUser && inputUser.length > 3) {
        const data = await Search(inputUser.trim());
        setDogs(data.result);
      }
    };
    getData();
  }, [inputUser]);

  const onKeyUp = (event) => {
    if (event.charCode === 13) {
      const value = event.target.value;
      if (value && value.length > 3) {
        setInputUser(value);
      }
    }
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl">Perros</h1>
      <hr />
      <br />
      <input
        type="input"
        onKeyPress={onKeyUp}
        className="w-48 md:w-full h-auto text-center border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 rounded shadow-lg"
      />
      {dogs.map((item) => (
        <div value={item.url}>{item.name}</div>))}
    </div>
  );
}
