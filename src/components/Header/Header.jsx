/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './header.css';

const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#projects',
        display: 'Projects'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
    {
        path: '#contact',
        display: 'Contact'
    },

]

const Header = ({theme, toggleTheme}) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <h2>DeTechMatrix</h2>
                    </div>
                    {/* navigation*/}
                    <div className='navigation'>
                        <ul className='menu'>
                            {
                                nav__links.map((item, index) => (
                                    <li className='menu__item'><a href={item.path} className='menu__link'>{item.display}</a></li>
                                ))
                            }

                        </ul>
                    </div>
                    {/* lightmode*/}
                    <div className='light__mode'>
                        <span onClick={toggleTheme}>

                            {theme==='light-theme' ? (
                            <span>
                                <i class='ri-moon-line'></i> Dark
                                </span>
                                ) : (
                                <span>
                                    <i class='ri-sun-line'></i> Light
                                    </span>
                            )}
                             
                        </span>
                    </div>
                </div>
            </div>
        </header>
        )
}

export default Header