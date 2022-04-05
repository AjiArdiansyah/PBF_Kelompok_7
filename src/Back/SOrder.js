import React, {Component} from 'react';
import './SMenu.css';
import menu from '../../Front/menu';

class SOrder extends Back{
    state = {
        ListOrder: [],
        insertOrder: {
            idOrder: 1,
            tglOrder: "",
            totalBayar: "",
            status: ""
        },
    };

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3004/Order')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                ListMenu: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusOrder = (data) => {
        fetch(`http://localhost:3004/Order/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahOrder = (event) => {
                let formInsertOrder = {...this.state.insertOrder};
                let timeStamp = new Date().getTime();
                formInsertMenu['idOrder'] = timeStamp;
                formInsertMenu[event.target.name] = event.target.value;
                this.setState({
                    insertMenu: formInsertMenu
                });
            }

            handleTombolSimpan = () => {
                fetch('http://localhost:3004/Order', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.insertMenu)
                })
                    .then((Response) => {
                        this.ambilDataDariServerAPI();
                });
            }

    render(){
        return(
            <div className="post-order">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="orderMakanan" className="col-sm-2 col-form-label">idFaktur</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idFaktur" id="idFaktur" onChange={this.handleTambahorder}/>
                        </div>
                    </div>

                <div className="form-group row">
                    <label htmlFor="tglOrder" className="col-sm-2 col-form-label">tanggal order</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="tglOrder" name="tglOrder" onChange={this.handleTambahorder}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="totalBayar" className="col-sm-2 col-form-label">total bayar</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="totalBayar" name="totalBayar" onChange={this.handleTambahorder}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <textarea className="form-control"  id="status" name="status" onChange={this.handleTambahorder}></textarea>
                    </div>
                </div>
                
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Order</h2>
                {
                    this.state.ListOrder.map(Order=> {
                        return <OrderPost 
                        key={Order.idOrder} 
                        tglOrder={Order.tglOrder}
                        totalBayar={Order.totalBayar}
                        status={Order.status} idOrder={Order.idOrder}
                        hapusMenu={this.handleHapusorder}/>
                    })
                }
            
            </div>
            
        )
    }
}

export default SOrder;