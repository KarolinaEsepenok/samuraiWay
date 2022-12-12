import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props:any) => {
    return (

            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/></div>
                <div><Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/></div>
                <div><Field type={'checkbox'}name={'rememberMe'} component={Input} validate={[required]}/>Remember me</div>
                <div><button>Login</button></div>
            </form>

    );
};

const LoginReduxForm=reduxForm<FormDataType>({
    form:'login'
})(LoginForm)



export const Login = () => {
    const onSubmit=(formData:FormDataType)=>{
        console.log(formData)
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
