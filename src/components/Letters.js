import React from 'react'

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];

export default function Letters(props) {
    return (
        <div className="grid grid-cols-10">
            {alphabet.map(letter =>
                <div className="text-center m-2">
                    <p className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white font-bold">
                        {letter}
                    </p>
                </div>
            )}
        </div>
    )
}
