import { useEffect } from 'react';
import DigiflazzRegistration from '../sections/DigiflazzRegistration';

export default function DigiflazzRegistrationPage() {
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
    <DigiflazzRegistration />
  );
}