import React from 'react';
import { getPosts } from '../services/apiPosts';


const Postpage = async () => {
	const postsData=  await getPosts()
	console.log(postsData);
	return (
		<div>
			post page
			<div className='grid grid-cols-4'>
				{
					postsData?.slice(0,20).map(({title, body,id})=>(
					<div className='border-2 p-4 m-4' key={postsData.id}>
<h1>Title:{title}</h1>
<h2>Body:{body}</h2>
					</div>
					))
				}

			</div>
		</div>
	);
};

export default Postpage;