import { AnimalInfo } from "../models/AnimalInfo";
import { get } from "./serviceBase";


export const getAnimals = async (): Promise<AnimalInfo[]> => {
    const response = await get<AnimalInfo[]>('https://animals.azurewebsites.net/api/animals')

    return response
}