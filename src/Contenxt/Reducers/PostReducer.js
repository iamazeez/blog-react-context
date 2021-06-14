export default (state,{type,payload}) => {
    switch(type){

        case 'CREATE_POST' : return{
            ...state,
            post :{
                ...state.post,
                data : [...state.post.data,payload]
            }
        };

        case 'DELETE_POST' : return{
            ...state,
            post : {
                ...state.post,
                data : state.post.data.filter(post => post.id !== payload)
            }
        }

        default : return state;
    }
}