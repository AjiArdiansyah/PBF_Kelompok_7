import React, {Component} from 'react';
import './SMenu.css';
import menu from '../../Front/menu';

class SMenu extends Front{
    state = {
        ListMenu: [],
        insertMenu: {
            idMakanan: "1",
            makanan: "",
            harga: "",
            stok:""
        },
    };

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3003/Menu')
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

    handleHapusMenu = (data) => {
        fetch(`http://localhost:3003/Menu/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMenu = (event) => {
                let formInsertMenu = {...this.state.insertMenu};
                let timeStamp = new Date().getTime();
                formInsertMenu['idMakanan'] = timeStamp;
                formInsertMenu[event.target.name] = event.target.value;
                this.setState({
                    insertMenu: formInsertMenu
                });
            }

            handleTombolSimpan = () => {
                fetch('http://localhost:3003/Menu', {
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
            <div className="post-menu">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="idMakanan" className="col-sm-2 col-form-label">idMakanan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idMakanan" id="idMakanan" onChange={this.handleTambahMenu}/>
                        </div>
                    </div>

                <div className="form-group row">
                    <label htmlFor="makanan" className="col-sm-2 col-form-label">makanan</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="makanan" name="makanan" onChange={this.handleTambahMenu}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="harga" className="col-sm-2 col-form-label">harga</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="harga" name="harga" onChange={this.handleTambahMenu}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="stok" className="col-sm-2 col-form-label">stok</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="stok" name="stok" onChange={this.handleTambahMenu}></input>
                    </div>
                </div>
                
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Makanan</h2>
                {
                    this.state.ListMenu.map(menu=> {
                        return <menu 
                        key={menu.idMakanan} 
                        makanan={menu.nama}
                        harga={menu.harga}
                        stok={menu.stok}
                        hapusMenu={this.handleHapusMenu}/>
                    })
                }
            
            </div>
            
        )
    }
}

export default SMenu;