import { Timestamp } from "firebase/firestore"

export interface GeneralData{
    id?:string,
    uid?:string,
    name?:string,
    email?:string,
    age?:number,
    weight?:number,
    bodyPart?:string,
    wrkout?:string,
    set?:Set[],
    cretedAt?:string,
    updatedAt?:string,
}


export interface User{
    id?:string,
    uid?:string,
    name?:string,
    email?:string,
    phone?:string,
    age?:number,
    weight?:number,
    height?:number,
    dob?:string,
    bmi?:string,
    blood?:string,
    gender?:string
}

export interface MyWorkOut{
    id?:string,
    uid?:string,
    bodyPartID?:string,
    bodyPart:string,
    workout:string,
    set:Set[],
    date?:string,
    time:string,
    createdAt: Timestamp ,
    timeSatamp:Timestamp,
    updatedAt?:string,
}

export interface Set{
    weight:string,
    rep:string,
}

export interface AllWorkOut{
    id:string,
    bodyPart:string,
    workouts:WorkOut[],
}

export interface WorkOut{
    workOut: any
    bodyPart:string ,
    equipment:string,
    gifUrl:string ,
    id:string ,
    name:string ,
    target: string
}
export interface Res{
    error?:boolean,
    data?:any
}

export interface Filter{
    field?:string | any,
    operator?:string | any,
    value?:any
}


export interface OrderBy{
    field?:string | any,
    direction?:string | any
    startAt?:Timestamp ,
    endAt?:Timestamp 
}

export interface MyWeight{
    uid:string,
    weight:number,
    date:Date,
    createdAt:Timestamp,
}

export interface BodyPart{
    id:string,
    name:string,
    data:WorkOut[]
}


