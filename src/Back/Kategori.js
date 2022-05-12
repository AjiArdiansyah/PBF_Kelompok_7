import React, {useState, useEffect } from "react";
import {link} from '../Axios/link';

const Kategori =() => {
    const [isi,setIsi] = useState([])

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
         <h2>Data Kategori</h2> 
          <table className="table">
                <tr>
                    <th>Kategori</th>
                    <th>Keterangan</th>
                </tr>
                {
                    isi.map( (val,index)=>(
                        <tr key={index}>
                            <td>{val.kategori}</td>
                            <td>{val.keterangan}</td>
                        </tr>
                    ))
                }            
                
            </table>
        </div>
    );
}

export default Kategori;