import { Dispatch, SetStateAction } from "react";
import { User } from "../types/user";

const FOLLOWINGS_KEY = "followings";

export const saveUser = (
  user: User,
  setIsFollowButtonActive: Dispatch<SetStateAction<boolean>>
) => {
  const list =
    JSON.parse(window.localStorage.getItem(FOLLOWINGS_KEY) as string) || [];
  list.push({ ...user, localCustomId: list.length + 1 });
  window.localStorage.setItem(FOLLOWINGS_KEY, JSON.stringify(list));
  setIsFollowButtonActive(false);
};

export const deleteUser = (id: number) => {
  const list = JSON.parse(
    window.localStorage.getItem(FOLLOWINGS_KEY) as string
  );
  const index = list.indexOf(
    list.find((user: User) => user.localCustomId === id)
  );
  list.splice(index, 1);
  window.localStorage.setItem(FOLLOWINGS_KEY, JSON.stringify(list));
};

export const getUsers = (): User[] => {
  return (
    JSON.parse(window.localStorage.getItem(FOLLOWINGS_KEY) as string) || []
  );
};
