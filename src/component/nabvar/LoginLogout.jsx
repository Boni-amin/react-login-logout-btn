

const LoginLogout = (props) => {
    // let isLogin = false;
    const {isLogin, handleClick} = props;

    /*
    // Step 1 
    if(isLogin){
        return(
            <button>Logout</button>
        )
    }
    return(
        <button>Login</button>
    )
         */
    // Step 2 
    
    return (
        <div>
             {isLogin? (<button onClick={handleClick} >Logout</button>):(<button onClick={handleClick} >Login</button>)}
        </div>
    );
   

};

export default LoginLogout;