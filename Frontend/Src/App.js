import { useState } from 'react';
import UserSelector from './components/UserSelector';
import Leaderboard from './components/Leaderboard';
import AddUserForm from './components/AddUserForm';
function App() {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => setRefresh(!refresh);
  return (
    <div>
      <h1>🏆 Leaderboard</h1>
      <AddUserForm onUserAdded={triggerRefresh} />
      <UserSelector onClaimed={triggerRefresh} />
      <Leaderboard refresh={refresh} />
    </div>
  );
}
export default App;
