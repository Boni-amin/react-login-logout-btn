import { Fragment } from "react";
import Navbar from "../component/nabvar/Navbar";
import MainContainer from "../component/mainContainer/MainContainer";
import Fotter from "../component/fotter/Fotter";


const Home = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <MainContainer></MainContainer>
            <Fotter></Fotter>
        </Fragment>
    );
};

export default Home;