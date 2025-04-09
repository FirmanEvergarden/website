import { useEffect } from 'react';
import MongoDbSetup from '../sections/MongoDbSetup';

export default function MongoDBSetupPage() {
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
    <MongoDbSetup />
  );
}