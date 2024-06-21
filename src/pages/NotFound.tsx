import '../sass/notFound.scss'
import sadEmoji from '../icons/sad.png'
import { Link } from 'react-router-dom'

export const NotFound = () => {

    return(
        <div className='notFoundContainer'>
        <h1>Ett fel uppstod!</h1> <img src={sadEmoji} alt="Sad Emoji" />
        <h2>Gör om. . .</h2>
        <Link to={'/'} className='link'>Hem</Link>
        </div>
    )
}