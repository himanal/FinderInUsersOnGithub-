const GithubReducer = ( state , action)=>{
    switch(action.type){
        case 'GIT_USERS':
            return{
             ...state,
             users :action.payload,
             Loading:false    
            }
        
        default:
            return state
    }
}

export default GithubReducer 

