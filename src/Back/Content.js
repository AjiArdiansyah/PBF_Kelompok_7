import React from "react";
import {useParams} from 'react-router-dom';
const Content = () => {

    const {isi} = useParams();
    return (
        <div>
            <h1>content</h1>

        </div>
    );
}

export default Content;