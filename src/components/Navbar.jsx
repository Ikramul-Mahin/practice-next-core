"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Navbar = () => {
	const pathName = usePathname();
	const session = useSession()
	
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
 {/* <button className='border p-2'>log out</button> */}
 <Link href={'/api/auth/signup'}>
 <button  className='border p-2'>Sign Up</button>
 </Link>
		</div>
	);
};

export default Navbar;