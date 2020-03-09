import React, { useState } from "react";
import styles from "./Tabs.module.css";

function Tabs(props) {
  const tabs = [
    {
      label: "Tab 1 label",
      content:
        "Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro."
    },
    {
      label: "Tab 2 label",
      content:
        "Lorem ipsum dolor sit amet, laudem regione definitiones sed at, tale invenire iracundia at eos, cu qui quando platonem hendrerit. Choro tibique gloriatur id sea. Modus nominati at pro, graece putent saperet duo ad, autem torquatos ei nec. Cu iudico aperiri vix, an vix purto velit. Cibo debitis eum ad, nullam eirmod ne ius. Minim nullam delicata sed cu. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro."
    },
    {
      label: "Tab 2 label",
      content:
        "Lorem ipsum dolor sit amet, id sed ubique malorum verterem, dolorum legendos molestiae te has. No quaerendum voluptatibus vix, quo ad probo affert. Eu pri augue constituto, cu tantas noluisse vix. Dicat facilisi pericula in vim, aliquip persequeris eu vix. Ex viderer meliore corpora mea. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro. Lorem ipsum dolor sit amet, quo ut erant possim disputando, autem tractatos cum ne, id vivendo omittantur vel. Maiorum argumentum vix ea. Tota probo iusto mel at, ei volumus maluisset vituperata vis, fabulas suscipit maiestatis mea no. Adhuc fugit eirmod ne duo. Nonumy mucius consequuntur sed in, aeque conceptam ut pro."
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  tabs.content = {
    visible: false
  };

  return (
    <div className={styles.container}>
      <div name="header" className={styles.tabHeader}>
        {props.items.map((item, i) => (
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
            tabs.content.visible ? styles.contentText : styles.contentText
          }
        >
          {tabs[activeTab].content}
        </p>
      </div>
    </div>
  );
}

export default Tabs;
