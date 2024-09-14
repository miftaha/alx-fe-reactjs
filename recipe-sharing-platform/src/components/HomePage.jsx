import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import data from '../data.json'

const HomePage = () => {
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    setRecipes(data)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
      {recipes?.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} className="flex justify-center">
          <div
            key={recipe.id}
            className="bg-emerald-100 m-5 rounded w-8/12 shadow-md hover:shadow-lg transition ease-in-out duration-100"
          >
            <img
              src={recipe.image}
              className="m-auto py-5 hover:scale-105 transition ease-in-out duration-300"
            />
            <h1 className="font-bold text-orange-600 mx-2">{recipe.title}</h1>
            <p className="font-light text-yellow-600 p-2">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
