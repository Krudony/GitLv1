import React from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userName?: string;
  onLogout?: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userName,
  onLogout,
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userName={userName} onLogout={onLogout} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
