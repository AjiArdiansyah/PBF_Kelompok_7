import useGet from "../Hook/useGet";
import useDelete from "../Hook/useDelete";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { link } from '../Axios/link';

const Menu = () => {

    const [isi] = useGet('/menu');
    const { hapus, pesan, setPesan } = useDelete('/menu/');
    const [kategori, setKategori] = useState([]);

    const { register, handleSubmit, reset, errors, setValue } = useForm();

    useEffect(() => {

        let ambil = true;
        async function fetchData() {
            const res = await link.get('/kategori');
            if (ambil) {
                setKategori(res.data);
            }
        }
        fetchData()
        return () => {
            ambil = false;
        };
    }, [kategori]);

    function simpan(data) {
        const formData = new FormData();
        formData.append('idkategori', data.idkategori);
        formData.append('menu', data.menu);
        formData.append('harga', data.harga);
        formData.append('gambar', data.gambar[0]);

        link.post('/menu', formData).then(res => setPesan(res.data.pesan));
        reset();

    }

    let no = 1;


    return (
        <div>
            <div className="row">
                <h2>Data menu</h2>
            </div>
            <div className="row">
                <div>
                    <p>{pesan}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <form onSubmit={handleSubmit(simpan)}>

                        <div className="mb-3">
                            <label htmlFor="kategori" className="form-label">
                                Kategori
                            </label>
                            <select name="idkategori" ref={register} className="form-control">
                                {
                                    kategori.map((val, index) => (
                                        <option key={index} value={val.idkategori}>{val.kategori}</option>
                                    ))
                                }

                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="menu" className="form-label">
                                Menu
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="menu"
                                placeholder="kategori"
                                ref={register({ required: true })}
                            />
                            {errors.kategori && "Kategori harus di isi !"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="harga" className="form-label">
                                Harga
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="harga"
                                placeholder="harga"
                                ref={register}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gambar" className="form-label">
                                Gambar
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                name="gambar"

                                ref={register}
                            />
                        </div>
                        <div className="mb-3">

                            <input
                                type="submit"
                                className="btn btn-primary"
                                name="submit"
                            />
                        </div>
                    </form>
                </div>

            </div>


            <div className="row">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Menu</th>
                            <th>Gambar</th>
                            <th>Harga</th>
                            <th>Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isi.map((val, index) => (
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.kategori}</td>
                                <td>{val.menu}</td>
                                <td><img src={val.gambar} height="100" width="150" alt="" /></td>
                                <td>{val.harga}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={
                                            () => hapus(val.idmenu)
                                        }>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Menu;