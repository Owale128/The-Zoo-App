import { AnimalInfo } from "../models/AnimalInfo";

export const getAnimalsFromLS = () => {
    const animals: AnimalInfo[] = JSON.parse(
        localStorage.getItem('animals') || '[]')

        return animals;
}

export const updateAnimalsInLS = (animals: AnimalInfo[]) =>{
    localStorage.setItem('animals', JSON.stringify(animals))
}