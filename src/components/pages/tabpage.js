import React, { useState } from 'react';
import TabBar from '../tabbar';
import InsurancePlans from '../insurancePlan';
import ThirdPartyPlans from './thirdpartyplan';
import OnDamagePlans from './onDamagePlan';

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState('Insurance');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Insurance':
        return <InsurancePlans/>;
      case 'Third Party':
        return <ThirdPartyPlans />;
      case 'Own Damage':
        return <OnDamagePlans />;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default TabsPage;
