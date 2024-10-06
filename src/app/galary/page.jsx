import Image from 'next/image';
import React from 'react';
const getTime= async()=>{
	const res = await fetch("http://localhost:3000/time",{next:{revalidate:5}})
	const data = await res.json()
	return data.currentTime
}
const page = () => {
	const currentTime =  getTime()
	return (
		<div className='min-h-screen'>
			<h1 className='font-bold'>Galary Page {currentTime}</h1>
			<Image
			 height='1080'
			 width="1920"
			src='/src/app/images/img2.jpg'
			alt='img'></Image>
		</div>
	);
};

export default page;