import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function NavBar() {
    let history = useNavigate();
    const onclicklogout =()=>{
      localStorage.removeItem('token')
      history('/Login')
    }
    return (
    <nav>
    <div className="p-3 flex justify-between bg-black text-white">
        <div className="">Logo</div>
            <div className="flex space-x-10 justify-items-end ">
                <Link to='/' className="cursor-pointer">Home</Link>
                <Link to='/Hotels' className="cursor-pointer">Hotels</Link>
                {/* <Link to='/About' className="cursor-pointer">About</Link> */}
                <Link to="/Support" className="cursor-pointer">Support</Link>
                {!localStorage.getItem('token')?
                <Link to="/Login" className="cursor-pointer px-10"><i className="fa-regular fa-user"></i> Login/SignUp</Link>:
                <button type="button" onClick={onclicklogout} className="cursor-pointer px-10"><i className="fa-regular fa-user"></i> Logout</button>}
            </div>
        </div>
    </nav>
    );
    }