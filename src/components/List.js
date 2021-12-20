import React from 'react'
import Item from "./Item";

export default function List(props) {

    const list = props.pets.map(item => {
        return <Item pet={item} type={props.type} />;
    });

    return (
        <>
        <p className="text-xl mt-5">
            Coincidencias: {list.length}
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">
            {list}
        </div>
        </>
    )
}
