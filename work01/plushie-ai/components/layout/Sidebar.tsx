'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  LayoutDashboard,
  Image,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
} from 'lucide-react';

interface SidebarProps {
  onLogout?: () => void;
  userName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout, userName }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (href: string) => pathname?.startsWith(href);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/gallery', label: 'Gallery', icon: Image },
    { href: '/settings', label: 'Settings', icon: Settings },
    { href: '/docs', label: 'Help', icon: HelpCircle },
  ];

  return (
    <aside
      className={clsx(
        'flex flex-col border-r-2 border-gray-200 bg-white transition-all duration-300',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-gray-200 p-4">
        {!isCollapsed && <span className="font-bold text-gray-900">Menu</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg p-1 hover:bg-gray-100"
          aria-label="Toggle sidebar"
        >
          <ChevronLeft
            className={clsx('h-5 w-5 transition-transform', isCollapsed && 'rotate-180')}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                active
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t-2 border-gray-200 p-4 space-y-3">
        {!isCollapsed && userName && (
          <div className="px-3 py-2">
            <p className="text-xs font-semibold text-gray-500">USER</p>
            <p className="truncate text-sm font-medium text-gray-900">{userName}</p>
          </div>
        )}
        <button
          onClick={onLogout}
          className={clsx(
            'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-error-50 hover:text-error-600',
            isCollapsed && 'justify-center'
          )}
          title="Logout"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
