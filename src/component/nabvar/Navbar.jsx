import { useState } from 'react';
import LoginLogout from './LoginLogout';
import './navBar.css'

const Navbar = () => {
    let [isLogin, SetisLogin]=useState(false)
    // let isLogin = true;
    const handleLoginLogout=()=>{
        SetisLogin(!isLogin)
    }
    return (
        <nav>
            <div>BoniAmin</div>
            <div>
                {/* {isLogin? (<button>Logout</button>):(<button>Login</button>)} */}
                <LoginLogout isLogin={isLogin} handleClick={handleLoginLogout}></LoginLogout>
            </div>
        </nav>
    );
};

export default Navbar;