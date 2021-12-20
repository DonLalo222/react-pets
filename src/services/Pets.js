

const urlApi = 'https://donlalo-api-pets.herokuapp.com/api';



const Search = async (inputUser, where) =>{
    const data = await fetch(`${urlApi}/${where}/search?q=${inputUser}`);
    return await data.json();
}

const FindById = async (id, where) =>{
    const data = await fetch(`${urlApi}/${where}/details/${id}`);
    return await data.json();
}



export {Search, FindById}