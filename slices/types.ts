export interface navSliceStateType {
    origin: placeInfoType | null,
    destination: placeInfoType | null,
    travelTimeInformation: string | null
}

export interface placeInfoType {
    location:
            {   
                lat?:number, 
                lng?: number
            }, 
    description: string
}