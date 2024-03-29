import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'

export type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status

    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>{!this.state.editMode &&
                <div className={s.status} title={'Change status'}><span onDoubleClick={this.activateEditMode}>{this.props.status || "my status"}</span></div>
            }
                {this.state.editMode && <div >
                    <input className={s.statusInput} onChange={this.onStatusChange}
                                                    autoFocus={true} onBlur={this.deactivateEditMode}
                                                    value={this.state.status}/></div>
                }
            </div>
        );
    }
};
export default ProfileStatus

