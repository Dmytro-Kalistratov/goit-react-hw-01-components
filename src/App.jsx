import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import userData from './data/user.json';
import statData from './data/data.json';
import friendsData from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        key={userData.tag}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      {/* <Statistics stats={statData} /> */}
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
