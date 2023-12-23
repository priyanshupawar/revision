import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { textHandler } from '../redux/action/actionCreater'

function Filter() {
   let [text,setText]= useState('')
  let dispatch= useDispatch()
   function searchHandler()
   {
     dispatch(textHandler(text))
   }
   useEffect(()=>{
    dispatch(textHandler(text))
   },[text])
  return (
   <>
   <div>
   <input type='text' placeholder='serach....' onChange={(e)=>{
    setText(e.target.value)
   }}/>
   <button className='btn btn-primary' onClick={searchHandler}>search</button>
   </div>
 
   <br/>
   <hr/>
   </>
  )
}

export default Filter