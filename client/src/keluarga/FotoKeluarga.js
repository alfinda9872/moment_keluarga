import React, {useState, useEffect} from 'react';
import {Form, Container, Row, Col, Button, Card, Nav, Tabs, Tab} from 'react-bootstrap';
import MomentKeluarga from '../keluarga/MomentKeluarga';
import Album from '../keluarga/Album';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

function FotoKeluarga(){

	const [coba, setCoba] = useState(null);
	const [halaman, setHalaman] = useState('Moment Keluarga');
	const [key, setKey] = useState('link-1');
	const [routing, setRouting] = useState('MomentKeluarga');

	
  
	const halamans = (pro) => {
		setHalaman(pro);
	}

	const activeStyle ={
		borderBottom : '2px solid #e562a0'
	}

	const inActiveStyle = {

		background: 'transparent',
	'borderColor': 'transparent',
	}

	const Quote = () => {
		if(halaman === 'Moment Keluarga'){
			return(
				<>
				<p><i style={{fontFamily:'Sofia, sans-serif', fontSize: '20px'}}>"Be Happy For This Moment, This Moment is Your Life"</i></p>
				<b tyle={{fontFamily:'Garamond', fontSize: '25px'}}>- Omar Khayyam</b>
				</>
				)
		}else{
			return(
				<>
				<p><i style={{fontFamily:'papyrus', fontSize: '20px'}}>"Because Every Photo Has A Story To Tell"</i></p>
				<b tyle={{fontFamily:'Garamond', fontSize: '25px'}}>- Creative Memories</b>
				</>
				)
		}
	}


	const Rout = () => {
		if(routing === 'MomentKeluarga'){
			return (
				<MomentKeluarga />
				)
		}else {
			return ( <Album />)
		}

	}


  return( 

  	<>
	<center>
	<h1>{halaman}</h1>
	<Quote />
	<br />
	<br />
	<Nav fill variant="tabs" activeKey={key} onSelect={key => setKey(key)} transition="fade">
	   <Nav.Item>
		<Nav.Link eventKey="link-1" style={key === 'link-1' ? activeStyle : inActiveStyle} onClick={() => {halamans('Moment Keluarga'); setRouting('MomentKeluarga')}} aria-controls="example-collapse-text"
        aria-expanded="true">Moment Keluarga</Nav.Link>
	  </Nav.Item>
	  <Nav.Item>
	  	<Nav.Link eventKey="link-2" style={key === 'link-2' ? activeStyle : inActiveStyle} onClick={() => {halamans('Album'); setRouting('Album')}}>Album Keluarga</Nav.Link>
	  </Nav.Item>
	</Nav>


 	</center>
 	 	<Rout />
 	</>

	)
}

export default FotoKeluarga;