import { useEffect, useState } from 'react';
import { getUsers, claimPoints } from '../api';
export default function UserSelector({ onClaimed }) {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState('');
  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
    if (data.length) setSelected(data[0]._id);
  };
  useEffect(() => { fetchUsers(); }, []);
  const handleClaim = async () => {
    if (selected) {
      const res = await claimPoints(selected);
      alert(`User ${res.data.user.name} got ${res.data.points} points`);
      onClaimed();
    }
  };
  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        {users.map(user => <option key={user._id} value={user._id}>{user.name}</option>)}
      </select>
      <button onClick={handleClaim}>Claim Points</button>
    </div>
  );
}