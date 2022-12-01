import React from 'react';
export type ProfileStatusPropsType={
    status:string
}

class ProfileStatus extends React.Component<any, any> {
state={
    editMode:false
}
    render() {
        return (
            <div>{!this.state.editMode && <div><span>{this.props.status}</span></div>
            }
                {this.state.editMode &&<div><input value={this.props.status}/></div>
                }

            </div>
        );
    }
};
export default ProfileStatus

