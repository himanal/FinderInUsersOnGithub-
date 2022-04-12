const GithubReducer = ( state , action)=>{
    switch(action.type){
        case 'GIT_USERS':
            return{
             ...state,
             users :action.payload,
             Loading:false    
            };
        case 'GET_USER':
            return {
                ...state,
                user:action.payload,
                Loading:false
            }
        
        case 'GET_LOADING':
            return{
                ...state,
                Loading:true
            }    

         case 'DELETE_DATA':
             return{
                 users:[],
                 Loading:false
             }   
        default:
            return state
    }
}

export default GithubReducer 

