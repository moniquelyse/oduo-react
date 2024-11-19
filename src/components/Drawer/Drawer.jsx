import { useEffect } from 'react';
import './Drawer.css';

const Drawer = ({ isOpen, onClose, children, hideCloseButton = false }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    const drawer = document.querySelector('.drawer');
    drawer.classList.add('closing');
    
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="drawer">
      {!hideCloseButton && (
        <button className="drawer-close" onClick={handleClose}>
          <span></span>
          <span></span>
        </button>
      )}
      <div className="drawer-content">
        {children}
      </div>
    </div>
  );
};

export default Drawer; 