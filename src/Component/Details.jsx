import React, { useContext } from "react";
import Search from './Search'
import { useParams } from "react-router-dom";
import RoomContext from "../context/RoomContext";

export default function Details(props) {
  const { rooms } = useContext(RoomContext); // Access the room data from the context
  const { _id } = useParams(); // Access the _id route parameter

  // Find the room object based on the _id
  const room = rooms.find((room) => room._id === _id);

  if (!room) {
    return <p>Room not found.</p>; // Handle the case where the room is not found
  }
  return (
    <>
      <Search />
      <img src={room.img} alt="Hotel Room" className="w-full rounded-lg" style={{ height: "20rem" }} />
      <div className="grid grid-cols-3 gap-4 mx-32 py-7">
        {/* ----------------------------------------full details------------------------------------ */}
        <div className="col-span-2">
          <div className="flex justify-between"><h2 className="text-3xl font-bold">{room.name}</h2><div className="flex space-x-10 justify-items-end pr-5"><h6 className="bg-green-700 text-white pt-1 px-3 rounded-lg font-bold">{room.ratings}</h6></div></div>
          <p className="text-[#464040] pl-2">{room.location}</p>
          <h6 className="text-xl font-bold pt-10 pb-5">Description</h6>
          <p className="pl-2">{room.description}</p>
          <h6 className="text-xl font-bold pt-10 pb-5">Amenities</h6>
          <p className="pl-2">{room.facility}</p>
          <h6 className="text-xl font-bold pt-10 pb-5">Choose your room</h6>
          <div className="border border-1 border-[#d1c5c569] rounded-lg pl-2">
            <p className="bg-gradient-to-r from-slate-600 text-white rounded-t-lg p-1 pl-2 font-bold text-sm"><i className="fa-solid fa-star"></i> SELECTED CATEGORY</p>
            <div className="p-3 flex justify-between">
              <div>
                <p className="text-lg font-bold">Classic <i className="fa-solid fa-circle-check fill-green-600" style={{ color: "#085924", }}></i></p>
                <p className="text-sm">Room size: 120 sqft</p>
                <p className="pt-10 pb-5">{room.facility}</p>
              </div>
              <div className="flex justify-items-end">
                <img src={room.img} alt="Hotel Room" className="w-full rounded-lg" style={{ height: "6rem" }} />
              </div>
            </div>
            <hr />
            <div className="p-3 flex justify-between">
              <p className=" font-bold">&#8377; {room.price}</p>
              <div className="flex justify-items-end">
                <p className="text-sm font-bold px-10 py-2 border border-[#635d5d77]">SELECTED <i className="fa-solid fa-circle-check fill-green-600" style={{ color: "#085924", }}></i></p>
              </div>
            </div>
          </div>
          <h6 className="text-xl font-bold pt-10 pb-5">Hotel policies</h6>
          <div className="flex space-x-9 px-9">
            <div className="space-y-2"><p>Check-in</p><p>12:00 PM</p></div>
            <div className="space-y-2"><p>Check-out</p><p>11:00 AM</p></div>
          </div>
          <p className="py-2">{room.policies}</p>
        </div>
        {/* --------------------------------Payment---------------------------------- */}
        <div className="p-4 border border-1 border-[#d1c5c569] rounded-lg shadow-md">
          <h3 className="text-2xl font-bold px-4">&#8377; {room.price}</h3>
          <p className="text-sm text-[#464040] pb-6 px-5">inclusive of all taxes</p>
          <div className="border border-[#c6c5c57b] text-center my-4 flex justify-between px-4 py-2 shadow-md"><p>date-date</p><div className="flex"><p>1 Room,</p><p>1 Guest</p></div></div>
          <div className="flex justify-between border border-[#c6c5c57b] my-4 px-4 py-2 shadow-md">
            <div><i className="fa-solid fa-door-open"></i> {room.type}</div>
            <div className="flex justify-items-end"><i className="fa-solid fa-pen pt-1"></i></div>
          </div>

          <div className="px-4 flex justify-between pt-6 pb-3"><p>Your savings</p><div className="flex"><p className="font-bold">&#8377; {room.price}</p></div></div>
          <div className="px-4 flex justify-between mt-3"><p>Total price</p><div className="flex"><p className="font-bold">&#8377; {room.price}</p></div></div>
          <p className="px-4 text-xs text-[#464040] pb-6">(incl. of all taxes)</p>
          <button className="btn bg-green-600 hover:bg-green-500 focus-visible:outline-green-600 my-4">Continue to Book</button>
          <p className="font-bold text-red-600 text-sm py-1 px-4">All staff vaccinated</p>
          <p className="font-bold text-red-600 text-sm py-1 px-4">Cancellation Policy <i className="fa-solid fa-circle-info " style={{ color: "red", }}></i></p>
        </div>
      </div>
    </>
  );

};