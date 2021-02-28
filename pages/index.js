import React from 'react';
/* components */
import Main from '../components/Main';
import Header from '../components/Header'
import Footer from '../components/Footer';
/*  Hooks, Important this work with Experience only */
import useGetData from '../hooks/useGetData';


const Home = () => {
  
  const data = useGetData();
  console.log(data);


  return (
    <div>
      <Header />
      <Main 
        data={ data }
      />
      <Footer />
    </div>
  );
};

export default Home;