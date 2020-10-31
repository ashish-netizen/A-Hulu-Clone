import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
const Header = () => {

    return (
        <div className="Header">

            <div className="header__icons">
                <div className="header__icon header__icon--home">
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <FlashOnIcon />

                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Live TV</p>

                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections </p>
                </div>
                <div className="header__icon">

                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
                <div className="header__icon">


                    <SearchIcon />
<p>Seach</p>
                </div>






            </div>

            <img id="img" src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt="" />

        </div>
    )
}

export default Header;

