import React, {Component} from 'react';
import './SMenu.css';
import menu from '../../Front/menu';

class SAdmin extends Back{
    state = {
        ListUser: [],
        insertUser: {
            idUser: 1,
            Nama: "",
            status: ""
        },
    };

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3008/User')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                ListUser: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusUser = (data) => {
        fetch(`http://localhost:3008/User/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahUser = (event) => {
                let formInsertUser = {...this.state.insertUser};
                let timeStamp = new Date().getTime();
                formInsertUser['id'] = timeStamp;
                formInsertUser[event.target.name] = event.target.value;
                this.setState({
                    insertUser: formInsertUser
                });
            }

            handleTombolSimpan = () => {
                fetch('http://localhost:3008/User', {
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
                        <label htmlFor="idUser" className="col-sm-2 col-form-label">IdUser</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idUser" id="idUser" onChange={this.handleTambahUser}/>
                        </div>
                    </div>

             

                <div className="form-group row">
                    <label htmlFor="Nama" className="col-sm-2 col-form-label">Nama</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="Nama" name="Nama" onChange={this.handleTambahUser}></input>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="Status" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="number" id="Status" name="Status" onChange={this.handleTambahUser}></input>
                    </div>
                </div>
                
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Admin</h2>
                {
                    this.state.ListUser.map(User=> {
                        return <MenuPost 
                        key={User.idUser} 
                        Nama={User.Nama}
                        Status={User.Status}
                        hapusMenu={this.handleHapusUser}/>
                    })
                }
            
            </div>
            
        )
    }
}

export default SAdmin;