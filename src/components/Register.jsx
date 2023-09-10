import React,{useState} from 'react'
import Header from './Header'

const Register = () => {
    const [newRegister,SetNewRegister] = useState(
        {
            firstname:"",
            lastname:"",
            address:"",
            ADPcard:"",
            phNumber:"",
            gender:"",
            placefrom:"",
            placefor:"",
            email:""

        }   
    )
    const readRegister =(event)=>{
        SetNewRegister({...newRegister,[event.target.name]:event.target.value})
    }
    const displayRegister =()=>{
        console.log(newRegister)
    }
  return (
    <div>
<Header/>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="container">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" name="firstname" value={newRegister.firstname} className="form-control" onChange={readRegister} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" name="lastname" value={newRegister.lastname} className="form-control" onChange={readRegister} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" name="address" value={newRegister.address} className="form-control" onChange={readRegister} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-">Adhar Number/Pan Number/Driving License</label>
                                <input type="text" name="ADPcard" value={newRegister.ADPcard} className="form-control" onChange={readRegister} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" name="phNumber" value={newRegister.phNumber} className="form-control" onChange={readRegister} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">Gender</label>
                                <select  id="" name="gender" value={newRegister.gender} className="form-control" onChange={readRegister}>
                                    <option value="select">Select</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place you travel from</label>
                                <input type="text" name="placefrom" value={newRegister.placefrom} className="form-control" onChange={readRegister} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place you travel for</label>
                                <input type="text" name="placefor" value={newRegister.placefor} className="form-control" onChange={readRegister}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="email" value={newRegister.email} id="" className="form-control" onChange={readRegister}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={displayRegister} className="btn btn-danger">Confirm your seat</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Register