import React from 'react';
import s from './ProfileInfo.module.css'
export const ProfileInfo = ({ profile, ...rest }: any) => {
    if (!profile) return <></>;
    return (
        <div>
            {/* <h3 className={s.wallpaper}>{pageName}</h3> */}
            <div className={s.about_me}>
                <div className={s.avatar}>
                    {/* <img src='https://avatars.githubusercontent.com/u/51473977?v=4' alt='avatar'></img> */}
                    <img src={profile.photos.large}
                        alt='avatar'></img>
                </div>
                <div className={s.profile_data}>
                    <p>{profile.fullName}</p>
                    <p>date of birth</p>
                    <p>city</p>
                    <p>education</p>
                    <p>web site</p>
                </div>
                <ProfileStatus status={'hi there'} />
            </div>
        </div>
    )
}

class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }

    activateMode = () => {
        this.setState({ ...this.state, editMode: true })
    }
    deactivateMode = () => {
        this.setState({ ...this.state, editMode: false })
    }
    render(): React.ReactNode {
        console.log('render');
        return (
            <div>
                ProfileStatus
                {this.state.editMode ?
                    <div>
                        <input
                            type='text'
                            value={this.props.status}
                            onBlur={this.deactivateMode}
                            autoFocus={true}
                        />
                    </div> :
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status}</span>
                    </div>}
            </div>
        )
    }
}


// const ProfileStatus=(props:any)=>{
//     return (
//         <div>
//             ProfileStatus
//             <div>
//                 <span>{props.status}</span>
//             </div>
//             <div>
//                 <input type='text' value={props.status}/>
//             </div>
//         </div>
//     )
// } 