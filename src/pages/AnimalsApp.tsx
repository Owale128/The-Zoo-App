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
    const [loading, setIsLoading] = useState(false)

    const[animal, setAnimal] = useState<IAnimal>({
        animals: animalsFromLocalS,
        fetchDone: animalsFromLocalS.length > 0,
    });

    const getAnimalData = async () => {
        try{
            setIsLoading(true)   
                const animals = await getAnimals()
                console.log(animals)
                updateAnimalsInLS(animals)
                setAnimal({fetchDone: true, animals})
    } catch(error) {
             console.log('Could not fetch', error)
    } finally {
        setIsLoading(false)
    }
    }

    useEffect(() =>{
        if(animal.fetchDone) {
            return
        }
        getAnimalData()
    },[animal.fetchDone])

    if(loading) return <p style={{fontSize: '4rem', marginTop: '10rem'}}>Loading....</p>

    return(
        <>
        <Animals animals={animal.animals} />
        </>
    )
}