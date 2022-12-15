import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import s from "../common/FormsControls/FormsControls.module.css"
import {login} from "../../redux/auth-reducer";

type FormDataType={
    email:string,
    password:string,
    rememberMe:boolean,
}
 const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/></div>
                <div><Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={Input} />Remember me</div>
                {props.error && <div className={s.forSummaryError}>{props.error}</div>}

                <div><button>Login</button></div>
            </form>

    );
};

const LoginReduxForm=reduxForm<FormDataType>({
    form:'login'
})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log('ddddd')
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)
