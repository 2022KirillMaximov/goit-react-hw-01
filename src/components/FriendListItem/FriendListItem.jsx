
import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <div className={css.list}>
      <img  src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={clsx(css.Status, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"} </p>
    </div>
  );
}
