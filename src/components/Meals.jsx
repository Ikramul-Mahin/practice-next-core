'use client'
import React, { useEffect, useState } from 'react';

const Meals = () => {
	const [search,setSearch]  =useState('a')
	const [error,setError] = useState("")
	const [meals,setMeals] = useState([])
	const loadData= async() =>{
	try {
		const res = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
	const data= res.json()
	console.log(data);
	setMeals(data.meals)
	setError("")
	} catch (error) {
		setError("No Data Found")
	}
	}
	const handler=(e)=>{
		console.log(e.target.value);
		setSearch(e.target.value)
	}
	useEffect(()=>{
		loadData()
	},[])
	return (
		<div>
			<div>
				<input 
				onChange={handler}
				type="text" 
				className='p-4 border-4' 
				laceholder='search meals' />
				<button onClick={()=>loadData()} className='bg-red-400 p-4'>Search</button>
				<div className='mt-12 grid grid-cols-4 gap-12'>
{
	meals?.length>0 && !error &&meals?.map((meal)=>{
		<div key={meal?.idMeal}>
			<h1>{meal.strMeal}</h1>
			<p>{strInstractions}</p>
		</div>
	})
}
				</div>
				{
					error&& <h1>No data found</h1>
				}
			</div>
		</div>
	);
};

export default Meals;