import { useEffect } from 'react';
import AuthenticatorSetup from '../sections/AuthenticatorSetup';

export default function AuthenticatorSetupPage() {
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
    <AuthenticatorSetup />
  );
}