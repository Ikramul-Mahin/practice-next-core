import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
session:{
	strategy:"jwt"
},
providers:[CredentialsProvider({
	credentials:{
          email:{label :"email",
			 type:"text",
			 required:true,
          placeholder:"email-here"},
			 
			 password:{label:"password",
			 type:"password",
			 required:true,
			 placeholder:"password-here"}
},

async authorixe(credentials){
	const {email,password} = credentials
	if(!credentials){ return null
	}
	if(email){
		const currentUser  = users.find((user)=> user.email=== email)
		console.log(currentUser);
		if(currentUser){
			currentUser.password=== password
			return currentUser
		}
	}
	return null
}
})]
})
const users =[
	{id:1,
		name:"mamun",
	email:"m@mia.com",
	password:"password"
  },
	{id:2,
		name:"nahid",
	email:"n@mia.com",
	password:"password"
  },
	{id:2,
		name:"anas",
	email:"a@mia.com",
	password:"password"
  },
]
export{handler as GET , handler as POST }