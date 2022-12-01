import React from 'react';

export type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }
activateEditMode=()=>{
        this.setState({
            editMode:true
        })



}
    render() {
        return (
            <div>{!this.state.editMode && <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>
            }
                {this.state.editMode && <div><input value={this.props.status}/></div>
                }

            </div>
        );
    }
};
export default ProfileStatus

