import React from "react"
import Nav from '../layout/Nav';

export default function Layout({ children }: any) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
