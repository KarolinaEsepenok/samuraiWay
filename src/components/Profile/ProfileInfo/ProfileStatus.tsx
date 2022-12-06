import React, {ChangeEvent} from 'react';

export type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status:this.props.status

    }
activateEditMode=()=>{

        this.setState({
            editMode:true
        })
}
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
        })


    }
    render() {
        return (
            <div>{!this.state.editMode && <div><span onDoubleClick={this.activateEditMode}>{this.props.status || "____" }</span></div>
            }
                {this.state.editMode && <div><input onChange={this.onStatusChange}
                                                    autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/></div>
                }

            </div>
        );
    }
};
export default ProfileStatus

