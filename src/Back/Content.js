import React from "react";
import {useParams} from 'react-router-dom';
import Kategori from './SKategori';
import SMenu from "./SMenu";
import SOrder from "./SOrder";
import SPelanggan from "./SPelanggan";
import SDetail from "./SDetail";


const Content = () => {

    const {isi} = useParams();

    // let tampil;

    // if (isi==='kategori')[
    //     tampil = <Kategori></Kategori>
    // ]

    // if (isi==='menu')[
    //     tampil = <SMenu></SMenu>
    // ]

    // if (isi==='order')[
    //     tampil = <SOrder></SOrder>
    // ]

    // if (isi==='pelanggan')[
    //     tampil = <SPelanggan></SPelanggan>
    // ]

    // if (isi==='detail')[
    //     tampil = <SDetail></SDetail>
    // ]




    return (
        <div>
            <h1>{isi}</h1>

            

            




        </div>
    );
}

export default Content;