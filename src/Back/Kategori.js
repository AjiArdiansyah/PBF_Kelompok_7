import React, { useState, useEffect } from "react";
import { link } from '../Axios/link';
import { useForm } from 'react-hook-form';

const Kategori = () => {
    const [isi, setIsi] = useState([])

    const { register, handleSubmit, reset, errors } = useForm();

    function simpan(data) {
        link.post('/kategori',data).then(res=>console.log(res));
        reset();
    }

    useEffect(() => {


        async function fetchData() {
            const request = await link.get('/kategori');
            //console.log(request.data);
            setIsi(request.data);


        }

        fetchData();

    }, []);


    return (
        <div>
            <div className="row">
                <h2>Data Kategori</h2>
            </div>
            <div className="row">
                <div className="col-4">

                    <form onSubmit={handleSubmit(simpan)}>

                        <div className="mb-3">
                            <label htmlFor="kategori" className="form-label">
                                Kategori
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="kategori"
                                placeholder="kategori"
                                ref={register({required:true})} 
                            />
                            {errors.kategori && "Kategori harus di isi !"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="keterangan" className="form-label">
                                Kategori
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="keterangan"
                                placeholder="keterangan"
                                ref={register}
                            />
                        </div>
                        <div className="mb-3">

                            <input
                                type="submit"
                                className="btn btn-primary"
                                name="keterangan"
                            />
                        </div>
                    </form>
                </div>

            </div>

            <div className="row">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            isi.map((val, index) => (
                                <tr key={index}>
                                    <td>{val.kategori}</td>
                                    <td>{val.keterangan}</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>


        </div>
    );
}

export default Kategori;