import React, {useEffect, useState} from 'react';
import {postService} from "../../service/post.service";
import Post from "../post/post";

const Posts = () => {
    const[posts,setPosts]=useState([]);
    const [post,setPost]=useState(null)

    const choosePost=(post)=>{
        setPost(post)
    }

    useEffect(()=>{

        postService.getPosts().then(value => setPosts(value.data))

    },[])

    return (
        <div>

            <div>{post?.body}</div>

            <hr/>

            {posts.map((post,index)=>(<Post key={index} post={post} choosePost={choosePost}/>))}
        </div>
    );
};

export default Posts;