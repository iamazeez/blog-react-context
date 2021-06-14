import React,{useContext} from 'react'
import {deletePost} from './../Contenxt/Action/PostAction';
import {GlobalContext} from './../Contenxt/GlobalContext';

export const Posts = ({post}) => {

    const { postDispatch } = useContext(GlobalContext);
    
    return (
        <div class="card w-50 mt-4">
            <div class="card-body">
                <h5 class="card-title">{post.title}</h5>
                <p class="card-text">{post.descreption}</p>
                <button onClick={() => deletePost(post.id)(postDispatch)} class="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}
