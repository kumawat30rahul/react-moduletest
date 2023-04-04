import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Item from './Component/Item'
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {

  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/item/:id' element={<Item />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  )
}

export default App
