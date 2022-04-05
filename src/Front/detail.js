import React from 'react';

const Detail = (props) => {
    return(
        <div className="Detail">
            <div className="gambar-Detail">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Detail"/>
            </div>
            <div className="konten-Detail">
                <div className="tglOrder-Detail">{props.tglOrder}</div>
                <p className="idFaktur-Detail">{props.idFaktur}</p>
                <p className="Menu-Detail">{props.idMenu}</p>
                <p className="harga-Detail">{props.harga}</p>
                <p className="Total-Detail">{props.Total}</p>
        
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusDetail(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Detail;