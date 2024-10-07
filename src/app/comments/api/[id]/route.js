export async function PATCH(request,{params}){
const body = await request.json()
const index = comments.findIndex((c)=> c.id === parseInt(params.id))
comments[index]={
tetx:body.text
}
	return Response.json({
		message:"msg updated",
		comments
	})
}
export async function DELETE(request,{params}){
	const newCmnt = comments.filter((c)=> c.id !== parseInt(params.id))
	return Response.json({
		message:"msg DELETED",
		newCmnt
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