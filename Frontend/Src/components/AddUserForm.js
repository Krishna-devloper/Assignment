import { useState } from 'react';
import { addUser } from '../api';
export default function AddUserForm({ onUserAdded }) {
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(name);
    setName('');
    onUserAdded();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Add new user" required />
      <button type="submit">Add</button>
    </form>
  );
}