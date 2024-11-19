import { useState, useEffect } from 'react';
import './Drawer.css';

const Drawer = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    const drawer = document.querySelector('.drawer');
    drawer.classList.add('closing');
    
    setTimeout(() => {
      onClose();
      setMounted(false);
    }, 300);
  };

  if (!isOpen && !mounted) return null;

  return (
    <div className="drawer">
      <button className="drawer-close" onClick={handleClose}>
        <span></span>
        <span></span>
      </button>
      <div className="drawer-content">
        {children}
      </div>
    </div>
  );
};

export default Drawer; 