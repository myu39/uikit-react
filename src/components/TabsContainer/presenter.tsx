import styles from "./styles.module.scss";
import { TabsContainerProps } from "./types";

export const TabsContainerPresenter = ({ tabContents, activeTab, onTabClick, pjClass }: TabsContainerProps) => {
  return (
    <>
      <ul className={`${styles['c-tab-indexes']} c-tab-indexes ${pjClass ? pjClass : ""}`}>
        {tabContents.map((tab, key) => (
          <li
            role="tab"
            key={key}
            className={`${styles['c-tab-index']} c-tab-index ${key === activeTab ? styles["c-tab-index--active"] : ""} ${key === activeTab ? "c-tab-index--active" : ""}`}
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
            className={`${styles["c-tab-content"]} c-tab-content ${key === activeTab ? styles["c-tab-content--active"] : ""} ${key === activeTab ? "c-tab-content--active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};
