import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import {AccountCircle} from '@mui/icons-material';
import Search from '../Search';


function Home() {
    return (
        <div className='home'>
           

            <div className="homeHeader">
                <div className="homeHeaderLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    
                </div>

                <div className="homeHeaderRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>

                    <AppsIcon />
                   <AccountCircle />
                </div>

            </div>
            <div className="homeBody">
                <img className="googleDoodle" src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="" />
            </div>

            <div className="homeInputContainer">
                {/* search  */}
                <Search />
            </div>

        </div>
    )
}

export default Home