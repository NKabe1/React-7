import { useState, useEffect } from "react";
import axios from "axios";


export function useUsersDescription() {
  const [detailedUsers, setDetailedUsers] = useState([]);

  const getDetailedUsers = async () => {
    const resp = await axios("https://dummyjson.com/users");
    const users = resp?.data.users;
    const detailedUsers = users.map((user) => ({
      id: user.id,
      image: user.image,
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      city: user.address.city,
      age: user.age,
      gender: user.gender,
      height: user.height,
      weight: user.weight,
    }));
    setDetailedUsers(detailedUsers);
  };

  useEffect(() => {
    getDetailedUsers();
  }, []);

  const getUserById = (id) => {
    return detailedUsers.find((user) => user.id === id);
  };

  return { detailedUsers, getUserById };
}