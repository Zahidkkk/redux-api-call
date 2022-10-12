const initialState = {
    users: []
};

export const DetailReducer = (state = initialState,action) =>{
      switch(action.type){
        case 'SHOW':
            return{
                ...state,
                users:  action.payload
            };
        
        default:
            return state;
      };
}