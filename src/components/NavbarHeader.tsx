import { Navbar, Nav, NavLink, NavbarBrand, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillShopping } from 'react-icons/ai'

import { useShoppingCart } from '../context/ShoppingCartContext'
import logo from '../assets/logo_white.png'
import './NavbarHeader.scss'

export const NavbarHeader = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky='top' className='p-0'>
            <Container>
                <Navbar.Toggle />
                <NavbarBrand>
                    <Link to='/'>
                        <img className='header-logo' src={logo} />
                    </Link>
                </NavbarBrand>
                <Navbar.Collapse>
                    <Nav className='header-links'>
                        <NavLink as={Link} className='header-nav nav-link px-2 py-3' to='/'><span className='mx-3'>Home</span></NavLink>
                        <NavLink as={Link} className='header-nav nav-link px-2 py-3' to='/store'><span className='mx-3'>Store</span></NavLink>
                        <NavLink as={Link} className='header-nav nav-link px-2 py-3' to='/about'><span className='mx-3'>About</span></NavLink>
                    </Nav>
                </Navbar.Collapse>
                {(cartQuantity > 0) && <Button onClick={openCart} className='header-button my-2 rounded-circle d-flex align-items-center' variant='outline-light'>
                    <AiFillShopping className='header-button' />
                    <div className='header-button-counter rounded-circle bg-danger d-flex justify-content-center align-items-center'>
                        {cartQuantity}
                    </div>
                </Button>}
            </Container>
        </Navbar>
    )
}