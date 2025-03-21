import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/app/assets/assets/assets';

const PromptBox = ({ isLoading, setIsLoading }) => {
  const [prompt, setPrompt] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      // Add your submission logic here
      setIsLoading(true);
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-5 rounded-3xl mt-6 transition-all mx-auto shadow-lg`}
    >
      <textarea
        className="outline-none w-full resize-none overflow-hidden break-words bg-transparent text-white placeholder-gray-300 text-base px-1"
        rows={2}
        placeholder='Message DeepSeek'
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      
      <div className='flex items-center justify-between text-sm mt-3 text-white'>
        <div className='flex items-center gap-3'>
          <button 
            type="button"
            className='flex items-center gap-2 text-xs border border-gray-300/40 px-3 py-1.5 rounded-full cursor-pointer hover:border-blue-400 hover:bg-blue-500/10 transition-all group'
          >
            <Image className='h-5 w-5' src={assets.deepthink_icon} alt='' />
            <span className="text-white group-hover:text-blue-400">DeepThink (R1)</span>
          </button>
          
          <button 
            type="button"
            className='flex items-center gap-2 text-xs border border-gray-300/40 px-3 py-1.5 rounded-full cursor-pointer hover:border-blue-400 hover:bg-blue-500/10 transition-all group'
          >
            <Image className='h-5 w-5' src={assets.search_icon} alt='' />
            <span className="text-white group-hover:text-blue-400">Search</span>
          </button>
        </div>
        
        <div className='flex items-center gap-3'>
          <button 
            type="button"
            className='p-1.5 rounded-full hover:bg-gray-500/20 transition'
          >
            <Image className='w-4 h-4' src={assets.pin_icon} alt='Pin' />
          </button>
          
          <button 
            type="submit"
            disabled={!prompt || isLoading}
            className={`${prompt ? "bg-primary hover:bg-primary/90" : "bg-[#71717a]"} rounded-full p-2.5 cursor-pointer transition-colors`}
          >
            <Image 
              className='w-4 h-4 aspect-square' 
              src={prompt && !isLoading ? assets.arrow_icon : assets.arrow_icon_dull} 
              alt='Send' 
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;