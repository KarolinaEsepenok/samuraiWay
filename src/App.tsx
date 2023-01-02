import React, {ComponentType} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/reduxStore";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


type mapStateToProps = {
    initialized:boolean
}
type mapDispatchToProps={
    initializeApp:()=>void
}
type CommonPropsType=mapStateToProps |mapDispatchToProps

const mapStateToProps = (state:AppStateType) => ({
    initialized: state.app.initialized

})
 class App extends React.Component<any> {
    componentDidMount() {
     this.props.initializeApp();
    }
     render() {
       if(!this.props.initialized) {
            return <div><Preloader isFetching={true}/></div>
         }
        return (
            <div className={s.app}>
                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={s.appWrapperContent}>
                        <Switch>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/users' render={() => <UserContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
                    </div>
                </div></div>
        );
    }
}

export const AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);

//export default Header;

