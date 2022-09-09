import React from 'react';
import {Button, Container, Nav, Navbar, Form} from 'react-bootstrap';

import {NavLink} from 'react-router-dom';

import Menu from './data/menu';
import '../../styles/navbar.css';

const Navigation = () => {
return (
<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container fluid>
    <Navbar.Brand className='bg-primary' href="#"><img src='https://artprod.fr/wp-content/uploads/2021/10/Art-Prod.03-2048x683.png' height="35"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
        >
        {/* <Nav className={active ? "nav-menu active" : "nav-menu"}>  */}
            {
            Menu.map((item, index) => {
                    return (
                    <Nav.Link as={NavLink} className={item.cName} key={index} to={item.url}>{item.title}</Nav.Link> //trouver la condition pour mettre la class active
                    // <Nav.Link  key={index}>
                    //     <Link to={item.url} className={item.cName}>
                    //     {item.title}
                    //     </Link>
                    // </Nav.Link>
                    );
                })
            }
        </Nav>
        {/* </Nav> */}
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default Navigation;