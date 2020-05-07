import React from 'react'

export default function Home() {
    return (
        <div className='row'>
            <div className='col-6'>
                <img src={require("../assets/images/store.jpg")} width={'100%'} alt={'cover'}/>
            </div>
            <div className='col-6'>
                <h1>Welcome To PC-GAMER Store</h1><br/>
                <h5>We provide various pc gamers for our customer, You are searching for the right pc to suit your needs? You are in the right place!</h5>
            </div>
        </div>
    )
}