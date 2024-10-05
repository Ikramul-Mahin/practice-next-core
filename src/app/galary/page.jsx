import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='min-h-screen'>
			<h1 className='font-bold'>Galary Page</h1>
			<Image
			 height='1080'
			 width="1920"
			src='/src/app/images/img2.jpg'
			alt='img'></Image>
		</div>
	);
};

export default page;