import '../sass/animalDetail.scss'
import { useEffect, useState } from 'react'
import arrow from '../icons/fast-forward.png'
import { AnimalInfo } from '../models/AnimalInfo'
import { handleImageError } from '../utils/imageutils'
import { useNavigate, useParams } from 'react-router-dom'
import { getAnimalsFromLS, updateAnimalsInLS } from '../utils/animalUtils'

export const AnimalDetail = () => {
    const { id } = useParams()
    const animals: AnimalInfo[] = getAnimalsFromLS()
    const animal = animals.find((a) => a.id ===  Number(id) )
    const navigate = useNavigate()
    const backBtn = () => {navigate('/animals')}

    const[isFed, setIsFed] = useState<boolean>(false)
    const[feedTime, setFeedTime] = useState<string>('')

    const handleFeed = () => {
        if(!animal) return
        setIsFed(true)
        const time = new Date().toLocaleString()
        setFeedTime(time)
        
        const animalUpdate = animals.map(a => 
            a.id === animal.id ? {...a, isFed: true, lastFed: time} : a );
        updateAnimalsInLS(animalUpdate)
    }
    
    useEffect(() => {
        if(!animal) return
        setIsFed(animal.isFed)
        setFeedTime(animal.lastFed)
    }, [animal])

    if(!animal) {
        return <h5 className='AnimalNotFoundTxt'>Djur ej funnen!<br/>😞</h5>
    }
    
    return(
        <div className="animalDetailContainer">
        <button onClick={backBtn} className='backBtn'>Tillbaka</button>
        <div className='animalContainer'>
        <h2>{animal.name}</h2>
        <img src={animal.imageUrl} alt={animal.name}  onError={handleImageError} />
        <p>
            <span>Född:</span> {animal.yearOfBirth}<br/>
            <span>Medicin:</span> {animal.medicine}<br/>
            <span>Latinsk Namn:</span> {animal.latinName}<br/>
            {isFed ? (
                <p className='feedTxt'>Djuret matades: {feedTime}</p>
            ):(
                <button onClick={handleFeed} className='feedBtn'>Mata djur</button>
            )}
        </p>
        </div>
        <img src={arrow} alt="arrow icon" className='arrowIcon' />
        <div className='aboutTxtContainer'>
            <h5>Om</h5>
        <p>{animal.longDescription}</p>
        </div>
        </div>
    )
}