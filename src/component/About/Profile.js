import React from 'react';
import Styles from './about.module.css';


const Images = () => {

    const jsonData = require("./executive.json");

    return (
        <div className="row my-5">
            {jsonData.data.map((ele) => (<div className="col-12 col-lg-4 text-center my-4">
                <img
                    src={ele["avatar_url"]}
                    className={`${Styles.images} 
                                rounded-circle my-2`}
                />
                <h5>{ele["name"]}</h5>
                <p>{ele["position"]}</p>
            </div>
            ))}
        </div>

    )
}


export default Images;