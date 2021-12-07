import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import {Button, Form, Container, Col, Row, Card, CardGroup,Modal, Image} from 'react-bootstrap';
import logoPlus from '../foto/plus.svg';
import locat from '../foto/location.png';
import Moment from 'react-moment';
import Zoom from 'react-reveal/Zoom';
import LihatAlbum from '../keluarga/LihatAlbum.js';
import {Route, Switch, Link} from "react-router-dom";

function Album () {

	const [opsi, setOpsi] = useState(false);
	const [opsi2, setOpsi2] = useState(false);
	const [opsi3, setOpsi3] = useState(false);
	const [opsi4, setOpsi4] = useState(false);


	//form input
	const [namaAlbum, setNamaAlbum] = useState('');
	const [tampil2, setTampil2] = useState(null);
	const [coverAlbum, setCoverAlbum] = useState(null);
	const [tanggal, setTanggal] = useState('');
	const [tanggalAlbum, setTanggalAlbum] = useState([]);
	const [nama, setNama] = useState('');
	const [id, setId] = useState(0);
	const [lokasi, setLokasi] = useState('');



	const simpanAlbum = () => {
		const config = {
			headers : {'Content-Type' : 'multipart/form-data'}
		}

		let formAlbum = new FormData();
		formAlbum.append("nama_album", namaAlbum);
		formAlbum.append("lokasiAlbum", lokasi);
		formAlbum.append("cover", coverAlbum);
		formAlbum.append("tanggal_album", tanggal);
		axios.post("http://localhost:3001/api/simpanAlbum", formAlbum, config);
		setOpsi(false);
		setOpsi2(false);
		setNamaAlbum('');
		setLokasi('');
		setCoverAlbum(null);
		setTampil2(null);
	}

	const validasi = () => {
		if(namaAlbum===''){
			alert('Isi Nama Album Terlebih Dahulu');
		} else if(lokasi===''){
			alert('Isi Lokasi Album Diambil');
		} else if (tampil2 === null){
			alert('Pilih Gambar Terlebih Dahulu');
		} else{
			setOpsi2(true);
		}

	}

	const Batal = () => {
		setOpsi(false);
		setTampil2(null);
		setNamaAlbum('');
	}



	const hapusAlbum = (id) => {
		axios.delete(`http://localhost:3001/api/hapusAlbum/${id}`)
		.then(() => {
			console.log('data kehapus gan');
		})
		setOpsi4(false);
		setOpsi3(false);
	}


	useEffect(() => {
		axios.get("http://localhost:3001/api/tanggalAlbum")
		.then((res) => {
			setTanggalAlbum(res.data);
		})
	},[])



	return (
		<div>
		<Zoom>
		<br />
		<center>
		<a onClick={() => {setOpsi(true)}}><img src={logoPlus} style={{ height: '30px', width:'30px'}}/>Album Baru</a>
		</center>
		<br />

		 <Modal
	      show={opsi}
	      onHide={() => {setOpsi(false); setTampil2(null)}}
	      size="lg"
	      aria-labelledby="contained-modal-title-vcenter"
	      backdrop="static"
          keyboard={false}
	      centered
	    >
	      <Modal.Header closeButton>
	        <Modal.Title id="contained-modal-title-vcenter">
	          Tambah Album Baru
	        </Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	       	<Form.Group className="mb-3" >
					<Form.Label>Nama Album</Form.Label>
					<Form.Control type="text" placeholder="" onChange={(e) => {setNamaAlbum(e.target.value)}}/>
			</Form.Group>
			<Form.Group className="mb-3" >
					<Form.Label>Lokasi</Form.Label>
					<Form.Control type="text" placeholder="" onChange={(e) => {setLokasi(e.target.value)}}/>
			</Form.Group>
			<Form.Group controlId="formFile" className="mb-3">
			<Form.Label>Cover Album</Form.Label>
					<Form.Control type="file" name="gambar" onChange={(e) => {
						setTampil2(URL.createObjectURL(e.target.files[0]));
						setCoverAlbum(e.target.files[0]);
						const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
						let sekarang = new Date().toLocaleString('id', options) + "";
						setTanggal(sekarang);
					}} accept="image/*"/>
			</Form.Group>
			<Image src={tampil2} thumbnail/>
	      </Modal.Body>
	      <Modal.Footer>
	      </Modal.Footer>
	      <Container>
	      <Row>
	      	       <Col xs={6} md={4}>
              <Button variant="primary" onClick={validasi}>Tambahkan</Button>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
             <Col>
            </Col>
            <Col>
            </Col>
            <Col>
              <Button variant="danger" onClick={Batal}>Batal</Button>
            </Col>
            </Row>

            </Container>
            <br/>
	    </Modal>

	    <Modal show={opsi2} onHide={() => {setOpsi2(false)}} aria-labelledby="contained-modal-title-vcenter"
	      backdrop="static"
          keyboard={false}
	      centered>
		  <Modal.Header closeButton>
		    <Modal.Title>Konfimarsi</Modal.Title>
		  </Modal.Header>

		  <Modal.Body>
		    <p>Simpan Album Baru?</p>
		  </Modal.Body>

		  <Modal.Footer>
		    <Button variant="success" onClick={simpanAlbum}>Ya</Button>
		    <Button variant="danger" onClick={() => {
		    	setOpsi2(false);
		    }}>Tidak</Button>
		  </Modal.Footer>
		</Modal>



		<Modal show={opsi4} onHide={() => {setOpsi4(false)}} aria-labelledby="contained-modal-title-vcenter"
	      backdrop="static"
          keyboard={false}
	      centered>
		  <Modal.Header closeButton>
		    <Modal.Title>Konfimarsi</Modal.Title>
		  </Modal.Header>

		  <Modal.Body>
		    <p>Apakah Anda Ingin Menghapus Album Ini?</p>
		  </Modal.Body>

		  <Modal.Footer>
		    <Button variant="success" onClick={() => {hapusAlbum(id)}}>Ya</Button>
		    <Button variant="danger" onClick={() => {
		    	setOpsi4(false);
		    }}>Tidak</Button>
		  </Modal.Footer>
		</Modal>


		<Modal
				show={opsi3}
		      size="lg"
		      aria-labelledby="contained-modal-title-vcenter"
		      onHide={() => {setOpsi3(false)}}
		      size="xl"
		      centered>
		      <Modal.Header closeButton>
		        <Modal.Title id="contained-modal-title-vcenter">
		        {nama}
		        </Modal.Title>
		      </Modal.Header>
		      <Modal.Body>
		         <LihatAlbum id={id}/>
		      </Modal.Body>
		      <Modal.Footer>
		        <Button variant="danger" onClick={() => {setOpsi4(true)}}>Hapus Album</Button>
		      </Modal.Footer>
		    </Modal>

	<Container>
		{tanggalAlbum.map((as, index) => {
			const tanggalA = as.tan;
			const aa = as.cover;
			const idd = as.ids;
			const ww = aa.toLocaleString().split('™');
			const bb = as.nam;
			const bw = bb.split('/');
			const idw = idd.split(',');
			const ls = as.lokas;
			const lw = ls.split('*');
			const coverA = Array.from(ww).map((s, index) => {
				return (
					<>
					<Col xs lg="4">
					<Card className="bg-dark text-white border-light" onClick={() => {setNama(bw[index]);setId(idw[index]);setOpsi3(true)}}>
					<Card.Img src={s} key={idw[index]} width="350" height="350" style={{objectFit: 'cover'}}/>
					 <Card.ImgOverlay>
					<Card.Title style={{textTransform: 'capitalize'}}>
					{bw[index]}
					</Card.Title>
					    </Card.ImgOverlay>
					    <Card.Footer style={{float: 'right'}}>
					    		<a><img src={locat} style={{ height: '25px', width:'28px'}} key={idw[index]}/>{lw[index]}</a>
					    </Card.Footer>
					</Card>
					</Col>
					</>
					)});
			return (
				<>
				<Zoom>
				<p>{tanggalA}</p>
				<Row>
				<CardGroup>
				{coverA}
				</CardGroup>
				</Row>
				<br />
				</Zoom>
	            </>
				)
		})}		
		</Container>
		</Zoom>
		</div>


		)
}

export default Album;