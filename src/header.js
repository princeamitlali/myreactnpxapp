import React from 'react'

import './Style.css'

//functional component

function Header(){
    return <div>
        <img src="{logo}" alt="logo"/>
        <h2>Prince Amit</h2>
    </div>
}

//         need to export so that can be imported in index

export default Header;