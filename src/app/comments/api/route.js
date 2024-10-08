export async function GET(){
	return Response.json(comments,{
	headers:{
"Set-Cookie":"dark-theme"
	}
	})
}
export async function POST(request){
	const newComment =await request.json()
	comments.push({
		id:comments.length+1,
		text: newComment.text
	})
	return Response.json({
		message:"new comment added",
		comments
	})
}
const comments =[
	{
		id:1,
		text:"comment1"
	},
	{
		id:2,
		text:"comment2"
	},
	{
		id:3,
		text:"comment3"
	},
	{
		id:4,
		text:"comment4"
	}
]