import React from 'react';
/* components */
import Main from '../components/Main';
/*  Hooks, Important this work with Experience only */
import useGetData from '../hooks/useGetData';


const Home = () => {
  
  const data = useGetData();
  console.log(data);

  return (
    <div>
      <Main 
        data={ data }
      />
    </div>
  );
};

export default Home;