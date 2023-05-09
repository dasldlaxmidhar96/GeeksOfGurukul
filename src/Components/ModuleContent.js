import React from 'react';

const ModuleContent = ({ selectModule }) => {
  return (
    <div className="module-content">
      <h2>Module Content</h2>
      {selectModule ? (
        <div>
          <h3>{selectModule.title}</h3>
          <p>{selectModule.content}</p>
        </div>
      ) : (
        <p>Select a Module to view it's content</p>
      )}
    </div>
  );
};

export default ModuleContent;
