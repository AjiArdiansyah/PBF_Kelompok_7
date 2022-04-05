import React from 'react';

const menu = (props) => {
    return(
        <div className="menu">
            <div className="gambar-menu">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Menu"/>
            </div>
            <div className="konten-Menu">
                <div className="nama-makanan">{props.makanan}</div>
                <p className="id-makanan">{props.id}</p>
                <p className="harga-makanan">{props.harga}</p>
                <p className="stok-makanan">{props.stok}</p>
        
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMenu(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default menu;