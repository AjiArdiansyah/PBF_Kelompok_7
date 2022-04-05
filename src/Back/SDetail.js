import React, {Component} from 'react';
import './SMenu.css';
import Detail from '../../Front/Detail';

class SDetail extends Back{
    state = {
        ListDetail: [],
        insertDetail: {
            idFaktur: 1,
            tglOrder: "",
            Menu:"",
            Harga:"",
            Total:""
            
        },
    };

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3005/Detail')
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

    handleHapusDetail = (data) => {
        fetch(`http://localhost:3005/Detail/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahDetail = (event) => {
                let formInsertDetail = {...this.state.insertDetail};
                let timeStamp = new Date().getTime();
                formInsertDetail['idFaktur'] = timeStamp;
                formInsertDetail[event.target.name] = event.target.value;
                this.setState({
                    insertMenu: formInsertDetail
                });
            }

            handleTombolSimpan = () => {
                fetch('http://localhost:3005/Detail', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.insertDetail)
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
                        <label htmlFor="idFaktur" className="col-sm-2 col-form-label">idFaktur</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idFaktur" id="idFaktur" onChange={this.handleTambahDetail}/>
                        </div>
                    </div>

                <div className="form-group row">
                    <label htmlFor="tglOrder" className="col-sm-2 col-form-label">tanggal order</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="tglOrder" name="tglOrder" onChange={this.handleTambahorder}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Menu" className="col-sm-2 col-form-label">Menu</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="Menu" name="Menu" onChange={this.handleTambahDetail}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Harga" className="col-sm-2 col-form-label">Harga</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="Harga" name="Harga" onChange={this.handleTambahDetail}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Total" className="col-sm-2 col-form-label">Total</label>
                    <div className="col-sm-10">
                        <textarea className="form-control"  id="Total" name="Total" onChange={this.handleTambahDetail}></textarea>
                    </div>
                </div>
                
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Order Detail</h2>
                {
                    this.state.ListDetail.map(Detail=> {
                        return <Detail 
                        key={Detail.idFaktur} 
                        tglOrder={Detail.tglOrder}
                        totalBayar={Detail.totalBayar}
                        status={Detail.status} idFaktur={Detail.idFaktur}
                        hapusMenu={this.handleHapusDetail}/>
                    })
                }
            
            </div>
            
        )
    }
}

export default SDetail;