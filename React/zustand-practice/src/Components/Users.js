import { useState, useEffect } from "react";
import useUserstore from './useUserstore.js'

const Users = () => {
  const users = useUserstore((state) => state.data);
  const getUsers = useUserstore((state) => state.getUsers);
  const createUsers = useUserstore((state) => state.createUsers);
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    createUsers(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <div>Total: {users.length}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Users;