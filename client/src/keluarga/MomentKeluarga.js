import React, {useState, useEffect} from 'react';
import logoPlus from '../foto/plus.svg';
import {Container, Row	, Col, Card, CardGroup, Modal, Button, Form, Image} from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import Moment from 'react-moment';


function MomentKeluarga () {

	const [show, setShow] = useState(false);
	const [muncul, setMuncul] = useState(null);
	const [opsiCerita, setOpsiCerita] = useState(false);
	const [judul, setJudul] = useState('');
	const [cerita, setCerita] = useState('');
	const [gambarMoment, setGambarMoment] = useState(null);
	const [tanggal, setTanggal] = useState('');
	const [moment, setMoment] = useState([]);


	const validasi = () => {
		if (judul === ''){
			alert('Maaf Judul Harus Diisi Terlebih Dahulu.');
		} else if (cerita === '') {
			alert('Maaf Cerita Anda Harus Diisi Terlebih Dahulu');
		} else if (muncul === null){
			alert('Gambar Harap Diisi Terlebih Dahulu');
		} else {
			setOpsiCerita(true);
		}
	}

	const simpanCerita = () => {

		const config = {
			
			headers: {'Content-Type' : 'multipart/form-data'}
		}

		const formMoment = new FormData();
		formMoment.append("jud", judul);
		formMoment.append("cer", cerita);
		formMoment.append("gams", gambarMoment);
		formMoment.append("tang" , tanggal);
		axios.post("http://localhost:3001/api/simpanMoment", formMoment, config)
		.then(() => {
			console.log('berhasil');
		})
		setOpsiCerita(false);
		setShow(false);

	}

	useEffect(() => {
		axios.get("http://localhost:3001/api/tampilMoment")
		.then((res) => {
			setMoment(res.data);
		})
	},[])

	return (
		<>
		<LightSpeed right>
		<Container>
		<br />
		<center>
		<a onClick={() => {setShow(true)}}><img src={logoPlus} style={{ height: '30px', width:'30px'}}/>Apa Moment Yang Terjadi Hari Ini?</a>
		</center>
		</Container>
		</LightSpeed>


		<Modal show={opsiCerita} onHide={() => {setOpsiCerita(false)}} aria-labelledby="contained-modal-title-vcenter"
	      backdrop="static"
          keyboard={false}
	      centered>
		  <Modal.Header closeButton>
		    <Modal.Title>Konfimarsi</Modal.Title>
		  </Modal.Header>

		  <Modal.Body>
		    <p>Posting Moment Ini?</p>
		  </Modal.Body>

		  <Modal.Footer>
		    <Button variant="success" onClick={simpanCerita}>Ya</Button>
		    <Button variant="danger" onClick={() => {
		    	setOpsiCerita(false);
		    }}>Tidak</Button>
		  </Modal.Footer>
		</Modal>


		<Modal show={show} onHide={() => {setShow(false); setMuncul(null); setJudul(''); setCerita('')}} animation={false} aria-labelledby="contained-modal-title-vcenter"
      centered size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        	<Form.Control size="lg" type="text" placeholder="Judul Moment Yang Terjadi Hari Ini" onChange={(e) => {setJudul(e.target.value)}}/>
  			<br />
  			<Form.Control as="textarea" rows={4} placeholder="Ceritakan Moment Apa Itu?" size="lg" onChange={(e) => {setCerita(e.target.value)}}/>
  			<br />
			<Form.Control type="file" multiple name="gams" accept="image/*" onChange={(e) => {
				setMuncul(URL.createObjectURL(e.target.files[0]))
				setGambarMoment(e.target.files[0]);
				const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				let sekarang = new Date().toLocaleString('id', options) + "";
				setTanggal(sekarang);
			}
			}/> 
			<hr />
			<Image src={muncul} thumbnail/>
        </Modal.Body>
        <Modal.Footer style={{justifyContent: 'center'}}>
          <Button variant="primary" onClick={validasi}>
            Ceritakan
          </Button>
        </Modal.Footer>
      	</Modal>
		<br />
			{/*<Row>
				<Col sm={4}>
					<medium className="text-muted">Today</medium>
				</Col>
			</Row>*/}

		<Container>
		{moment.map((m) => {
		return(
			<>
			<Zoom>
			<br />
			<Row>
			<CardGroup>
			<Col>
			<Card>
			<Card.Body>
			<Card.Title style={{textTransform: 'capitalize'}}>
			{m.judul_moment}
			</Card.Title>
			<Card.Text style={{textAlign: 'justify'}}>
			{m.isi_moment}
			</Card.Text>
			</Card.Body>
			<Card.Img variant="bottom" src={m.gambar_moment} height="500" style={{objectFit: 'cover'}} />
			<Card.Footer>
			 <a style={{float: 'right'}}>{m.tanggal_post}</a>
			</Card.Footer>
			</Card>
			</Col>
			</CardGroup>
			</Row>
			</Zoom>
			</>
		)})}
		</Container>
		{/*<Row>
		<CardGroup>
				{kumpulan.map((asi) => {
				return(
					<Col xs lg="3">
					<Card>
						<Card.Img variant="top" src={asi} />
				  </Card>
				  </Col>
				  )
				})}
		</CardGroup>
		</Row>*/}
				  </>

		)
}

export default MomentKeluarga;