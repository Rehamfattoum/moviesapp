import './App.css';
import Header from './components/header';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Add from './components/Add';
import WatchList from './components/watchlist';
import Watched from './components/watched';
import ContextProvider from './components/context/globalContext'

function App() {
  return (
    <Router>
      <ContextProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>} />
        <Route path='/watched' element={<Watched/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
