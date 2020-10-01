import React from 'react';

function Home() {
    const divStyle = {
        fontSize:'30px',
        border:'1px solid lightgrey',
        boxSizing:'border-box',
        textAlign:'center',
        width:'70%',
        lineHeight:'70px',
        textTransform:'capitalize',
        position:'relative',
        left:'15%',
        top:'150px',
        boxShadow:'0px 0px 5px lightgrey',
    }

    return (
        <div style={divStyle}>
            <h1 style={{width:'100%'}}>WELCOME TO SHOE STORE</h1>
            <p>To see best shoes accordingly your choice,<br/>Click to products menu.</p>
        </div>
    );
}

export default Home;