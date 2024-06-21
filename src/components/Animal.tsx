import '../sass/animals.scss'
import { handleImageError } from '../utils/imageutils';
import { AnimalInfo } from "../models/AnimalInfo";
import { useNavigate } from "react-router-dom";

interface IAnimalProps {
animal: AnimalInfo
}

export const Animal = ({animal}: IAnimalProps) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/animal/${animal.id}`)
    }
    
    return(
<>
    <div className={animal.isFed ? 'fed': ''}>
        <h3>{animal.name}</h3>
        <img src={animal.imageUrl} alt={animal.name} onError={handleImageError}/>
    </div>
        <span>{animal.shortDescription}</span>
        <button onClick={handleNavigate}>Klicka här för mer info</button>
</>

    )
}