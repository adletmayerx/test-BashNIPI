import { defineStore } from "pinia";
import type User from "../types/User";
import { ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = ref<Array<User>>([]);

  const setUsers = (newUsers: Array<User>) => {
    users.value = newUsers;
  };

  const editUser = (newUserData: User) => {
    if (!users.value.length) {
      return;
    }

    for (let user of users.value) {
      if (newUserData.id !== user.id) {
        continue;
      }

      let key: keyof User;

      for (key in newUserData) {
        //@ts-ignore
        user[key] = newUserData[key];
      }

      break;
    }
  };

  return { users, setUsers, editUser };
});
