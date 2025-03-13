import React from 'react'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <>
            <Nav className="justify-content-end" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/updates">Updates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Navbar