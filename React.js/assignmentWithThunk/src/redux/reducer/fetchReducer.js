import { ERROR, FETCHED, LOADING, SEARCH } from "../action/actionConstent";

 
let initalState={
    loading:false,
    data:[],
    filterData:[],
    error:'',
    search:''
}
function fetchReducer(state=initalState,action) {
     switch (action.type) {
        case LOADING:
            return {...state,loading:true}
            case FETCHED:
                return {...state,loading:false,data:action.payload,filterData:action.payload}
                case ERROR:
                    return {...state,loading:false,error:action.payload}
                    case SEARCH:
                        console.log(action)
                        let tempData={...state.filterData}
                        tempData=tempData.products.filter((item)=>{
                              return item.description.toLowerCase().includes(action.payload.toLowerCase())
                        })
                        console.log('hello i am filter',tempData)
                        return {...state,data:{...state.data,products:tempData}}

                    default:
                          return state
     } 
}

export default fetchReducer