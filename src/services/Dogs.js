

const Search = async inputUser =>{
    const data = await fetch('https://donlalo-api-dogs.herokuapp.com/api/dogs/search/' + inputUser);
    return await data.json();
}

export {Search}