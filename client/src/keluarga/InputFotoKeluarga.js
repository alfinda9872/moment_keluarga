import React, {useState, useEffect} from 'react';
import {Form, Container, Col, Row, Button, Table, Alert, Modal, Image} from 'react-bootstrap';
import axios from 'axios';
import FormData from 'form-data';

function InputFotoKeluarga() {
	//tambah data
	const [id, setId] = useState(0);
	const [nama, setNama] = useState('');
	const [kelamin, setKelamin] = useState('');
	const [tanggalLahir, setTanggalLahir] = useState('');
	const [tempatLahir, setTempatLahir] = useState('');
	const [foto, setFoto] = useState(null);
	const [preview, setPreview] = useState(null);

	//aksi tabel
	const [hasil, setHasil] = useState([]);
	//ubah data
	const [nama2, setNama2] = useState('');
	const [kelamin2, setKelamin2] = useState('');
	const [tanggalLahir2, setTanggalLahir2] = useState('');
	const [tempatLahir2, setTempatLahir2] = useState('');
	const [foto2, setFoto2] = useState(null);
	const [fotoBaru, setFotoBaru] = useState(null);


	//aksi alert
	const [show, setShow] = useState(false);
	const [showDelete, setShowDelete] = useState(false);

	//aksi modal
	const [lgShow, setLgShow] = useState(false);
	const [showInput, setShowInput] = useState(false);

	const tambahGambar = (e) =>{
		setPreview(URL.createObjectURL(e.target.files[0]));
		let uploads = e.target.files[0];
		setFoto(uploads);
	}

	const tambahData = () => {

		const config = {
			headers: {'Content-Type' : 'multipart/form-data'}
		}

		let formData = new FormData();
		formData.append("nama", nama);
		formData.append("tanggal_lahir", tanggalLahir);
		formData.append("tempat_lahir", tempatLahir);
		formData.append("jenis_kelamin", kelamin);
		formData.append("gambar", foto);
		axios.post('http://localhost:3001/api/tambah', formData, config);
		setShowInput(false);
	};


	const cekData = (idd, namad, tanggad, tempatd, sassin) => {
		setId(idd);
		setNama2(namad);
		setTanggalLahir2(tanggad);
		setTempatLahir2(tempatd);
		setFoto2(sassin);
		setLgShow(true);
	}

	const ubahGambar =  (e) =>{
		setFoto2(URL.createObjectURL(e.target.files[0]));
		let ubahFoto = e.target.files[0];
		setFotoBaru(ubahFoto);
	}

	const simpanGambarBaru = () =>{
		const config = {
			headers: {'Content-Type' : 'multipart/form-data'}
		}

		let formBaru = new FormData();
		formBaru.append('ida', id)
		formBaru.append('pic', fotoBaru);
		axios.put('http://localhost:3001/api/newGambar', formBaru, config).then((res) =>{

		})
		setLgShow(false);
	}


	const ubahData = (id) => {
		axios.put('http://localhost:3001/api/ubah', { id: id, nama : nama2, tanggal_lahir : tanggalLahir2, tempat_lahir : tempatLahir2})
		.then((res) => {

		})
		setLgShow(false);

	}

	const deleteData = (idesu) =>{
		axios.delete(`http://localhost:3001/api/delete/${idesu}`).then(() => {
			console.log('data di hapus')
		})
	};


	useEffect(()=>{
		axios.get("http://localhost:3001/api/lihat")
		.then((res)=>{
			setHasil(res.data);
		});

	});


	/*const Validasi = () => {
		setShow(true);
		setTimeout(() =>{
			setShow(false);
		}, 2000);
		if(ubahData){
			return (
				<Alert variant="success" show={show}>
				  <Alert.Heading>Hai, Data Telah Berhasil Di Update</Alert.Heading>
				</Alert>
				);
		}

		if(hapusData){
			return (
				<Alert variant="success" show={showDelete}>
				  <Alert.Heading>Hai, Data Telah Berhasil Di Hapus</Alert.Heading>
				</Alert>
				);
		}
		
	} */
	



	return(
		<>	
		<Container>
		<br />
		<Row>
		<br />
		<Col>
		<h1>Data Keluarga <Button variant="primary" style={{float: "right"}} onClick={() => {setShowInput(true)}}>Tambah Data</Button></h1>
		<div style={{overflowY: "auto", height: "450px"}}>
			<Table responsive="sm">
				<thead>
				    <tr>
				      <th>Nama Lengkap</th>
				      <th>Tanggal Lahir</th>
				      <th>Tempat Lahir</th>
				      <th>Jenis Kelamin</th>
				      <th>Foto</th>
				      <th className="text-center">Action</th>
				    </tr>
				 </thead>
				 <tbody>
				 {hasil.map((desu) =>{
				 	return(
					<tr>
						<td style={{display: "none"}}>{desu.id}</td>
						<td>{desu.nama}</td>
						<td>{desu.tanggal_lahir}</td>
						<td>{desu.tempat_lahir}</td>
						<td>{desu.jenis_kelamin}</td>
						<td><Image src={desu.foto} width="150" height="150" roundedCircle/></td>
						<td className="text-center"><Button variant="warning" onClick={() => {cekData(desu.id, desu.nama, desu.tanggal_lahir, desu.tempat_lahir, desu.foto
							)}} >Update</Button>&nbsp;&nbsp;<Button variant="danger" onClick={() => {deleteData(desu.id)}}>Delete</Button></td>
					</tr>
					)})}
				  </tbody>
			</Table>
			</div>
		</Col>
		</Row>
		<br />
		<Alert variant="success" show={show}>
				  <Alert.Heading>Hai, Data Telah Berhasil Di Tambah</Alert.Heading>
				</Alert>
		<Row>
			<Col>
				<Modal
		        size="lg"
		        show={lgShow}
		        onHide={() => setLgShow(false)}
		        aria-labelledby="example-modal-sizes-title-lg">
		        <Modal.Header closeButton>
		          <Modal.Title id="example-modal-sizes-title-lg">
		            Silahkan Ubah Data Yang Anda Pilih.
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        <Container>
		        <Row>
		        <Col xs={12} md={8}>
		        	<Form.Group className="mb-3" >
					<Form.Label>Nama Lengkap </Form.Label>
					<Form.Control type="text" value={nama2} placeholder="" onChange={(event) => {setNama2(event.target.value);}} />
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>TTL </Form.Label>
					<Form.Control type="date" value={tanggalLahir2} placeholder="Nama Kegiatan" onChange={(event) => {setTanggalLahir2(event.target.value);}}  />
				</Form.Group>	
				<Form.Group className="mb-3" >
					<Form.Label>Tempat Lahir </Form.Label>
					<Form.Control type="text" value={tempatLahir2} placeholder="" onChange={(event) => {setTempatLahir2(event.target.value);}} />
				</Form.Group>
				<Button variant="success" onClick={() => {ubahData(id)}}>Simpan</Button>
				&nbsp;
				&nbsp;
				<Button variant="danger" onClick={() => {setLgShow(false)}}>Batal</Button>
				</Col>
				<Col xs={12} md={4}>
				<br />
					<img src={foto2} width="230" height="205" />
					<br />
					<br />
					<Form.Group controlId="formFile" className="mb-3">
    				<Form.Control type="file" name="pic" onChange={ubahGambar} />
 				</Form.Group>
 				<Button variant="warning" onClick={simpanGambarBaru} >Update Foto</Button>
				</Col>
				</Row>
		        </Container>
		        </Modal.Body>
		      </Modal>
			</Col>
			<Col>
				 <Modal
		        size="lg"
		        show={showInput}
		        onHide={() => setShowInput(false)}
		        aria-labelledby="example-modal-sizes-title-lg"
		      >
		        <Modal.Header closeButton>
		          <Modal.Title id="example-modal-sizes-title-lg">
		           <h1>Input Data</h1>
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
				<Form.Group className="mb-3" >
					<Form.Label>Nama Lengkap </Form.Label>
					<Form.Control type="text" placeholder="" onChange={(event) => {setNama(event.target.value);}} required=""/>
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>TTL </Form.Label>
					<Form.Control type="date" placeholder="Nama Kegiatan" onChange={(event) => {setTanggalLahir(event.target.value);}}  />
				</Form.Group>	
				<Form.Group className="mb-3" >
					<Form.Label>Tempat Lahir </Form.Label>
					<Form.Control type="text" placeholder="" onChange={(event) => {setTempatLahir(event.target.value);}} />
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>Jenis Kelamin</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setKelamin(event.target.value);}} >
					<option>--Pilih Jenis Kelamin--</option>
					<option value="Pria">Pria</option>
					<option value="Wanita">Wanita</option>
					</Form.Select>
				</Form.Group>			
				<Form.Group controlId="formFile" className="mb-3">
   					<Form.Label>Input Foto</Form.Label>
    				<Form.Control type="file" name="gambar" onChange={tambahGambar} />
    				<br />
    				<Image src={preview} width="120" height="120" roundedCircle />
 				</Form.Group>
				<Button variant="success" onClick={tambahData} >Simpan</Button>
		        </Modal.Body>
		      </Modal>
			</Col>
		</Row>
		</Container>

		</>
	);
}

export default InputFotoKeluarga;