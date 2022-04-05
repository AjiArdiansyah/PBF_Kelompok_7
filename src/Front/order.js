import React from 'react';

const Order = (props) => {
    return(
        <div className="Order">
            <div className="gambar-Order">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Order"/>
            </div>
            <div className="konten-Order">
                <div className="totalBayar-Order">{props.tglOrder}</div>
                <p className="idFaktur-Order">{props.idFaktur}</p>
                <p className="totalBayar-Order">{props.totalBayar}</p>
                <p className="status-Order">{props.status}</p>
                
        
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusOrder(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Order;