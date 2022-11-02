import React from 'react';

const Post = ({post,choosePost}) => {

    return (
        <div>
            <div>{post.title}</div>

            <button onClick={()=>{choosePost(post)}}>choose post</button>

        </div>
    );
};

export default Post;