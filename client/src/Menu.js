import React,{Component} from 'react';
import HalKeluarga from './keluarga/HalKeluarga';
import FotoKeluarga from './keluarga/FotoKeluarga';
import Login from './keluarga/Login';
import Creator from './keluarga/Creator';
import Home from './keluarga/Home';
import Tambah from './keluarga/InputFotoKeluarga';
import Pendidikan from './keluarga/InputPendidikan';
import HubKeluarga from './keluarga/InputHubunganKeluarga';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { BrowserRouter, Route, Switch} from "react-router-dom";


class Menu extends Component{
	render(){
		return(
		<BrowserRouter>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <LinkContainer to='/'><Navbar.Brand>BIG FAMILY</Navbar.Brand></LinkContainer>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
            <LinkContainer to='/HalKeluarga'><Nav.Link>Halaman Keluarga</Nav.Link></LinkContainer>
            <LinkContainer to='/FotoKeluarga'><Nav.Link>Foto Keluarga</Nav.Link></LinkContainer>
            <NavDropdown title="Olah Data" id="collasible-nav-dropdown" menuVariant="dark">
            <LinkContainer to='/Tambah'><NavDropdown.Item>Data Keluarga</NavDropdown.Item></LinkContainer>
            <LinkContainer to='/Pendidikan'><NavDropdown.Item>Data Pendidikan Keluarga</NavDropdown.Item></LinkContainer>
            <LinkContainer to='/HubKeluarga'><NavDropdown.Item>Data Hubungan Keluarga</NavDropdown.Item></LinkContainer>
            </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/HalKeluarga' exact component={HalKeluarga} />
         <Route path='/FotoKeluarga' exact component={FotoKeluarga} />
         <Route path='/Creator' exact component={Creator} />
         <Route path='/Login' exact component={Login} />
         <Route path='/Tambah' exact component={Tambah} />
         <Route path='/Pendidikan' exact component={Pendidikan} />
         <Route path='/HubKeluarga' exact component={HubKeluarga} />
         <Route>
         <center>
         <h1>Halaman Tidak Ditemukan</h1>
         <h2>404 Not Found</h2>
         </center>
         </Route>
         
         </Switch>
        </main>

      </BrowserRouter>
		);
	}
}

export default Menu;