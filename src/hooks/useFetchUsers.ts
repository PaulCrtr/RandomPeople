import axios from "axios";
import { useState, useEffect } from "react";
import { User, UsersSort } from "../types/user";
import { birthdayToAge } from "../utils/birthdayToAge";

const RANDOM_USER_BASE_URL = "https://randomuser.me/api/";

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("");

  // API call
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ results: User[] }>(
        `${RANDOM_USER_BASE_URL}?results=25`
      );

      setUsers(
        response.data.results
          // add age property
          .map((user) => {
            return { ...user, age: birthdayToAge(user.dob.date) };
          })
          // sort by age
          .sort((a, b) => a.age - b.age)
      );
    } catch (err: any) {
      if (err.error) {
        setError(err.error);
      } else {
        setError("Error...");
      }
    } finally {
      setLoading(false);
    }
  };

  // data fetch when didmount
  useEffect(() => {
    getUsers();
  }, []);

  // sorting functions
  const sort: UsersSort = {
    byAge: () => {
      if (users) {
        setUsers([...users].sort((a, b) => a.age - b.age));
      }
    },
    byGender: () => {
      if (users) {
        if (users[0].gender === "male") {
          setUsers([...users].sort((a) => (a.gender === "male" ? 1 : -1)));
        } else {
          setUsers([...users].sort((a) => (a.gender === "female" ? 1 : -1)));
        }
      }
    },
    byABC: () => {
      if (users) {
        setUsers(
          [...users].sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
        );
      }
    },
  };

  return { users, error, loading, sort, getUsers, filterValue, setFilterValue };
};

export default useFetchUsers;
