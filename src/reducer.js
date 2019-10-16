const reducer=(state=0,action)=>{
    switch(action.type){
        case 'inc':
            return  state + 1
        case 'dec':
            return state - 1  
        case 'incByUser':
            return state + action.ad
        case 'reset':
            return 0
        default:
            return state
    }
}
export default reducer;