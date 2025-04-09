import { useEffect } from 'react';
import Dashboard from '../sections/Dashboard';

export default function Home() {
  useEffect(() => {
    // Manual animation for sections
    const animateSections = () => {
      setTimeout(() => {
        document.querySelectorAll('.section-content').forEach((section) => {
          section.classList.add('visible');
        });
      }, 100);
    };
    
    animateSections(); // Trigger animations
  }, []);
  
  return (
    <Dashboard />
  );
}
