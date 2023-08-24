import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Search() {
    const [numRooms, setNumRooms] = useState(1);
    const [numGuests, setNumGuests] = useState(1);

    const handleRoomChange = (event) => {
        setNumRooms(event.target.value);
    };

    const handleGuestChange = (event) => {
        setNumGuests(event.target.value);
    };
    return (
        <>
            <div className="grid grid-cols-10 gap-4 bg-white py-2 px-32">
                    <div className='col-span-2 pl-6'>
                        <input type="text" placeholder="Enter Location" className='pt-1'/>
                    </div>
                    <div className='col-span-3'>
                        <input type="date" name="dateto" className="px-3 pt-1"/>
                        <input type="date" name="datefrom" className="px-3 pt-1"/>
                    </div>
                    <div className="col-span-2 flex justify-between">
                        <div className="pt-1">
                            <label htmlFor="rooms" className="justify-center pt-1 px-3">Rooms
                                <select id="rooms" value={numRooms} onChange={handleRoomChange} className="appearance-none px-1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </label>
                        </div>
                        <div className='pt-1'>
                            <label htmlFor="guests" className="justify-center pt-1 px-3">Guests
                                <select id="guests" value={numGuests} onChange={handleGuestChange} className="appearance-none px-1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <button className="btn bg-slate-900 hover:bg-slate-800">Search</button>
                    </div>
                    <div className='col-span-2 pt-1'>
                    {!localStorage.getItem('token')?
                <Link to="/Login" className="cursor-pointer px-2 pt-1"><i className="fa-regular fa-user"></i> Login/SignUp</Link>:
                <button type="button" onClick={onclicklogout} className="cursor-pointer px-2 pt-1"><i className="fa-regular fa-user"></i> Logout</button>}
                    </div>
            </div>
        </>
    );
}