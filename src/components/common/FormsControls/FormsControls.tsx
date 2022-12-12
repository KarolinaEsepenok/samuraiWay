import React from "react";
import s from './FormsControls.module.css'

const FormControl=( props:any)=>{

}




export const Textarea = (props:any)=>{
    const hasError = props.meta.touchend && props.meta.error
    return(
        <div className={s.formControl + " " +(hasError ? s.error : "") }>
            <div><textarea {...props.input} {...props}/></div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>

        </div>
    )
}
export const Input = (props:any)=>{
    const hasError = props.meta.touchend && props.meta.error
    return(
        <div className={s.formControl + " " +(hasError ? s.error : "") }>
            <div><input {...props.input} {...props}/></div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>

        </div>
    )
}