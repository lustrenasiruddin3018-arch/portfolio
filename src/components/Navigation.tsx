import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/#hero', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#services', label: 'Services' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">LN</span>
              <span className={`hidden sm:block font-semibold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Lustre
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link
                to="/auth"
                className={`hidden sm:flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white dark:bg-secondary shadow-xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Link
                    to="/auth"
                    className="mt-4 px-4 py-3 bg-primary text-white rounded-lg text-center font-medium hover:bg-primary-dark transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
