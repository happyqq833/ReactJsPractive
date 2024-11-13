import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import TableUser from './components/tableUser';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import { ThemeProvider } from 'react-bootstrap';
import { createContext, useContext, useState } from 'react';


function App() {
  const ThemeContext = createContext(null);
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
      <Container >
          <Header/>
            <Routes>
              <Route path='/' element={<Home theme={theme}/>}/>
              <Route path='/users' element={<TableUser theme={theme}/>}/>
            </Routes>
            <label>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light')
                }}
              />
              Use dark mode
            </label>
      </Container>
    </div>
    </ThemeContext.Provider>
    
  );
 
}


export default App;
