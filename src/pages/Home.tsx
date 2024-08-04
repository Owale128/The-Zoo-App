import { useNavigate } from "react-router-dom"
import '../sass/home.scss';
import handIcon from '../icons/handIcon.png'
import squirrel from '../assets/Squirrel.png'

export const Home = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/animals')
    }

    return(
        <div className="homeContainer">
        <h2 id="homeHeading">Välkommen till djur planeten!</h2>
        <img src={squirrel} alt="Squirrel" className="squirrel" onClick={handleNavigate} />
        <img src={handIcon} alt='Hand icon' className="handIcon" />
        <p>Klicka på ekorren</p>
        </div>
    )
}