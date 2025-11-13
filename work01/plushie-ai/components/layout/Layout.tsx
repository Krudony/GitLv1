import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  userName?: string;
  credits?: number;
  onLogout?: () => void;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isAuthenticated = false,
  userName,
  credits,
  onLogout,
  hideHeader = false,
  hideFooter = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      {!hideHeader && (
        <Header
          isAuthenticated={isAuthenticated}
          userName={userName}
          credits={credits}
          onLogout={onLogout}
        />
      )}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
