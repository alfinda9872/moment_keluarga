import React,{useState, useEffect} from 'react';
import {Container, Row, Col, Image, Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import IsiKeluarga from '../keluarga/IsiKeluarga.js';
import Bounce from 'react-reveal/Bounce';

function Hal_keluarga(){

	const [isiHal, setIsiHal] = useState([]);
	const [show, setShow] = useState(false);
	const [id, setId] = useState(0);
	const [nama, setNama] = useState('');

	const buka = (id,nama) => {
		setShow(true);
		setId(id);
		setNama(nama);
	}

	useEffect(() => {
		axios.get("http://localhost:3001/api/lihatKeluarga")
		.then((res) => {
			setIsiHal(res.data);
		})
	},[])


	return(
		<>
		<center>
		<h1>Keluarga Besar Antapani</h1>
		<br />
		<br />

		<Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={() => {setShow(false)}}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {nama}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<IsiKeluarga id={id} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {setShow(false)}}>Close</Button>
      </Modal.Footer>
    </Modal>

		<Container>
		<Row>
			{isiHal.map((a) => {
				return(
				<Col xs lg="3" onClick={() => 
				{
					buka(a.id, a.nama)
				}}>
				<Bounce>
					<Image src={a.foto} width="131" height="130" style={{objectFit: 'cover'}} roundedCircle/>
					<br />
				<p>{a.nama}</p>
				</Bounce>
				</Col>
				)
			})}
		</Row>
		</Container>
		</center>
		</>
	);
}


export default Hal_keluarga;