'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
  credits?: number;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isAuthenticated = false,
  userName,
  credits,
  onLogout,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-2 border-gray-200 bg-white sticky top-0 z-40">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
              P
            </div>
            <span className="hidden text-xl font-bold text-gray-900 sm:inline">PlushieAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary-600">
                  Dashboard
                </Link>
                <Link href="/gallery" className="text-gray-700 hover:text-primary-600">
                  Gallery
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-primary-600">
                  Pricing
                </Link>
                <Link href="/docs" className="text-gray-700 hover:text-primary-600">
                  Help
                </Link>
              </>
            ) : (
              <>
                <Link href="/pricing" className="text-gray-700 hover:text-primary-600">
                  Pricing
                </Link>
                <Link href="/docs" className="text-gray-700 hover:text-primary-600">
                  Docs
                </Link>
              </>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {isAuthenticated && credits !== undefined && (
              <div className="hidden items-center gap-2 rounded-lg bg-primary-50 px-3 py-2 sm:flex">
                <span className="text-sm font-semibold text-primary-600">{credits}</span>
                <span className="text-xs text-primary-600">Credits</span>
              </div>
            )}

            {isAuthenticated ? (
              <div className="hidden items-center gap-2 md:flex">
                {userName && <span className="text-sm text-gray-700">{userName}</span>}
                <Button size="sm" variant="outline" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden gap-2 md:flex">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t-2 border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" className="px-3 py-2 text-gray-700 hover:bg-primary-50">
                    Dashboard
                  </Link>
                  <Link href="/gallery" className="px-3 py-2 text-gray-700 hover:bg-primary-50">
                    Gallery
                  </Link>
                  <Link href="/pricing" className="px-3 py-2 text-gray-700 hover:bg-primary-50">
                    Pricing
                  </Link>
                  <Link href="/docs" className="px-3 py-2 text-gray-700 hover:bg-primary-50">
                    Help
                  </Link>
                  <Button fullWidth variant="outline" size="sm" onClick={onLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/pricing" className="px-3 py-2 text-gray-700 hover:bg-primary-50">
                    Pricing
                  </Link>
                  <Link href="/docs" className="px-3 py-2 text-gray-700 hover:bg-primary-50">
                    Docs
                  </Link>
                  <Link href="/auth/login">
                    <Button fullWidth variant="outline" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button fullWidth size="sm">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
