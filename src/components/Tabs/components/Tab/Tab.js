import styles from './Tab.scss';
import classnames from 'classnames';

const Tab = ({ style, title, onTabClick, isActive }) =>
  <div
    style={style}
    className={classnames(styles.tab, { [styles.active]: isActive })}
    onClick={() => onTabClick(title)}
  >
    <p className={styles.title}>{title}</p>
  </div>
;

export default Tab;
