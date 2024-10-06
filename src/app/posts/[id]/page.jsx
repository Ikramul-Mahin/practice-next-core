import { redirect } from 'next/dist/server/api-utils';
import React from 'react';



const getDetailPaeg = async(id) =>{
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const data =await res.json()

return data
}
export const generateMetadata= async({params})=>{
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
	const postDetails =await res.json()
return{
title: {
	absolute:` ${postDetails.title}`
},
   description:`${postDetails.body}`,
	keywords:postDetails.body.split(' ')
}
	
}
const PostDetailPage = async({params}) => {
	const {id, title,body} =await getDetailPaeg(params.id)
	return (
		<div>
			<h1>title:{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default PostDetailPage;