import { Model } from "./model"

export interface Car {
    id:number
    plate:string
    dailyPrice:number
    modelYear:number
    state:number
    modelId:number
    modelName:string
    imgUrl:string
    model:Model
    // imgUrl?:string gelmese de olur için ? koyduk
}
