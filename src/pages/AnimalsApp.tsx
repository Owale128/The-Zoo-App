import { useEffect, useState } from "react";
import { Animals } from "../components/Animals";
import { AnimalInfo } from "../models/AnimalInfo";
import { getAnimals } from "../services/animalServices";
import { getAnimalsFromLS, updateAnimalsInLS } from "../utils/animalUtils";

interface IAnimal{
    animals: AnimalInfo[]
    fetchDone: boolean
}

export const AnimalsApp = () => {
    const animalsFromLocalS: AnimalInfo[] = getAnimalsFromLS();

    const[animal, setAnimal] = useState<IAnimal>({
        animals: animalsFromLocalS,
        fetchDone: animalsFromLocalS.length > 0,
    });

    const getAnimalData = async () => {
        try{
            const animals = await getAnimals()
             console.log(animals)
             updateAnimalsInLS(animals)
            setAnimal({fetchDone: true, animals})
    } catch(error) {
             console.log('Could not fetch', error)
    }
    }

    useEffect(() =>{
        if(animal.fetchDone) {
            return
        }
        getAnimalData()
    })

    return(
        <>
        <Animals animals={animal.animals} />
        </>
    )
}