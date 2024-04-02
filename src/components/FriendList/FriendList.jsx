import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((el) => (
        <li key={el.id}>
          <FriendListItem friend={el} />
        </li>
      ))}
    </ul>
  );
}