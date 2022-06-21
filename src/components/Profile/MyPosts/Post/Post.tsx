import React from 'react';
import s from './Post.module.css'
import {message} from "antd";
import MyPosts from "../MyPosts";


export type PostPropType = {
    posts: PostsType[]
}

function Post(props: PostPropType) {
    return (
        <div className={s.item}><img
            src={'https://mport.ua/i/11/51/76/9/1151769/image_main/e4b03950eccc4611f57d4950fd41e972-quality_70Xresize_crop_1Xallow_enlarge_0Xw_1200Xh_643.jpg'}/>
            {props.posts}
            <div>
                <span>like</span>{props.posts.likeCounts}
            </div>
        </div>
    )
}

export default Post;