import pictureNotFound from '../assets/PictureNotFound.jpg'

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `${pictureNotFound}`
};