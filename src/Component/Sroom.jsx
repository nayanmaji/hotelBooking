import React from "react";
import { Link } from "react-router-dom";

export default function Sroom(props) {
  const { name, facility, price, ratings, img, location, _id } = props.rooms;
  // console.log(_id)
  return (
    <>
      <div className="flex bg-white rounded-lg shadow-md mx-40 my-2">
        <div className="w-1/3 p-4">
          <img src={img} alt="Hotel Room" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p>{location}</p>
          <p className="text-gray-600 mb-1">
            <button className="bg-cyan-500 px-2 rounded-lg text-white"><b>{ratings}</b></button>
          </p>
          <p className="text-gray-600 mb-4">{facility}</p>
          <div className="flex justify-between  px-4">
            <p className=" text-gray-800 font-bold mb-1">&#8377; {price}/night </p>
            <div className=" flex justify-items-end">
            </div>
            <Link exact="true" to={`/${_id}`} key={_id} rooms={props.rooms} className="btn w-40">details</Link>
          </div>
        </div>
      </div>
    </>
  );
}