
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import App from './App.tsx'
import './index.css'
import SplashScreen from './components/SplashScreen.tsx'

const RootComponent = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  
  // Prevent scrolling during splash screen
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);
  
  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && <App />}
    </>
  );
};

createRoot(document.getElementById("root")!).render(<RootComponent />);
