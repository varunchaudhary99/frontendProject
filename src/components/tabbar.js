import React from 'react';

function TabBar({ activeTab, setActiveTab }) {
  const tabs = ['Insurance', 'Third Party', 'Own Damage'];

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabBar;
