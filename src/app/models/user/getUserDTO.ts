import { GetPropertiesDTO } from "../property/getPropertiesDTO";


export interface GetUserDTO {
    id: number; 
    username: string; 
    properties: GetPropertiesDTO[]; 
}