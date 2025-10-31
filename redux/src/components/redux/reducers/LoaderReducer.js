const initialState={
    load:false,
    // msg:""
}

export default function LoaderReducer(state=initialState, action){
    // console.log(action.msg);
    
    switch(action.type){
        case "SHOW":
            // console.log("inside case 1 ")
            // return {load:true, msg:action.msg}
            return {load:true}
        case "HIDE":
            return {load:false}
        default:
            return state
    }
}