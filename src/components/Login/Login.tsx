import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>LOGIN</h2>
            <form>
                <div><input placeholder={'Login'}/></div>
                <div><input placeholder={'Password'}/></div>
                <div><input type={'checkbox'}/>Remember me</div>
                <div><button>Login</button></div>
            </form>
        </div>
    );
};

export default Login;