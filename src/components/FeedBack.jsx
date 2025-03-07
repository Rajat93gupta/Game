import React from 'react'
import { quotes } from '../assets'

const FeedBackCard = ({content,name,title,img}) =>(
  <div className=' flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 feedback-card'>
    <img src={quotes} alt="feed" className="w-[42px] h-[27px] object-contain"/>
    <p className='font-poppins text-[18px] leading-[32px] text-white font-normal my-10'>{content}</p>
    <div className='flex flex-row'>
      <img src={img} alt='imgname' className='w-[48px] h-[48px] rounded-full'/>
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins text-[20px] leading-[32px] text-white font-semibold'>{name}</h4>
        <p className='font-poppins text-[16px] leading-[24px] text-dimWhite font-normal'>{title}</p>
      </div>

    </div>

  </div>
)
export default FeedBackCard
