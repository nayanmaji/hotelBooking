import React, { useState } from "react";
import RoomContext from "./RoomContext";

export default function NoteState(props) {
    const host = "http://localhost:5000"
    const roomsIntl = []
    const [rooms, setRooms] = useState(roomsIntl);
  
    //get all notes
    const getallRoom = async () => {
  
      //api call
      const response = await fetch(`${host}/getroom`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const json = await response.json()
      setRooms(json)
    }

    return (
        <RoomContext.Provider value={{rooms, getallRoom}}>
          {props.children}
        </RoomContext.Provider>
      )
    }