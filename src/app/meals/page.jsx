
import Meals from '@/components/Meals';
import React from 'react';

export const metadata = {
	title: 'Meals Page',
	description: "Generated by create next app",
 };
 
const MealPage = () => {
	
	return (
		<div className='p-12'>
			<h1>chose your meals by search</h1>
			<Meals></Meals>
		</div>
	);
};

export default MealPage;