import './App.css';
import {Route,Routes} from 'react-router-dom'
import {Watched} from './pages/Watched'
import {Index} from './pages/Index'
import {Layout} from './Layout'
import {Add} from './pages/Add'

import { GlobalProvider } from './context/Globalstate';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/watchlist' element={<Index/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/add" element={<Add/>}/>
      </Route>
    </Routes>
    </GlobalProvider>
    </div>
  );
}

export default App;
