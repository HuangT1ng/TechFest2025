import React from 'react';
import Navigation from './Navigation';
import Welcome from './Home';
const Header = () => {
    return (
        <div className=''>
            <Navigation/>
            <Welcome/>
        </div>
    )
}
export default Header;