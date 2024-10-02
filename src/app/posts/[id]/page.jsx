import React from 'react';
const getDetailPaeg = async(id) =>{
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const data =await res.json()
return data
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