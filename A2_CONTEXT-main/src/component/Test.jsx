import React, { useEffect, useState } from 'react'

function Test() {
    console.log('........test.................')
      let [inc,setInc]=useState(1) 
      let [dec,setDec]=useState(10)
      let x;
      function incHandler()
      {
        setInc(inc+1)
        
      }
      function decHandler()
      {
          setDec(dec-1)
      }
      useEffect(()=>{
        console.log('hello  i am useEffect')
       x= setTimeout(() => {
            console.log('hello i am timer') 
      }, 4000);
        return ()=>{
              console.log('cleanup')
              clearTimeout(x)
        }
          
      },[inc])
  return (
    <div>
          inc:{inc}
          dec:{dec}
        <br/>
        <button onClick={incHandler}>inc</button>
        <button onClick={decHandler}>dec</button>
    </div>
  )
}

export default Test