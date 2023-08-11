import React from 'react'
import './Responsive1.css';
function Responsive1() {
  return (
    
        <div className="container-fluid">
                <br></br><br></br>
      <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-10">
        <div className="card-body mt-5">
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Title of Top services"
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Category of top services"
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control fw-bold  "
              placeholder="Price of services S" style={{height:'4rem'}}
            />
          </div>
          <br></br>
          <div className="form-group display-flex">
           
            <input type="text" 
              className="form-control    fw-bold   "
              placeholder="Description of Service 
              input type
               "
             
               style={{height:'5rem',}}
               
            />
            
           
          </div>
          <br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control    "
              placeholder="Offer on Product" style={{height:'5rem'}}
            />
          </div>
          <br></br>
         
          <div className="form-control pt-3">
          <div class="input-group mb-3 "> 
          <button class="form-control" placeholder="choose file" aria-label="">Choose file</button>
          <button class="form-control" placeholder="Upload image" aria-label="">Upload images of Services</button>
 
  
</div>
           
          </div>
          <br></br>
          <button id="btn1" className="btn btn-warning " >
            Send
          </button>
          <button  id="btn"className="btn btn-warning " >
            Discart
          </button>
          

        </div>
</div>
    </div>
      </div>
    </div>
    
  )
}

export default Responsive1