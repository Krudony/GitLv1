'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      if (!allowMultiple) {
        newExpanded.clear();
      }
      newExpanded.add(itemId);
    }

    setExpandedItems(newExpanded);
  };

  return (
    <div className="space-y-2 border-t-2 border-gray-200">
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full border-b-2 border-gray-200 px-4 py-3 text-left font-medium text-gray-900 transition-colors hover:bg-gray-50"
            aria-expanded={expandedItems.has(item.id)}
            aria-controls={`panel-${item.id}`}
          >
            <div className="flex items-center justify-between">
              <span>{item.title}</span>
              <ChevronDown
                className={clsx(
                  'h-5 w-5 transition-transform text-gray-600',
                  expandedItems.has(item.id) && 'rotate-180'
                )}
              />
            </div>
          </button>
          {expandedItems.has(item.id) && (
            <div id={`panel-${item.id}`} className="bg-gray-50 px-4 py-3">
              <div className="text-sm text-gray-700">{item.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
