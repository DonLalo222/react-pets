import React from 'react'

export default function ItemDetails(props) {

    return (
        <>
            <div className="text-center mb-5 mt-5 p-2">
                <h1 className="text-3xl">{props.pet.nombre}</h1>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img src={props.pet.img} alt={props.pet.nombre} title={props.pet.nombre} />
                </div>
                <div>
                    <table className="w-full shadow text-left rounded-lg text-xl my-9">
                        <tr className='border'>
                            <th>Clasificacion FCI </th>
                            <td>{props.pet.clasificacionFCI}</td>
                        </tr>
                        <tr className='border'>
                            <th>Origen </th>
                            <td>{props.pet.origen.map(o => { return `"${o}" `})}</td>
                        </tr>
                        <tr className='border'>
                            <th>Caracteristicas </th>
                            <td>{props.pet.caracteristicas.map(c => { return `"${c}" `})}</td>
                        </tr>
                        <tr className='border'>
                            <th>Caracter </th>
                            <td>{props.pet.caracter.map(c => { return `"${c}" `})}</td>
                        </tr>
                        <tr className='border'>
                            <th>Ideal para </th>
                            <td>{props.pet.idealPara.map(i => { return `"${i}" `})}</td>
                        </tr>
                        <tr className='border'>
                            <th>Tipo de Pelo </th>
                            <td>{props.pet.pelo.map(p => { return `"${p}" `})}</td>
                        </tr>
                    </table>
                </div>
                <div className="col-span-2 mt-5">
                    <p className="text-xl">{props.pet.descripcion}</p>
                </div>
            </div>
        </>
    )
}
