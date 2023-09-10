import React,{useState} from 'react'
import Header from './Header'

const Delete = () => {
    const [newDelete,setnewDelete] = useState(
        {
            busNumber:""
        }
    )
    const readDelete =(event)=>{
        setnewDelete({...newDelete,[event.target.name]:event.target.value})

    }
    const displayDelete =() =>{
        console.log(newDelete)
    }
    return (
        <div>
<Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <label htmlFor="" className="form_label">Bus Number</label>
                                <input type="text" name="busNumber" value={newDelete.busNumber} className="form-control" onChange={readDelete} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <button onClick={displayDelete} className="btn btn-danger">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Delete