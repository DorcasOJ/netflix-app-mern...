import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';


function App() {
   return (
    <div className="app">
      {/* <BrowserRouter>
        <Routes>
          <Routes path="/">
            <Route index element={<div>Home therr</div>} />
          </Routes>
        </Routes>
      </BrowserRouter> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

