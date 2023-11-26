import LoginForm from '../from/LoginForm';
import Card from './card';
import './mainContainer.css'

const MainContainer = () => {
    const cards = [
        {id:1, name:"Boni Amin"},
        {id:2, name:"Bijoy"},
        {id:3, name:"Papel"}
    ]
    return (
        <main> 
           <div className='main-container'>

             {/* <Card data={cards[0]}></Card> */}
             {/* {
                cards.map((card)=>(
                    <Card key={card.id} data={card} />
                ))
            } */}

            <LoginForm></LoginForm>



           </div>
        </main>
    );
};

export default MainContainer;