import React from 'react';
import s from './Post.module.css'
import user from "../../../asses/img/user.svg"


export type PostPropType = {
    message: string
    likeCounts: string
}

function Post(props: PostPropType) {
    return (
        <div className={s.itemPost}>
            <div className={s.itemPostImgMessage}>
            <img
            src={user}/>

            <div className={s.itemPostMessage}>{props.message}</div></div>
            <div className={s.itemPostLikes}>
                like {props.likeCounts}
            </div>
        </div>
    )
}

export default Post;