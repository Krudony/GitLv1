import React from 'react';
import Link from 'next/link';
import { Mail, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gray-200 bg-gray-50 mt-12">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
                P
              </div>
              <span className="text-lg font-bold text-gray-900">PlushieAI</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Transform your favorite memories into adorable plushie designs with AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-primary-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-gray-600 hover:text-primary-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/faq" className="text-sm text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/docs/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-sm text-gray-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-gray-600 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-sm text-gray-600 hover:text-primary-600">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-policy" className="text-sm text-gray-600 hover:text-primary-600">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="mailto:hello@plushieai.com"
                className="text-gray-400 hover:text-primary-600"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/plushieai"
                className="text-gray-400 hover:text-primary-600"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/plushieai"
                className="text-gray-400 hover:text-primary-600"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t-2 border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} PlushieAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
