import Sroom from "./Sroom";
import React, { useState } from "react";
import Search from "./Search";

export default function Hotels(props) {
  const [sortOption, setSortOption] = useState("price");
// if () {
  
// }
  return (
    <>
      <Search />
      <div className="flex items-center bg-white mx-40 py-2 justify-end">
        <label className="px-4">Sort By:</label>
        <select className=" focus:outline-none">
          <option value="price" >Price</option>
          <option value="rating">Rating</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      {props.rooms.map((room) => {
        return (
          <Sroom key={room._id} rooms={room} />
        );
      })}
    </>
  );
}