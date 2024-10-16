

import React, { useState } from 'react';
import axios from 'axios';
import {motion} from "framer-motion"


const ChatGPTComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    console.log("Sending message...");
    const apiKey = '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'; // Hugging Face API key

    try {
      const result = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2', // Hugging Face inference endpoint
        { inputs: input },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log("API Response:", result.data);
      setResponse(result.data[0].generated_text);
    } catch (error) {
      console.error("Error with Hugging Face API:", error);
    }
  };

  return (
    <div className="mb-8 flex flex-col lg:justify-center px-3">
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:0.5}}
      className="text-white mb-4">Chatbot:</motion.h1>
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:1}}
    
      className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            console.log("User input:", e.target.value);
          }}
          placeholder="Ask ChatGPT something"
          className="flex-grow p-4 rounded-l-md border border-gray-300"
        />
        <button
          className="bg-black text-blue-500 rounded-r-md px-4"
          onClick={() => {
            console.log("Button clicked!");
            sendMessage();
          }}
        >
          Send
        </button>
      </motion.div>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x: 100}}
       transition={{duration:1}}
      >
      <p className='text-white'>Response:</ p>
      <textarea
        readOnly
        value={response}
        className="w-full p-2 rounded border border-gray-300"
        rows="4"

      />
      </motion.div>
    </div>
  );
};

export default ChatGPTComponent;
