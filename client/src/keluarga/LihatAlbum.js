import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import FormData from 'form-data';
import hapus from '../foto/close.png';
import {Card, Form, CardGroup, Button, Image, Container, Row, Col, Modal} from 'react-bootstrap';

const LihatAlbum = (props) => {

	const [coba, setCoba] = useState(null);
	const [tampil, setTampil] = useState([]);
	const [testing, setTesting] = useState('');
	const [isiAlbum, setIsiAlbum] = useState([]);
	const [opsiAlbum, setOpsiAlbum] = useState(false);
	const [idFoto, setIdFoto] = useState(0);



	const tampilGambar = (e) => {
		const isi = e.target.files;
		setCoba(isi);

		if(isi){
			const kumpulanGambar = Array.from(isi).map((flare) => URL.createObjectURL(flare));
			setTampil((prevImages) =>prevImages.concat(kumpulanGambar));
			setCoba(isi);
			setTesting('ada');

		}else{
			alert("PILIH GAMBAR DULU YA");
		}
	}


	const lihatGambar = (lihat) => {
		return lihat.map((gambar) => {
			return (
			<Col xs lg="4">
			<Card>
			  <Card.Img variant="top" src={gambar} key={gambar}/>
			</Card>
			</Col>
		)})
	}


	const Valid = () => {
			return(
				<center><br /><Button variant="success" onClick={simpanGambar}>Tambah Foto</Button><hr /></center>
				)
	}


	const simpanGambar = () => {

		if(coba){

			const config = {
			headers: {'Content-Type' : 'multipart/form-data'}
		}
		
		let formBaru = new FormData();
		formBaru.append("id_albums", props.id)
		for (let index = 0; index < coba.length; index++){
			const fils = coba[index];
			formBaru.append("foto", fils);
		}
		axios.post('http://localhost:3001/api/isiGambar', formBaru, config);
		alert('Tambah Foto Berhasil');
		setTampil([]);
		setTesting('');

		}else{
			alert("isi dulu kali");
		}
		
	}

	const buka = useRef(null);
	const uploadGambar = () => {
		buka.current.click();
	}


	const hapusGambar = (cw) => {
		axios.delete(`http://localhost:3001/api/deleteIsiAlbum/${cw}`)
		.then(() => {
			console.log('sudah di hapus');
		})
		setOpsiAlbum(false);
	}

	useEffect(() => {
		axios.get(`http://localhost:3001/api/lihatIsiAlbum/${props.id}`)
		.then((res) => {
			setIsiAlbum(res.data);
		})
	}, [])

	return (
		<>
		<Form.Group controlId="formFile" className="mb-3">
			<Form.Control type="file" multiple name="gambar" onChange={tampilGambar} accept="image/*" ref={buka} style={{display: 'none'}}/>
			<Button variant="primary" onClick={uploadGambar}>Upload Foto</Button>
		</Form.Group>
		<Row>
		<CardGroup>
			{lihatGambar(tampil)}
		</CardGroup>
		</Row>
					{testing ? <Valid /> : null}

		<Modal show={opsiAlbum} onHide={() => {setOpsiAlbum(false)}} aria-labelledby="contained-modal-title-vcenter"
	      backdrop="static"
          keyboard={false}
	      centered>
		  <Modal.Header closeButton>
		    <Modal.Title>Konfimarsi</Modal.Title>
		  </Modal.Header>

		  <Modal.Body>
		    <p>Apakah Anda Ingin Menghapus Foto Ini?</p>
		  </Modal.Body>

		  <Modal.Footer>
		    <Button variant="success" onClick={() => {hapusGambar(idFoto)}}>Ya</Button>
		    <Button variant="danger" onClick={() => {
		    	setOpsiAlbum(false);
		    }}>Tidak</Button>
		  </Modal.Footer>
		</Modal>


		<Container>
		<Row>
		{isiAlbum.map((d) => {
			return(
				<>
				<Col xs lg="4">
				<Card.Img src={d.gambar}/>
				<Card.Footer>
				<center><a onClick={() => {setOpsiAlbum(true); setIdFoto(d.id_gambar)}} key={d.id_gambar}><img src={hapus} style={{ height: '13px', width:'13px'}}/>&nbsp;Hapus</a></center>
				</Card.Footer>
				</Col>
				</>
				)
		})}
		</Row>
				</Container>

		</>
		);
}


export default LihatAlbum;
