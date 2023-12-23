import { ERROR, FETCHED, LOADING, SEARCH } from "./actionConstent";

export function textHandler(data)
{
    return {type:SEARCH,payload:data}
}
export function fetchHandler(url)
{
       return (disptach)=>{
        disptach({type:LOADING})
        fetch(url).then((item)=>{
            return item.json()
        }).then((data)=>{
            disptach({type:FETCHED,payload:data})
        }).catch((err)=>{
            disptach({type:ERROR,payload:err})
        })
       }
}