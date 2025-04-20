import styles from "./styles.module.scss";
import { TabsContainerProps } from "./types";

type TabsContainerPresenterProps = {
  tabContents: TabsContainerProps["tabContents"];
  activeTab: number;
  onTabClick: (index: number) => void;
}

export const TabsContainerPresenter = ({ tabContents, activeTab, onTabClick }: TabsContainerPresenterProps) => {
  return (
    <>
      <ul className={styles['c-tab-indexes']}>
        {tabContents.map((tab, key) => (
          <li
            role="tab"
            key={key}
            className={`${styles['c-tab-index']} ${key === activeTab ? styles["c-tab-index--active"] : ""}`}
            onClick={() => onTabClick(key)}
          >
            {tab.index}
          </li>
        ))}
      </ul>
      <div className={styles['c-tab-contents']}>
        {tabContents.map((tab, key) => (
          <div
            key={key}
            className={`${styles["c-tab-content"]} ${key === activeTab ? styles["c-tab-content--active"] : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};
