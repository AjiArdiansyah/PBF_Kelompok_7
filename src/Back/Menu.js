import useGet from "../Hook/useGet";

const Menu =() => {

    const [isi] = useGet('/menu');

    let no = 1;


    return (
        <div>
            <div className="row">
                <h2>Data menu</h2>
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
                        </tr>
                    </thead>
                    <tbody>
                        {isi.map( (val,index)=>(
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.kategori}</td>
                                <td>{val.menu}</td>
                                <td><img src={val.gambar} height="100" width="150" alt=""/></td>
                                <td>{val.harga}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Menu;