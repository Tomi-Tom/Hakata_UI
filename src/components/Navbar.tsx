import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { SignUpModal } from './SignUpModal';
import { QuoteModal } from './QuoteModal';
import logoImage from '@/assets/9fe5a2abc4983a06dd129aab4826d41f5aacd577.png';

interface NavbarProps {
  onLogin: (userData: { email: string; firstName: string; lastName: string }) => void;
  isLoggedIn: boolean;
  user: { email: string; firstName: string; lastName: string } | null;
  onLogout: () => void;
  currentPage: 'home' | 'profile' | 'quote' | 'admin';
  setCurrentPage: (page: 'home' | 'profile' | 'quote' | 'admin') => void;
}

export function Navbar({ onLogin, isLoggedIn, user, onLogout, currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Accueil', id: 'hero' },
    { label: 'Produits', id: 'produits' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Partenaires', id: 'partenaires' },
    { label: 'Certifications', id: 'certifications' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-[#76b900]/20 shadow-lg' : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img src={logoImage} alt="Hakata" className="h-10 w-10" />
              <span className="text-xl tracking-wider text-white">
                HAKATA <span className="text-[#76b900]">TECHNOLOGIE</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ scale: 1.1 }}
                  className="text-white/80 hover:text-[#76b900] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#76b900] group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(118, 185, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('quote')}
                className="px-6 py-3 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Demander un devis</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>

              {!isLoggedIn ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSignUpModalOpen(true)}
                  className="px-6 py-3 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300"
                >
                  Créer un compte
                </motion.button>
              ) : (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 px-4 py-3 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                    <span>{user?.firstName}</span>
                  </motion.button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-[#76b900]/30 rounded-xl overflow-hidden shadow-xl"
                      >
                        <button
                          onClick={() => {
                            setCurrentPage('profile');
                            setShowUserMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-[#76b900]/20 transition-colors flex items-center space-x-2"
                        >
                          <User className="w-4 h-4" />
                          <span>Mon profil</span>
                        </button>
                        <button
                          onClick={() => {
                            setCurrentPage('admin');
                            setShowUserMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-[#76b900]/20 transition-colors flex items-center space-x-2"
                        >
                          <Shield className="w-4 h-4" />
                          <span>Dashboard Admin</span>
                        </button>
                        <button
                          onClick={() => {
                            onLogout();
                            setShowUserMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-red-500/20 transition-colors flex items-center space-x-2 text-red-400"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Se déconnecter</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#76b900]/20"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-white/80 hover:text-[#76b900] transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setCurrentPage('quote');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-[#76b900] text-black rounded-full hover:bg-[#8dd100] transition-all duration-300"
                >
                  Demander un devis
                </button>
                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsSignUpModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-3 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300"
                  >
                    Créer un compte
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setCurrentPage('profile');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full px-6 py-3 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <User className="w-5 h-5" />
                      <span>Mon profil</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('admin');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full px-6 py-3 border-2 border-[#76b900] text-[#76b900] rounded-full hover:bg-[#76b900] hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Shield className="w-5 h-5" />
                      <span>Dashboard Admin</span>
                    </button>
                    <button
                      onClick={() => {
                        onLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full px-6 py-3 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Se déconnecter</span>
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        onLogin={onLogin}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}