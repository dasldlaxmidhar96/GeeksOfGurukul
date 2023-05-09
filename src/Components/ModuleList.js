import React, { useState } from 'react';

const ModuleList = ({ modules, onSelectModule }) => {
  const [selectModule, setSelectModule] = useState(null);

  const handleModuleClick = (module) => {
    setSelectModule(module);
    onSelectModule(module);
  };
  return (
    <div className="module-list">
      <h2>Modules</h2>
      <ul>
        {modules.map((module) => {
          return (
            <li key={module.id} onClick={() => handleModuleClick(module)}>
              {module.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModuleList;
