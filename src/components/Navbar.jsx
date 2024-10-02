"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Navbar = () => {
	const pathName = usePathname();
	
	const links= [
		{
			title:'Posts',
			path:'/posts'
		},
	{
		   title:'Meals',
			path:'/meals'
	},]
	
	
	return (
		<div className='bg-orange-600 px-6 py-4 flex justify-between text-white '>
			<h2 className='text-2xl'>Next Meal</h2>
 <ul className='flex justify-between  text-center space-x-4'>
	{
		links.map((link)=> <Link className={`${pathName===link.path && "text-cyan-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
	}
 </ul>

 <button  className='border p-2'>Log In</button>
		</div>
	);
};

export default Navbar;