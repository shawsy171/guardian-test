import styles from './ListItem.scss';

const ListItem = ({ link, title, index }) =>
  <li className={styles.listItem}>
    <span className={styles.index}>{index}</span>
    <a className={styles.link} href={link} target="_blank">{title}</a>
  </li>
;

export default ListItem;

