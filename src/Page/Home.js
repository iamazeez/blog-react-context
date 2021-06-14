import {GlobalContext} from './../Contenxt/GlobalContext';
import React,{useContext} from 'react';
import {Createpost, Posts} from './../Component/index';

export const Home = () => {

    const {postState : {
        post : {data}
    }} = useContext(GlobalContext);

    return (
        <div className='container'>
            <Createpost />
            <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center'}}>
            { data.map(singlePost => (<Posts key={singlePost.id} post={singlePost} />)) }
            </div>
        </div>
    )
}
