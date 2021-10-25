import ReactDOM from 'react-dom';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const backgroundClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const modalContent = isOpen ? (
    <div
      onClick={backgroundClickHandler}
      className="lg:hidden transition hover:transform-y-48 fixed left-0 top-0 w-full h-full bg-black bg-opacity-50"
    >
      <div ref={modalRef} className="w-64 h-full bg-white">
        <div className="border-b h-14 p-4 px-8">
          <button onClick={onClose} className="text-sm">
            X Close
          </button>
        </div>
        <div className="p-8 flex flex-col">
          <Link href="/store">
            <a onClick={onClose} className="mb-4">
              Store
            </a>
          </Link>
          <Link href="/store">
            <a onClick={onClose} className="mb-4">
              About
            </a>
          </Link>
          <Link href="/store">
            <a onClick={onClose} className="mb-4">
              Magazine
            </a>
          </Link>
          <Link href="/store">
            <a onClick={onClose} className="mb-4">
              Contacts
            </a>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
};

export default MenuModal;