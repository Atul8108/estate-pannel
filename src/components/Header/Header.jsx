import React, { useEffect, useState } from 'react';
import { PiBellLight } from 'react-icons/pi';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import "./Header.css";
import ThemeChanger from '../ThemeChanger/ThemeChanger';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    }
  }, []);


  useEffect(() => {
    let htmlEle = document.querySelector(':root');
    htmlEle.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  };
  return (
    <>
      <SideMenuBar />
      <nav className='top-menu-bar-container fixed-top'>
        <div className='menu-bar-container'>

          <div className="search">
            <button>
              <svg className='m-0' width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <input className="input" placeholder="Type your text" required="" type="text" />
            <button className="reset" type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ThemeChanger isChecked={isDark} handleChange={toggleTheme} />
          <div className='user-profile'>
            <label><PiBellLight size={20} /></label>
            <img src='' alt="" />
            <p>Company Manager</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header