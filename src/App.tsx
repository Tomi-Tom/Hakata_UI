import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { Solutions } from './components/Solutions';
import { Certifications } from './components/Certifications';
import { Partners } from './components/Partners';
import { Sectors } from './components/Sectors';
import { Footer } from './components/Footer';
import { ProfilePage } from './components/ProfilePage';
import { QuoteCreationPage } from './components/QuoteCreationPage';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'profile' | 'quote' | 'admin'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; firstName: string; lastName: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('hakata_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }

    // Listen for navigation events from other components
    const handleNavigateToQuote = () => {
      setCurrentPage('quote');
    };
    window.addEventListener('navigate-to-quote', handleNavigateToQuote);

    return () => {
      window.removeEventListener('navigate-to-quote', handleNavigateToQuote);
    };
  }, []);

  const handleLogin = (userData: { email: string; firstName: string; lastName: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('hakata_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('hakata_user');
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-white overflow-x-hidden">
      <Navbar 
        onLogin={handleLogin} 
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <ProductCategories />
          <Solutions />
          <Partners />
          <Certifications />
          <Sectors />
          <Footer />
        </>
      ) : currentPage === 'profile' ? (
        <ProfilePage user={user} onLogout={handleLogout} />
      ) : currentPage === 'admin' ? (
        <AdminDashboard />
      ) : (
        <QuoteCreationPage
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          user={user}
        />
      )}
    </div>
  );
}