
export const getPosts = async()=>{
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
	const data = await res.json()
	// if(data){
	// 	redirects(`/posts/${data[0].id}`)
	// }
	return data
}