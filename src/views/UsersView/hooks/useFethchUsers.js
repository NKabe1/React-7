import axios from "axios";
import { useState, useEffect } from "react";

export function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const resp = await axios.get("https://dummyjson.com/users");
    setUsers(resp.data?.users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { users, loading, getUsers };
}