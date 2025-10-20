import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
     return (
          <div className='w-11/12 mx-auto flex justify-between items-center my-5'>
               <div className=""></div>
               <div className="nav flex gap-5 text-accent">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
               </div>
               <div className="login_btn flex gap-3 items-center">
                    <img src={user} alt="" />
                    <button className='btn btn-primary px-7'>Login</button>
               </div>
          </div>
     );
};

export default Navbar;