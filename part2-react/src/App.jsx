import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MealCard from './components/MealCard';
// import './App.css';

function App() {
  // 1. State management
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log()

  // 2. useEffect fetch API เมื่อ searchTerm เปลี่ยน
  useEffect(() => {
    if (!searchTerm) return; // ถ้า searchTerm ว่าง ไม่ fetch

    const fetchRecipes = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("API response:", data);
        setMeals(data.meals || []);
      } catch (err) {
        setError('An error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  // 3. ฟังก์ชัน handleSearch สำหรับ state lifting
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container">
      <header>
        <h1>🍳 Recipe Finder</h1>
        {/* TODO: Render SearchBar component และส่ง props ที่จำเป็น */}
        <SearchBar onSearch={handleSearch} />
      </header>

      <main>
        <div className="results-grid">
          {/* TODO: ใช้ Conditional Rendering เพื่อแสดง Loading, Error, หรือ Meal Cards */}
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error && meals.length === 0 && searchTerm && (
            <p>No recipes found.</p>
          )}
          {!isLoading &&
            !error &&
            meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
