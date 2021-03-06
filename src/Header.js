import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            {/* <h2>I am Header</h2> */}
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img 
                className="header_logo"
                src="https://www.bestdesigns.co/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png" 
                alt=""
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header;
