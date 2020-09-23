import React, { useState, useEffect } from 'react';

const MenuBar = () => {
  const [data, setData] = useState([]);
  const { results = [] } = data;

  useEffect(() => {
    fetch(
      'http://localhost:8010/proxy/v2/taxonomy/buyer/get?api_key=w6f4x3ejkgkynywj9cwsdgbn'
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('taxonomy', data);
      });
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      {results.map((result) => {
        return <div>{result.name}</div>;
      })}
    </div>
  );
};

export default MenuBar;
