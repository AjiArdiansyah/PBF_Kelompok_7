import React from 'react';

const Pelanggan = (props) => {
    return(
        <div className="Pelanggan">
            <div className="gambar-Pelanggan">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Detail"/>
            </div>
            <div className="konten-Pelanggan">
                <div className="nama-Pelanggan">{props.nama}</div>
                <p className="idPelanggan-Pelanggan">{props.idPelanggan}</p>
                <p className="alamat-Pelanggan">{props.alamat}</p>
                <p className="hp-Pelanggan">{props.hp}</p>
              
        
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusDetail(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Pelanggan;