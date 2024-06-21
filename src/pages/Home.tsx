import { useNavigate } from "react-router-dom"
import '../sass/home.scss';
import handIcon from '../icons/handIcon.png'

export const Home = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/animals')
    }

    return(
        <div className="homeContainer">
        <h2 id="homeHeading">Välkommen till djur planeten!</h2>
        <button onClick={handleNavigate}>Klicka här för att komma till djuren</button>
        <img src={handIcon} alt='Hand icon' />
        </div>
    )
}