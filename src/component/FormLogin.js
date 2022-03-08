import React from "react";

const FormLogin = () => {
    return(
      <div style={{ marginTop: "100px"}}>
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-6">
      <h1 className="text-center p-2">Form Login</h1>
      <div className="card p-4">
      <div className="card-body">
      <h3 className="card-title text-center">Tugas Pertemuan ketiga</h3>
      <div className='form-group p-2'>
      <label>Username</label>
      <input placeholder=" Masukkan username" className="form-control"></input>
      </div>
      <div className='form-group p-2'>
      <label>Password</label>
      <input type="password" placeholder="Masukkan password" className="form-control"></input>
      </div>
      <div className='d-grip gap-2 p-2'>
      <div class='form-check'>
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck">
      <label class="form-check-label" for="invalidCheck">
      Remember Me
      </label>
      <div class="invalid-feedback">
      you must agree before submitting
      </div>
      </input></div>
      <div className='d-grip gap-2 p-2'>
      <a href="#" class="btn btn-succes">Login</a>
      </div>
      <div className='d-grip gap-2 p-2'>
      <a href="#" class="btn btn-danger">Cancel</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>  
    )
}

export default FormLogin;