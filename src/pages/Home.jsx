import carImage from '../assets/car.jpg'; 
import './home.css'

function Home() {
    return (
        <div className="carContainer">
            <img src={carImage} className="carImg" alt="Outline of a formula one car"/>
        </div>
    )
}

export default Home