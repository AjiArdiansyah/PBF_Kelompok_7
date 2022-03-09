import React from 'react'

const Formlogin = () => {
    return (
        <div style={{ marginTop: "150px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h3 class="text-center p-3">Form Login</h3>
                        <div className="card p-5">
                            <div className="card-body">
                                <h5 class="card-title text-center">Tugas Pertemuan Ketiga</h5>
                                {/* Kolom */}
                                <div className='form-group p-2'>                                    
                                    <label>Username</label>
                                    <input placeholder=" Masukkan Username" className="form-control"></input>
                                </div>

                                <div className='form-group p-2'>
                                    <label>Password</label>
                                    <input type="password" placeholder="Masukkan Password Anda" className="form-control"></input>
                                </div>

                                <div className='d-grid gap-2 p-2'>
                                    <div class="form-check-center text-center">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                        <label class="form-check-label" for="invalidCheck">
                                            Remember Me
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                {/* button */}
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#" class="btn btn-success">Login</a>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#r" class="btn btn-danger">Cancel</a>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#r" class="row justify-content-center">Belum Punya Akun?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formlogin;