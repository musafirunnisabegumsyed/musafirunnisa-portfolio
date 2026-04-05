import React from 'react';

function ProjectCard({ title, modalId, onClick }) {
  return (
    <div className="card animate" onClick={() => onClick(modalId)}>
      <h3>{title}</h3>
      <p>Click to view details</p>
    </div>
  );
}

export default ProjectCard;