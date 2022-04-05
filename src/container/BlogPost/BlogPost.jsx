import React, {Component} from "react";
import Post from "../../component/BlogPost/Post";
import './BlogPost.css';

class BlogPost extends Component{
    state = {                                                                                                                                                   // Komponen state dari React untuk Statefull Component
        listArtikel:[],                                                                                                                                          // Variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    // componentDidMount() 
    ambilDataDariServerAPI = () => {                                                                                                                                       // Komponen untuk mencetak ketika component telah di-mount-ing, maka panggil API
        // fetch('https://jsonplaceholder.typicode.com/posts')                                                                                                  // Alamat URL API yang ingin kita ambil datanya
        // fetch('http://localhost:3001/posts')                     
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')    
            .then(response => response.json())                                                                                                                  // Ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {                                                                                                                                       // KOmponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()                                                                                                                           // Ambil data dari server API Lokal
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`,{method: 'DELETE'})                                                                                         // Alamar URL API yang ingin kita HAPUS datanya
            .then(res => {                                                                                                                                      // Ketika proses hapus berhasil, maka ambil data dari server API lokal
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then( (Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return(
            // <div className="post-artikel">
            //     <h2>Daftar Artikel</h2>
            //     {
            //         this.state.listArtikel.map(artikel => {                                                                                                     // Looping dan masukan untuk setiap data yang ada di listArtikel ke variabel artikel
            //             return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>  // Mapping data json dari API sesuai dengan kategorinya
            //         })
            //     }
            //     {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
            // </div>
            <div className="post-artikel">
                <div className="from pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-from-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="body" id="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                     this.state.listArtikel.map(artikel => {                                                                                                     // Looping dan masukan untuk setiap data yang ada di listArtikel ke variabel artikel
                         return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>  // Mapping data json dari API sesuai dengan kategorinya
                     })
                }
            </div>
        )
    }
}
export default BlogPost;