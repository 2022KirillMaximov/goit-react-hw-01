import css from './Profile.module.css';

export default function Profile({ name,
    tag,
    location,
    image,
    stats: { followers, views, likes } }) {

    return (
        <div className={css.wrapper}>
            <div className={css.profilInfo}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{ name}</p>
                <p className={css.userInfo}>@{ tag}</p>
                <p  className={css.userInfo}>{location }</p>
            </div>

            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span  className={css.statsTitle}>Followers</span>
                    <span className={css.quantity}>{ followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span  className={css.statsTitle}>Views</span>
                    <span className={css.quantity}>{views }</span>
                </li>
                <li className={css.statsItem}>
                    <span  className={css.statsTitle}>Likes</span>
                    <span className={css.quantity}>{ likes}</span>
                </li>
            </ul>
        </div>
    );
}