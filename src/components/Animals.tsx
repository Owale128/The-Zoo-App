import { AnimalInfo } from "../models/AnimalInfo";
import { Animal } from "./Animal";
import '../sass/animals.scss'

interface IAnimalsProps {
    animals: AnimalInfo[]
}

export const Animals = ({animals,}: IAnimalsProps) => {

    return (
        <div className="imgContainer">
            <ul>
             {animals.map((animal) =>(
            <li key={animal.id}>
            <Animal
            animal={animal}
            />
            </li>
            ))}
        </ul>
        </div>
    )
}