"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    authClient.signUp.email({
            email,
            password,
            name,
    },{
        onError: (ctx) => {
            window.alert(ctx.error.message);
        },
        onSuccess: () => {
            window.alert("Success") 
        }  
    });
  }

  const onSignin = () => {
    authClient.signIn.email({
            email,
            password
    },{
        onError: (ctx) => {
            window.alert(ctx.error.message);
        },
        onSuccess: () => {
            window.alert("Success") 
        }   
    });
  }

  const { data: session } = authClient.useSession() 

  if(session){
    return(
        <div className="flex flex-col p-4 y-gap-4">
            <p>Logged in as {session.user.name}</p>
            <Button onClick={()=>authClient.signOut()}>
                Sign Out
            </Button>
        </div>  
    )
  }
 
  return(
    <div>
        <div className="p-4 flex flex-col gap-y-4">
            <Input 
                placeholder="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            <Input 
                placeholder="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            <Input 
                placeholder="password" 
                type="password"  
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

            <Button onClick={onSubmit }>
                Create User
            </Button>
        </div>
        <div className="p-4 flex flex-col gap-y-4">
        <Input 
            placeholder="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
        <Input
            placeholder="password" 
            type="password"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>

        <Button onClick={onSignin }>
            Login
        </Button>
    </div>
    </div>


  )
} 
  