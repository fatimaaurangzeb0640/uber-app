export interface navSliceStateType {
    origin: placeInfoType | null,
    destination: placeInfoType | null,
    travelTimeInformation: object | null
}

export interface placeInfoType {
    location:
            {   
                lat?:number, 
                lng?: number
            }, 
    description: string
}