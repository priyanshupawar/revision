import React, { useEffect } from 'react'
import Filter from './Filter'
import { fetchHandler } from '../redux/action/actionCreater'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchHandler('https://dummyjson.com/products'))
    },[])

     let {loading,data:{products},error}=useSelector((item)=>{
        return item.fetchReducer
     })
  return (
     <>
     <div className="container">
        <div className="row">
           <Filter/>
        </div>
        <div className="row">
             {loading  && <h1>loading....</h1>}
             {!loading && error && <h1>somthing error</h1>}
             {!products && !loading && !error && <h1>wait</h1>}
             {products && products.length>0 && products?.map((item)=>{
                let {id,title,description}=item
                return <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                         <p>id {id}</p>
                         <p>title {title}</p>
                         <p>description {description}</p>
                    </div>
                </div>
            </div>
             })}
        </div>
     </div>
     </>
  )
}

export default Home