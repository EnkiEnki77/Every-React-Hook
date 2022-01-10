import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UseState from './Pages/UseState'
import UseRef from './Pages/UseRef'
import UseMemo from './Pages/UseMemo'
import UseEffect from './Pages/UseEffect'
import ContextHook from './Pages/ContextHook'
import Nav from './Components/Nav'

function App() {

  return (
    <div className="App">
        
        <Router>
          <Nav/>
          <Routes>
            <Route path='/' element={<UseState/>}/>
            <Route path='/effect' element={<UseEffect/>}/>
            <Route path='/context' element={<ContextHook/>}/>
            <Route path='/memo' element={<UseMemo/>}/>
            <Route path='/ref' element={<UseRef/>}/>
          </Routes>
        </Router>
    </div>

    
  );
}

export default App;
