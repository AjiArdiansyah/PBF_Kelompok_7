import React from "react";
import useGet from "../Hook/useGet";

const User = () => {

    const [isi] = useGet('/user/');

    let no = 1;

    return (
        <div>
            <div className="row">
                <div>
                    <h2>Menu User</h2>
                </div>
            </div>
            <div className="row">
                <div>
                    <input className="btn btn-primary" type="submit" value="Tambah"/>
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="table mt-4">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>User</th>
                            <th>Level</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                    
                    <tbody>
                        {
                            isi.map( (val,index)=> (
                                <tr key={index}>
                                    <td>{no++}</td>
                                    <td>{val.email}</td>
                                    <td>{val.level}</td>
                                    <td>{
                                    val.status === 1 ? <input className="btn btn-success" type="submit" value="AKTIF"/> : <input className="btn btn-danger" type="submit" value="BANNED"/>
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

export default User;