import React, {HTMLInputTypeAttribute} from "react";
import styles from './FormsControls.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from 'redux-form/lib/Field'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
}
const FormControl = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched
    return (
        <div>
            <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}><textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}
export const Textarea = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched
    return (
        <div>
            <div><textarea className={styles.formControl + ' ' + (hasError ? styles.error : '')}{...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};
export const Input = ({meta, input, ...props}: FormsControls) => {
    const hasError = meta.error && meta.touched
    return (
        <div>
            <div><input className={styles.formControl + ' ' + (hasError ? styles.error : '')}{...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};