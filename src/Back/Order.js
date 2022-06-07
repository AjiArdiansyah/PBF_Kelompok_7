import React, { useState } from "react";
import useGet from "../Hook/useGet";
import { useForm } from 'react-hook-form';


const Order = () => {

    let today = new Date().toISOString().slice(0,10);
    

    const [awal, setawal] = useState('2022-05-21');
    const [akhir, setAkhir] = useState(today);

    const { register, handleSubmit } = useForm();

    const [isi] = useGet(`/order/${awal}/${akhir}`);

    function cari(data) {
        setawal(data.tawal);
        setAkhir(data.takhir);
        
    }

    let no = 1;

    return (
        <div>
            <div className="row">
                <h2>Data Order</h2>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit(cari)}>
                    <div className="mb-3">
                        <label htmlFor="tawal" className="form-label">
                            Tanggal Awal
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="tawal"
                            ref={register}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="takhir" className="form-label">
                            Tanggal Akhir
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="takhir"
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
            <div className="row">
                <div>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Pelanggan</th>
                                <th>Tgl Order</th>
                                <th>Total</th>
                                <th>Bayar</th>
                                <th>Kembali</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isi.map((val, index) => (
                                    <tr key={index}>
                                        <td>{no++}</td>
                                        <td>{val.pelanggan}</td>
                                        <td>{val.tglorder}</td>
                                        <td>{val.total}</td>
                                        <td>{val.bayar}</td>
                                        <td>{val.kembali}</td>
                                        <td>{
                                            val.status === 0 ? <button className="btn btn-danger">Belum Bayar</button> : <p>Lunas</p>
                                        }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;