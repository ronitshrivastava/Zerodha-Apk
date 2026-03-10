import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <img src={imageURL}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;