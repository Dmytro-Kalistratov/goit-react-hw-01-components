import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import userData from './user.json';
import statData from './data.json';
import friendsData from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        key={userData.tag}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics title="Upload stats" stats={statData} />
      {/* <Statistics stats={statData} /> */}
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
