import React, { useEffect } from "react";
import client from "./client"

function Header() {

    useEffect(() => {
        client.getEntries({
            content_type: "header"
        })
        .then((header) => console.log(header))
    },[])

    return(
        <>
        <h3>this is the header</h3>
        </>
    )

}

export default Header;