import React, { useState, useEffect } from "react";
import { Search } from "../services/Dogs";

export default function DogsPage() {
  const [dogs, setDogs] = useState([]);
  const [inputUser, setInputUser] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async (input) => {
    const data = await Search(input);
    setDogs(data.result);
  };

  const onKeyUp = (event) => {
    if (event.charCode === 13) {
      if (inputUser) {
        getData(inputUser);
      }
    }
  };

  const handleText = (event) => {
    if (event.target.value) {
      setInputUser(event.target.value);
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 p-2">
      <h1 className="text-2xl">Perros</h1>
      <hr />
      <br />
      <input
        type="input"
        onChange={handleText}
        onKeyPress={onKeyUp}
        className="w-48 md:w-full h-auto text-center border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 rounded shadow-lg"
      />
      {dogs.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
