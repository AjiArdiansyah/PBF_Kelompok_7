import React from 'react';

const Kategori = (props) => {
    return(
        <div className="Kategori">
            <div className="gambar-Kategori">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Kategori"/>
            </div>
            <div className="konten-Kategori">
                <div className="keterangan-Kategori">{props.keterangan}</div>
                <p className="idKategori-Kategori">{props.idKategori}</p>
                
        
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusKategori(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Kategori;