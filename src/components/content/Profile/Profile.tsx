import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = (props: any) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        update={props.updateProfileStatusTC}
        saveFile={props.saveFile}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};
