export const createPost = (data) => (dispatch) => {
    dispatch({type:'CREATE_POST', payload:data});
    alert('Post Created successfully')
}

export const deletePost = (id) => (dispatch) => {
    dispatch({type:'DELETE_POST',payload:id});
    alert('Post has been deleted');
}