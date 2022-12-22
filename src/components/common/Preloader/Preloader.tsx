import React from 'react';
import preloader from "../../asses/img/preloader.gif";


type PreloaderPropsType = {
    isFetching: boolean
}
const Preloader = (props: PreloaderPropsType) => {
    return (

        <div>{props.isFetching ? <img src={preloader}/> : null}
        </div>
    );
};
export default Preloader;