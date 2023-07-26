import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css'
export const ProfileInfo = ({ profile, status, update, ...rest }: any) => {
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
                {/* <div>{status} ddd</div> */}
                <div className={s.profile_data}>
                    <p>{profile.fullName}</p>
                    <p>date of birth</p>
                    <p>city</p>
                    <p>education</p>
                    <p>web site</p>
                </div>
                <ProfileStatus status={status} update={update} />
            </div>
        </div>
    )
}

type ProfileStatusPropsType = {
    status: string
    update: any
}
class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false,
        status: this.props.status ? this.props.status : 'no status'
    }

    activateMode = () => {
        this.setState({ ...this.state, editMode: true })
    }
    deactivateMode = () => {
        this.setState({ ...this.state, editMode: false })
        this.props.update(this.state.status)
    }
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, status: e.currentTarget.value })
    }
    componentDidUpdate(prevProps: ProfileStatusPropsType): void {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }
    render(): React.ReactNode {
        return (
            <div>
                ProfileStatus:
                {
                    this.state.editMode ?
                        <div>
                            <input
                                type='text'
                                value={this.state.status}
                                onBlur={this.deactivateMode}
                                autoFocus={true}
                                onChange={this.onChange}
                            />
                        </div> :
                        <div>
                            <span onDoubleClick={this.activateMode}>{this.props.status ? this.props.status : 'no status'}</span>
                        </div>
                }
            </div>
        )
    }
}