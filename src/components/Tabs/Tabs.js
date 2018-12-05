import { Component } from 'preact';
import { getContent } from './../../services/api';

// components
import Tab from './components/Tab/Tab';
import TabContent from './components/TabContent/TabContent';
import styles from './Tabs.scss';

const DEFAULT_STATE = {
  tabs: [
    { title: 'UK news', active: true },
    { title: 'Football', active: false },
    { title: 'Travel', active: false }
  ],
  content: []
};

class Tabs extends Component {
  state = DEFAULT_STATE;

  componentDidMount = () => {
    const start = this.state.tabs.filter(tab => tab.active);
    const activeTab = 0;
    getContent(start[activeTab].title)
      .then(data => {
        this.setState(() => ({ content: data.response.results }));
      });
  }

  onTabClick = tab => {
    const newState = this.state.tabs.map(currentTab => {
      if (tab === currentTab.title) {
        currentTab.active = true;
      } else {
        currentTab.active = false;
      }
      return currentTab;
    });

    this.setState(() => ({ tabs: newState }));
    getContent(tab)
      .then(data => {
        this.setState(() => ({ content: data.response.results }));
      });
  }

  render () {
    const { tabs, content } = this.state;
    const maxWidth = 100;

    return (
      <div className={styles.tabContainer}>
        <div className={styles.tabContent}>
          {tabs.map(tab =>
            <Tab
              style={{ width: `${maxWidth / tabs.length}%` }}
              title={tab.title}
              isActive={tab.active}
              onTabClick={this.onTabClick}
            />
          )}
        </div>
        <TabContent content={content} />
      </div>
    );
  }
}

export default Tabs;
