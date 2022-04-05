import React from 'react';

const Admin = (props) => {
    return(
        <div className="Admin">
            <div className="gambar-Admin">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Admin"/>
            </div>
            <div className="konten-Admin">
                <div className="tglOrder-Admin">{props.Nama}</div>
                <p className="idUser-Admin">{props.idUser}</p>
                <p className="Status-Admin">{props.Status}</p>
        
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusAdmin(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Admin;