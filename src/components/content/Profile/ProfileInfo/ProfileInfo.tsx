import React, { ChangeEvent, useState } from "react";
import s from "./ProfileInfo.module.css";
import myAvatarPhoto from "../../../../assets/img/myAvatar.svg";
import {
  Input,
  Textarea,
  createField,
} from "../../../../common/FormControlls/FormControlls";
import { InjectedFormProps, reduxForm } from "redux-form";

export const ProfileInfo = ({
  profile,
  status,
  update,
  isOwner,
  saveFile,
  saveProfile,
  ...rest
}: any) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  if (!profile) return <></>;
  const onChangeFileInput = (e: any) => {
    saveFile(e.target.files[0]);
  };
  const onSubmit = (formData: any) => {
    saveProfile(formData).then(() => setEditMode(false));
  };
  return (
    <div>
      {/* <h3 className={s.wallpaper}>{pageName}</h3> */}
      <div className={s.about_me}>
        <div className={s.avatar}>
          {/* <img src='https://avatars.githubusercontent.com/u/51473977?v=4' alt='avatar'></img> */}
          <img
            src={profile.photos.large || myAvatarPhoto}
            alt="avatar"
            style={{ backgroundColor: "red" }}
          />
          {isOwner && <input type="file" onChange={onChangeFileInput} />}
        </div>
        <div>
          {editMode ? (
            <ProfileEditFormReduxForm
              profile={profile}
              onSubmit={onSubmit}
              initialValues={profile}
            />
          ) : (
            <ProfileDetails
              profile={profile}
              isOwner={isOwner}
              setEditMode={() => setEditMode(true)}
            />
          )}
        </div>
        <ProfileStatus status={status} update={update} />
      </div>
    </div>
  );
};
const ProfileEditForm = ({ profile, handleSubmit, error }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <button>save</button>
      </p>
      {error && <div>{error}------------------</div>}
      <p>full name: {createField("fullName", "fullName", [], Input)}</p>
      <p>
        looking for a job:
        {createField("lookingForAJob", "", [], Input, { type: "checkbox" })}
      </p>
      <p>
        my professional skills:
        {createField(
          "lookingForAJobDescription",
          "my professional skills",

          [],
          Textarea
        )}
      </p>
      <p>
        about me:
        {createField("aboutMe", "about me", [], Textarea)}
      </p>
      <div>
        <p>contacts:</p>
        {Object.keys(profile.contacts).map((el, ind) => (
          <p key={ind}>
            {el}: {createField("contacts." + el, el, [], Input)}
          </p>
        ))}
      </div>
    </form>
  );
};

const ProfileEditFormReduxForm = reduxForm<InjectedFormProps<any>, any>({
  form: "ProfileEditForm",
})(ProfileEditForm);

type ProfileDetailsPropsType = {
  profile: any;
  setEditMode: any;
  isOwner: boolean;
};
const ProfileDetails = ({
  profile,
  setEditMode,
  isOwner,
}: ProfileDetailsPropsType) => {
  return (
    <div className={s.profile_data}>
      {isOwner && (
        <p>
          <button onClick={setEditMode}>edit</button>
        </p>
      )}
      <p>full name: {profile.fullName}</p>
      <p>looling for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
      {profile.lookingForAJob && (
        <p>
          my professional skills:{" "}
          {profile.lookingForAJobDescription || "lookingForAJobDescription"}
        </p>
      )}
      <p>about me: {profile.aboutMe}</p>
      <div>
        <p>contacts:</p>
        {Object.keys(profile.contacts).map((el, ind) => (
          <p key={ind}>{el}:</p>
        ))}
      </div>
    </div>
  );
};

type ProfileStatusPropsType = {
  status: string;
  update: any;
};
class ProfileStatus extends React.Component<{
  status: string;
  update: (v: string) => void;
}> {
  state = {
    editMode: false,
    status: this.props.status ? this.props.status : "no status",
  };

  activateMode = () => {
    this.setState({ ...this.state, editMode: true });
  };
  deactivateMode = () => {
    this.setState({ ...this.state, editMode: false });
    this.props.update(this.state.status);
  };
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps: ProfileStatusPropsType): void {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        ProfileStatus:
        {this.state.editMode ? (
          <div>
            <input
              type="text"
              value={this.state.status}
              onBlur={this.deactivateMode}
              autoFocus={true}
              onChange={this.onChange}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateMode}>
              {this.props.status ? this.props.status : "no status"}
            </span>
          </div>
        )}
      </div>
    );
  }
}
