import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    img: "https://www.teddybeargoldendoodles.com/sites/default/files/styles/puppy_list_image/public/images/puppies/Luke222.jpg?itok=_u_G0nFz",
    name: "Perros",
    route: "/dogs"
  },
  {
    key: 2,
    img: "https://img.freepik.com/foto-gratis/gatito-sobre-fondo-blanco_136670-70.jpg?size=626&ext=jpg",
    name: "Gatos",
    route: "/cats"
  },
];

const animals = items.map((item) => (
  <Link to={item.route} className="rounded shadow-lg hover:shadow-2xl">
    <img
      src={item.img}
      alt={item.name}
      className="md:object-contain object-fill h-full w-full "
    />
    <p className="text-center">algun texto</p>
  </Link>
));

export default function HomePage() {
  return (
    <>
      <div className="p-2 m-5">
        <h1 className="text-2xl">Home</h1>
      </div>
      <hr />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-5">{animals}</div>
    </>
  );
}
