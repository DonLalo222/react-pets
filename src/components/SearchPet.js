import React, { useState, useEffect } from "react";
import { Search } from "../services/Pets";
import List from "./List";

export default function SearchPet() {
  const [pets, setPets] = useState([]);
  //
  const [inputUser, setInputUser] = useState("");
  const [option, setOption] = useState("dogs");

  useEffect(() => {
    const getData = async () => {
      if (inputUser && inputUser.length > 1) {
        setPets([]);
        const data = await Search(inputUser.trim(), option)
        
        if(!data.message){
          setPets(data.result);
        }
        console.clear();
      }
    };
    getData();
   
  }, [inputUser, option]);

  const onKeyUp = (event) => {
    if (event.charCode === 13) {
      const value = event.target.value;
      if (value.length === 0) {
        setPets([]);
      } else {
        if (value && value.length > 1) {
          setInputUser(value);
        }
      }
    }
  };


  const selectChanged = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl m-5">Buscador</h1>
      <hr />
      <br />
      <div className="border">
        <label className="inline-block text-xl m-5">Buscar en: </label>
        <select onChange={selectChanged} className="inline-block text-xl m-5 bg-blue-200 border rounded p-2">
          <option value="dogs">Perros</option>
          <option value="cats">Gatos</option>
        </select>
        <input
          type="input"
          onKeyPress={onKeyUp}
          placeholder="Ingresar Busqueda..."
          className="m-5 inline-block h-auto text-center border  focus:outline-none focus:ring-2 focus:ring-green-400 rounded shadow-xl text-2xl"
          
        />
      </div>

      {pets && pets.length > 0 ? (

        <List pets={pets} type={option} />
      ) : (
        <p></p>
      )
      }
    </div>

  );
}
