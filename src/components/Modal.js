import React from 'react';

function Modal({ id, title, content, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={(e) => e.target.id === id && onClose(id)}>
      <div className="modal-content">
        <span className="close" onClick={() => onClose(id)}>&times;</span>
        <h3>{title}</h3>
        <ul>
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;