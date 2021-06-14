import {GlobalContext} from './../Contenxt/GlobalContext';
import React,{useContext, useState} from 'react';
import { createPost } from './../Contenxt/Action/PostAction';

export const Createpost = () => {

    const { postDispatch, postState : {
        post : {data}
    } } = useContext(GlobalContext);

    const [descreption,setDescreption] = useState('');
    const [title,setTitle] = useState('');

    const createNewPost = () => {
         if(descreption == '' || title == ''){
             alert('Please first write something');
             return;
         }
         const id = data.length > 0 ? data[data.length-1].id +1 : 1;
         const postPayload = {id,title,descreption};
         createPost(postPayload)(postDispatch);
         setTitle('');
         setDescreption('');
    }


    return (
        <from style={{display:'flex',flex:1,alignItems:'center',flexDirection:'column'}}>
                <div className="mb-1 mt-4 w-50">
                   <b><label for="exampleFormControlTextarea1" className="form-label">Title ⚡</label></b>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3 mt-1 w-50">
                   <b><label for="exampleFormControlTextarea1" className="form-label">Create awesome post ✍</label></b>
                    <textarea value={descreption} onChange={(e) => setDescreption(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <button onClick={createNewPost} className='w-50 btn btn-primary shadow'>Create Post 🚀</button>
        </from>
    )
}
