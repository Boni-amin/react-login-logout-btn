import './MainContainer'

const Card = (props) => {
    const {data}=props;
    return (
        <div className="card">
            <p>ID: {data.id}</p>
            <p>Text: {data.name}</p>   
        </div>
    );
};

export default Card;