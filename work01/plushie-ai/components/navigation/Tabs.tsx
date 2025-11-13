'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

interface TabItem {
  label: string;
  content: React.ReactNode;
  id: string;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeTabItem = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <div className="flex gap-2 border-b-2 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={clsx(
              'px-4 py-3 font-medium transition-colors',
              activeTab === tab.id
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-gray-600 hover:text-gray-900'
            )}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id={`panel-${activeTab}`} role="tabpanel" className="mt-4">
        {activeTabItem?.content}
      </div>
    </div>
  );
};

export default Tabs;
