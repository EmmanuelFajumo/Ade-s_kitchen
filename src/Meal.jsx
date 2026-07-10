import { useState, useEffect } from "react"
import "./assets/meal.css"
import Hero from "./Meal_components/Hero"
import Nav from "./Meal_components/Nav"
import Categories from "./Meal_components/Categories"
import Footer from "./Meal_components/Footer"

const Meal = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(function () {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setLoading(false);
        setError(false);
        setCategories(data.categories);
      })
      .catch(function () {
        setLoading(false);
        setError(true);
        setCategories([]);
      });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Categories categories={categories} error={error} loading={loading} />
      <Footer />
    </>
  );
};

export default Meal