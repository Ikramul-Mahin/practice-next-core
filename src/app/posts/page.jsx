import React from 'react';
import { getPosts } from '../services/apiPosts';
import Link from 'next/link';
import styles from './styles.modules.css'


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
<button className='btn bg-red-900 p-4'>
	<Link className={styles.test_text} href={`/posts/${id}`}>See Details</Link>
</button>
					</div>
					))
				}

			</div>
		</div>
	);
};

export default Postpage;