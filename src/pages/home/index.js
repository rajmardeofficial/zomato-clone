import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import TabOptions from "../../components/common/tabOptions/TabOptions";
import Delivery from "../../components/delivery/Delivery";
import DiningOut from "../../components/diningOut/DiningOut";
import NightLife from "../../components/nightLife/NightLife";

function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Diff Screen */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DiningOut />;

    case "Night Life":
      return <NightLife />;

    default:
      return <Delivery />;
      break;
  }
};

export default Home;
