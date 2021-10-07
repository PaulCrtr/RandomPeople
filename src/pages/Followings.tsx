import { Heading } from "@chakra-ui/layout";
import UserCard from "../components/user/UserCard";
import UsersContainer from "../components/user/UsersContainer";
import { useHandleFollowings } from "../hooks/useHandleFollowings";

const Followings = () => {
  const { followings, message, updateFollowingsState } = useHandleFollowings();

  return (
    <>
      <Heading textDecoration="underline" textAlign="center" m="10">
        Followings
      </Heading>
      {message && (
        <Heading size="lg" m="10" textAlign="center">
          {message}
        </Heading>
      )}
      <UsersContainer
        childrens={followings.map((user, i) => (
          <UserCard
            key={i}
            user={user}
            updateFollowingsState={updateFollowingsState}
          />
        ))}
      />
    </>
  );
};

export default Followings;
