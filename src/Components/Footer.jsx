import React, { useState } from 'react'
import { CiNoWaitingSign } from "react-icons/ci";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: " " });


const Footer = () => {
    const [loading , setLoading]=useState(false)
    const [userInput,setUserInput]=useState('')
    const [chatHistory , setChatHistory]= useState([])

    

    const userMessage = userInput;

    // messageToBot

    const messageToBot = async(e)=>{
    e.preventDefault();
    if(userMessage==='') return ; 
    const model = ai.models.generateContent({model:'gemini-2.5-flash',contents: userMessage})
    const response = await model;

  console.log(response.text)
  }



  return (
    <div>
    <form >
    {/* chat     */}
    {/* //api key
    AIzaSyCI4BP1lH5Jmf7cJr9K3ugjq5o9c_l6P8A */}

  
<div className="fixed bottom-3 left-0 right-0 flex justify-center px-3">
  <div className="flex w-full max-w-md space-x-2">
    <input
    onChange={(e)=>setUserInput(e.target.value)}
    disabled={loading}
      type="text"
      className="flex-1 bg-gray-600 px-3 py-2 rounded text-white"
      placeholder="Type a message..."
    />
    <button  onClick={messageToBot} disabled={loading} className="bg-cyan-700 rounded px-4 py-2 text-gray-100">
        {!loading ? (<div>Send</div>):(<div><CiNoWaitingSign className='text-white'/></div>)}
      
    </button>
    
  </div>
 
</div>
 </form>
  </div>

  )
}

export default Footer