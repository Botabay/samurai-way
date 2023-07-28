import { UserType } from "../../../redux/usersReducer";
import { Pagination } from "../../../common/Pagination/Pagination";
import { User } from "./User/User";

type PropsType = {
  users: UserType[];
  isFollowDisabled: number[];
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;

  toSetCurrentPage: any;
  getPageUsers: any;
  followTC: any;
  unfollowTC: any;
};

export const Users = ({
  users,
  isFollowDisabled,
  totalItemsCount,
  pageSize,
  currentPage,

  toSetCurrentPage,
  getPageUsers,
  followTC,
  unfollowTC,
}: PropsType) => {
  const toUnfollow = (id: string) => {
    unfollowTC(id);
  };
  const toFollow = (id: string) => {
    followTC(id);
  };
  return (
    <div>
      <Pagination
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        toSetCurrentPage={toSetCurrentPage}
        getPageUsers={getPageUsers}
        partSize={20}
      />
      <div>
        {users.map((el: UserType) => (
          <User
            key={el.id}
            isFollowDisabled={isFollowDisabled}
            user={el}
            toUnfollow={toUnfollow}
            toFollow={toFollow}
          />
        ))}
      </div>
    </div>
  );
};
