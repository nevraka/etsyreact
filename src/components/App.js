import React, { useState, useEffect } from 'react';
import Header from './Header';
import MenuBar from './MenuBar';

const App = () => {
  const [data, setData] = useState({});
  const { results = [] } = data;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch(
      'http://localhost:8010/proxy/v2/listings/active?api_key=w6f4x3ejkgkynywj9cwsdgbn'
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('setData', data);
      });
  };

  return (
    <>
      <Header />
      <MenuBar />
      <div>
        {results.map((result) => {
          return (
            (<div>{result.taxonomy_path[0]}</div>),
            (<div>{result.taxonomy_path[1]}</div>)
          );
        })}
      </div>
    </>
  );
};

export default App;
