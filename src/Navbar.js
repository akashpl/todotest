import React from 'react'

export default function Navbar(props) {
    return (
        <>
        <div>
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" >Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className='form-check-input' onClick={props.togglehandle} type='checkbox' id='flexswithchCheckDefault'></input>
      <label className='form-check-lable' htmlFor="flexSwithchCheckDefault">enable

      </label>
  </div>
  
</nav>

<div>
</div>
</div>

</>
    

     






   )




}



