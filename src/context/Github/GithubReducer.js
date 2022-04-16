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
        case 'GET_USER_REPOS':
            return{
                ...state,
                repos:action.payload,
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

