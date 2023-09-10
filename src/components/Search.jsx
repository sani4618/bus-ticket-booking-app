import React,{useState} from 'react'
import Header from './Header'

const Search = () => {
    const [newSearch,setNewSearch]= useState(
        {
            busNumber:""
        }
    )
    const readSearch =(event)=>{
        setNewSearch({...newSearch,[event.target.name]:event.target.value})
    }
    const displaySearch =()=> {
        console.log(newSearch)

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
                                <input type="text" name="busNumber" value={newSearch.busNumber} className="form-control" onChange={readSearch}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                <button onClick={displaySearch} className="btn btn-danger">Search</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search