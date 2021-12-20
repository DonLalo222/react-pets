import React from 'react';
import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <Link to={`/${props.type}/details/${props.pet.id}`}>
            <div className="rounded shadow-lg hover:shadow-2xl m-2 grid grid-flow-row auto-rows-max">
                <img
                    src={props.pet.img}
                    alt={props.pet.name}
                    className="md:object-contain object-fill h-full w-full "
                />
                <p className="text-center text-xl">{props.pet.name}</p>
            </div>
        </Link>
    )
}
