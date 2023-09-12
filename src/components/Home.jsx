import React,{useState} from 'react'
import Header from './Header'

const Home = () => {
    const [newLogin,setNewLogin]=useState(
        {
            username:"",
            password:""
        }
    )
    const readLogin = (event)=>
    {
        setNewLogin({...newLogin,[event.target.name]:event.target.value})
    }
    const displaylogin =()=>{
        console.log(newLogin)
    }
  return (
    <div>
        <Header/>

<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User name</label>
                            <input type="text" name="username" value={newLogin.username} className="form-control" onChange={readLogin} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" value={newLogin.password} id="" className="form-control" onChange={readLogin}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={displaylogin} className="btn btn-success">Login</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>
  )
}

export default Home