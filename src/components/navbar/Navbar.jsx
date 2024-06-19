import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { navItems } from '../navItem';
import styles from '../../style';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { data: cartProducts } = useSelector((state) => state.cart);

  return (
    <nav className={`z-100 relative flex justify-between items-center ${styles.paddingX} py-4 bg-white`}>
      <h1 className="text-[38px] font-bold text-blue">Furnify</h1>
      <ul className="md:flex hidden gap-5 items-center">
        {navItems.map((item, index) => (
          <Link key={index} className="nav-list-li font-medium" to={item.url}>
            {item.title}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <div className="relative flex">
          <Link to="/card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-cart3  cursor-pointer z-100"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Link>
          <div className="absolute right-[-4px] top-[-1px] bg-orange w-[18px] h-[26px] rounded-full flex justify-center items-center">
            <p className="text-[20px] text-white font-medium">{cartProducts.length}</p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-person cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </svg>
      </div>

      <div className="nav-menu relative md:hidden">
        {toggle ? (
          <RiCloseLine color="black" cursor={'pointer'} size={27} onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line color="black" cursor={'pointer'} size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="nav-menu-container z-[100] absolute right-[5%] top-[150%] rounded-[10px] bg-orange p-[1rem] w-[150px] h-[200px] flex justify-center items-center">
            <ul className="flex flex-col gap-5 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  className="nav-list-li text-white text-[18px] font-medium"
                  to={item.url}
                  onClick={() => setToggle(false)}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
