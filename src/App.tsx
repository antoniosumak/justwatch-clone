import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Core/Components/Header';
import { Route, Routes } from 'react-router-dom';
import LandingIndex from './Modules/LandingPage/Pages/LandingIndex';
import ForYouIndex from './Modules/ForYou/Pages/ForYouIndex';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-black h-full w-full'>
        <Header />
        <Routes>
          <Route path='/' element={<LandingIndex />} />
          <Route path='/for-you' element={<ForYouIndex />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
