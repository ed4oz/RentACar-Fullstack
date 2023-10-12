import { Model } from "src/app/shared/models/model"

export interface Car {
    id:number
    plate:string
    dailyPrice:number
    modelYear:number
    state:number
   //modelId:number
    imageUrl:string
    model:Model
    // imgUrl?:string gelmese de olur için ? koyduk
}

