
import './App.css';
import Detail from './components/Detail';
import Edit from './components/Edit';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
      

      <>
      <ToastContainer/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Detail />} />
          <Route path='/Edit/:id' element={<Edit />} />
         

        </Routes>
      </>
    </div>
  )
}

export default App;
