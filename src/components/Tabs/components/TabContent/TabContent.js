import ListItem from './../ListItem/ListItem';
import styles from './TabContainer.scss';

const TabContent = ({ content }) =>
  <div className={styles.container}>
    <ul>
      {content.map((item, index) => <ListItem link={item.webUrl} title={item.webTitle} index={index + 1}/>)}
    </ul>
  </div>
;

export default TabContent;
