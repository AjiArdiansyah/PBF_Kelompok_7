import React from "react";
import useGet from "../Hook/useGet";

const Pelanggan =() => {

    const [isi] = useGet('/pelanggan');


    return (
        <div>
            <div className="row">
                <h2>Data menu</h2>
            </div>
            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pelanggan</th>
                            <th>Alamat</th>
                            <th>Telp</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {isi.map( (val,index)=>(
                            <tr>
                                <td>No</td>
                                <td>{val.pelanggan}</td>
                                <td>{val.alamat}</td>
                                <td>{val.telp}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Pelanggan;