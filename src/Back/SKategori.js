import React, {Component} from 'react';
import './SMenu.css';
import Back from '../../Front/menu';

class SKategori extends Back{
    state = {
        ListKategori: [],
        insertKategori: {
            idKategori: "1",
            keterangan: ""
            
        },
    };

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3006/Kategori')
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

    handleHapusKategori = (data) => {
        fetch(`http://localhost:3006/Kategori/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahKategori = (event) => {
                let formInsertKategori = {...this.state.insertKategori};
                let timeStamp = new Date().getTime();
                formInsertKategori['idKategori'] = timeStamp;
                formInsertKategori[event.target.name] = event.target.value;
                this.setState({
                    insertKategori: formInsertKategori
                });
            }

            handleTombolSimpan = () => {
                fetch('http://localhost:3006/Kategori', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.insertKategori)
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
                        <label htmlFor="idKategori" className="col-sm-2 col-form-label">idKategori</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idKategori" id="idKategori" onChange={this.handleTambahKategori}/>
                        </div>
                    </div>

                <div className="form-group row">
                    <label htmlFor="keterangan" className="col-sm-2 col-form-label">keterangan</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="keterangan" name="keterangan" onChange={this.handleTambahKategori}></input>
                    </div>
                </div>

               
                
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Makanan</h2>
                {
                    this.state.ListKategori.map(Kategori=> {
                        return <KategoriPost 
                        key={Kategori.id} 
                        keterangan={Kategori.keterangan}
                        
                        hapusMenu={this.handleHapusKategori}/>
                    })
                }
            
            </div>
            
        )
    }
}

export default SKategori;