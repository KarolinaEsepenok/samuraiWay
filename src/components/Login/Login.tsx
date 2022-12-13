import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type FormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props:any) => {
    return (

            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/></div>
                <div><Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/></div>
                <div><Field type={'checkbox'}name={'rememberMe'} component={Input} validate={[required]}/>Remember me</div>
                <div><button>Login</button></div>
            </form>

    );
};

const LoginReduxForm=reduxForm<FormDataType>({
    form:'login'
})(LoginForm)



 const Login = (props:any) => {
    const onSubmit=(formData:FormDataType)=>{
        props.login(formData.login,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps=(state:any)=>{
    isAuth:state.auth.isAuth
}
export default connect(mapStateToProps,{Login})(Login)
