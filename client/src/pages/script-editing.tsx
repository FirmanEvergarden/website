import { useEffect } from 'react';
import ScriptEditing from '../sections/ScriptEditing';

export default function ScriptEditingPage() {
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
    <ScriptEditing />
  );
}