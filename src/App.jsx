import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import About from './pages/About';
import './App.css';

function App() {
  
  const [favorites, setFavorites] = useState([]);

  
  const toggleFavorite = (recipe) => {
    
    const finnsRedan = favorites.some(fav => fav.idMeal === recipe.idMeal);
    
    if (finnsRedan) {
      
      setFavorites(favorites.filter(fav => fav.idMeal !== recipe.idMeal));
    } else {
      
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <Router>
      <div className="App">
        
        <Header />
        
        <main className="main-content">
          
          <Routes>
            
            <Route 
              path="/" 
              element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} 
            />
            
            <Route 
              path="/search" 
              element={<Search favorites={favorites} toggleFavorite={toggleFavorite} />} 
            />
            
            <Route 
              path="/favorites" 
              element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} 
            />

            
            <Route 
              path="/about" 
              element={<About />} 
            />
          </Routes>
        </main>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
