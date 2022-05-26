import React, { useEffect, useState } from 'react';

import Tool from './Tool';

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('https://still-ridge-84035.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  const sTools = tools.slice(0, 6);
  return (
    <div className="w-11/12 mx-auto mt-12">
      <h1 className="text-5xl font-bold mb-12  text-primary text-center">
        Best Tools
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {sTools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
