import React from 'react';
import logo from '../../logo.png';
import './Header.css';
import user from '../../assets/user.png';
import notif from '../../assets/Notification.png';

console.log(logo);

function Header() {
    return(
        <div className='tab-bar'>
            <img src={logo} alt="Logo" className='logo'/>
            <div className='tab-bar-menu'>
                <ul>Films</ul>
                <ul>Évènements</ul>
                <ul>Avantages</ul>
                <ul>Nos services</ul>
                <ul>Cinémas</ul>
            </div>
            <div className='tab-bar-icons'>
                <img src={user} alt="user" />
                <img src={notif} alt="notif" />
            </div>
        </div>
    );
}

export default Header;