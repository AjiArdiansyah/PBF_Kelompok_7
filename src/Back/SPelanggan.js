import React, {Component} from 'react';
import './SMenu.css';
import menu from '../../Front/menu';

class SPelanggan extends Back{
    state = {
        ListPelanggan: [],
        insertPelanggan: {
            idPelanggan: 1,
            nama: "",
            alamat: "",
            hp: ""
            
        },
    };

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3009/Pelanggan')
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

    handleHapusPelanggan = (data) => {
        fetch(`http://localhost:3009/Pelanggan/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahPelanggan = (event) => {
                let formInsertPelanggan = {...this.state.insertPelanggan};
                let timeStamp = new Date().getTime();
                formInsertPelanggan['idPelanggan'] = timeStamp;
                formInsertPelanggan[event.target.name] = event.target.value;
                this.setState({
                    insertPelanggan: formInsertPelanggan
                });
            }

            handleTombolSimpan = () => {
                fetch('http://localhost:3009/Pelanggan', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.insertPelanggan)
                })
                    .then((Response) => {
                        this.ambilDataDariServerAPI();
                });
            }

    render(){
        return(
            <div className="post-menu">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="idPelanggan" className="col-sm-2 col-form-label">idPelanggan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idPelanggan" id="idPelanggan" onChange={this.handleTambahPelanggan}/>
                        </div>
                    </div>

                <div className="form-group row">
                    <label htmlFor="nama" className="col-sm-2 col-form-label">nama</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="nama" name="nama" onChange={this.handleTambahPelanggan}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="alamat" className="col-sm-2 col-form-label">alamat</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="alamat" name="nama" onChange={this.handleTambahPelanggan}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="hp" name="hp" onChange={this.handleTambahPelanggan}></input>
                    </div>
                </div>

               
                
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Makanan</h2>
                {
                    this.state.ListPelanggan.map(Pelanggan=> {
                        return <Pelanggan 
                        key={Pelanggan.idPelanggan} 
                        nama={Pelanggan.nama}
                        alamat={Pelanggan.alamat}
                        hp={Pelanggan.hp}
                        
                        hapusPelanggan={this.handleHapusPelanggan}/>
                    })
                }
            
            </div>
            
        )
    }
}

export default SPelanggan;