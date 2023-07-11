import { defineStore } from "pinia";
import type User from "../types/User";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = ref<Array<User>>([]);

  const setUsers = (newUsers: Array<User>) => {
    users.value = newUsers;

    saveToLocalStorage();
  };

  const editUser = (newUserData: User) => {
    if (!users.value.length) {
      console.error("Массив с пользователями пустой");

      return;
    }

    for (let [i, user] of users.value.entries()) {
      if (newUserData.id !== user.id) {
        continue;
      }

      users.value.splice(i, 1, { ...structuredClone(newUserData) });

      break;
    }

    saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users.value));
  };

  return { users, setUsers, editUser };
});
