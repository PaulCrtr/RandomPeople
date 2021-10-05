import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../types/user";

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await axios.get<{ results: User[] }>(
        "https://randomuser.me/api/?results=25"
      );
      setUsers(response.data.results);
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

  useEffect(() => {
    getUsers();
  }, []);

  return { users, error, loading };
};

export default useFetchUsers;
