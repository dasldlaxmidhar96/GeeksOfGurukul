import React, { useState } from 'react';
import ModuleList from './Components/ModuleList';
import ModuleContent from './Components/ModuleContent';

const modules = [
  {
    id: 1,
    title: 'Module 1',
    content: 'This is the content of Module 1',
  },
  {
    id: 2,
    title: 'Module 2',
    content: 'This is the content of Module 2',
  },
  {
    id: 3,
    title: 'Module 3',
    content: 'This is the content of Module 3',
  },
  {
    id: 4,
    title: 'Module 4',
    content: 'This is the content of Module 4',
  },
  {
    id: 5,
    title: 'Module 5',
    content: 'This is the content of Module 5',
  },
  {
    id: 6,
    title: 'Module 6',
    content: 'This is the content of Module 6',
  },
  {
    id: 7,
    title: 'Module 7',
    content: 'This is the content of Module 7',
  },
];

const App = () => {
  const [selectModule, setSelectModule] = useState(null);

  const handleModuleSelection = (module) => {
    setSelectModule(module);
  };
  return (
    <div className="App">
      <ModuleContent selectModule={selectModule} />
      <ModuleList modules={modules} onSelectModule={handleModuleSelection} />
    </div>
  );
};

export default App;
