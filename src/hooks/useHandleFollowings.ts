import { useState, useEffect } from "react";
import { User } from "../types/user";
import { getUsers } from "../utils/followingsLocalStorage";

export const useHandleFollowings = () => {
  const [followings, setFollowings] = useState<User[]>([]);
  const [message, setMessage] = useState("");

  const updateFollowingsState = () => {
    setFollowings(getUsers());
  };

  useEffect(() => {
    updateFollowingsState();
  }, []);

  useEffect(() => {
    if (!followings.length) {
      setMessage("You don't have any followings...");
    } else {
      setMessage("");
    }
  }, [followings]);

  return { followings, message, updateFollowingsState };
};
