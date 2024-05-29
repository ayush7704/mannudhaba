import React from 'react'

function sidenav(props) {
    console.log(props.links)
    let navitems = props.links
    // console.log(Array.isArray(navitems))
    return (
        <nav className='grid'>
            {navitems.map((item,index) => (
                <a href="#" key={index}>{item}</a>
            ))}
        </nav>
    )
}

export default sidenav