import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json"


import FriendList from "../FriendList/FriendList";
import Profil from "../Profil/Profil"
import TransactionHistory from "../TransactionHistory/TransactionHistory"

export default function App() {



  return (
    <>
    <Profil 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
    />
      <FriendList friends={friends} />
      <TransactionHistory items = {transactions} />
      </> );
      
}

