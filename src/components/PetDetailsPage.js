import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import { FindById } from "../services/Pets";

export default function PetDetailsPage() {
    const {id, type} = useParams();
    const [pet, setPet] = useState({});

    useEffect(() => {
        const getData = async () =>{
            const data = await FindById(id, type);
            setPet(data.result);
        };

        getData();
    }, [id, type])


    return (
        <div>
            <ItemDetails pet={pet} ></ItemDetails>
        </div>
    )
}
