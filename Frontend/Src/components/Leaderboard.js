import { useEffect, useState } from 'react';
import { getUsers } from '../api';
export default function Leaderboard({ refresh }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };
    fetch();
  }, [refresh]);
  return (
    <table>
      <thead>
        <tr><th>Rank</th><th>Name</th><th>Total Points</th></tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={user._id}>
            <td>{idx + 1}</td>
            <td>{user.name}</td>
            <td>{user.totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}