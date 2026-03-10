import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-3'>
                    <h1>Largest Stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by tading and investing in:</p>
                      <div className='row mt-5'>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                        <li>
                            <p>Stocks and IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. securities</p>
                        </li>
                    </ul>
                        </div>
                      </div>
                      <img src='media/images/pressLogos.png' className='mt-2' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;