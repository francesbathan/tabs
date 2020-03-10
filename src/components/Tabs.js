import React, { useState } from "react";
import styles from "./Tabs.module.css";

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);
  items.content = {
    visible: false
  };

  return (
    <div className={styles.container}>
      <div name="header" className={styles.tabHeader}>
        {items.map((item, i) => (
          <div
            key={i}
            name="tab1"
            className={activeTab === i ? styles.activeTab : styles.inactiveTabs}
            onClick={() => setActiveTab(i)}
          >
            TAB {i + 1}
          </div>
        ))}
      </div>
      <div name="content" className={styles.content}>
        <p
          className={
            items.content.visible ? styles.contentText : styles.contentText
          }
        >
          {items[activeTab].content}
        </p>
      </div>
    </div>
  );
}

export default Tabs;
