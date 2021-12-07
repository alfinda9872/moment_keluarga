import React, {useState, useEffect} from 'react';
import {Form, Container, Col, Row, Button, Table, Alert, Modal, Image} from 'react-bootstrap';
import axios from 'axios';

function InputPendidikan() {
	const [idPendidik, setIdPendidik] = useState(0);
	const [tk, setTk] = useState('');
	const [sd, setSd] = useState('');
	const [smp, setSmp] = useState('');
	const [smk, setSmk] = useState('');
	const [tinggi, setTinggi] = useState('');
	const [showInput2, setShowInput2] = useState(false);
	const [showInput3, setShowInput3] = useState(false);
	const [hasil, setHasil] = useState([]);
	const [pendidik, setPendidik] = useState([]);



	const simpanPendidikan = () =>{
		axios.post('http://localhost:3001/api/tambah_pendidikan', {idp : idPendidik, ttk: tk ,ssd: sd, ssmp: smp, ssmk: smk, ptinggi: tinggi })
		.then(() =>{

		}).catch((err) =>{
			console.log(err);
		})
		setShowInput2(false);

	}

	const ubahPendidik = (idw, tkw, sdw, smpw, smkw, penw) => {
		setIdPendidik(idw);
		setTk(tkw);
		setSd(sdw);
		setSmp(smpw);
		setSmk(smkw);
		setTinggi(penw);
		setShowInput3(true);

		
	}


	const ubahDataPen = (idv) => {
		axios.put('http://localhost:3001/api/ubahPen', {
			idl: idv,
			tks : tk,
			sds : sd,
			smps : smp,
			smks : smk,
			pens : tinggi
		}).then((res) =>{

		})
		setShowInput3(false);
	} 


	const deleteDataPen = (igans) => {
		axios.delete(`http://localhost:3001/api/deletePen/${igans}`).then(() =>{
			console.log('data terhapus');
		})
	};

	const gaJadi = () =>{
			setIdPendidik(0);
			setTk('');
			setSd('');
			setSmp('');
			setSmk('');
			setTinggi('');
		  	setShowInput3(false);
		}

	useEffect(()=>{
		axios.get("http://localhost:3001/api/lihat")
		.then((res)=>{
			setHasil(res.data);
		});

	},[]);

	useEffect(() =>{
		axios.get("http://localhost:3001/api/lihat_pendidikan")
		.then((res) =>{
			setPendidik(res.data);
		});
	}, [])
	
	return(
		<>
		<Container>
		<br />
		<Row>
			<Col>
			<Modal
		        size="lg"
		        show={showInput2}
		        onHide={() => setShowInput2(false)}
		        aria-labelledby="example-modal-sizes-title-lg">
		        <Modal.Header closeButton>
		          <Modal.Title id="example-modal-sizes-title-lg">
		            Silahkan Input Pendidikan Berdasarkan Nama Yang Telah Ditentukan.
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        <Container>
		        <Row>
		        <Col>
		        <Form.Group className="mb-3" >
					<Form.Label>Nama Lengkap</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setIdPendidik(event.target.value);}} >
					<option value="" selected disabled hidden>Pilih Nama</option>
					{hasil.map((nano) => {
						return (
							<option value={nano.id}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>	
		        <Form.Group className="mb-3" >
					<Form.Label>TK / PlayGroup</Form.Label>
					<Form.Control type="text"  placeholder="" onChange={(event) => {setTk(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>SD</Form.Label>
					<Form.Control type="text" placeholder="" onChange={(event) => {setSd(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>SMP</Form.Label>
					<Form.Control type="text"  placeholder="" onChange={(event) => {setSmp(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>SMA / SMK</Form.Label>
					<Form.Control type="text" placeholder="" onChange={(event) => {setSmk(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>Pendidikan Tinggi </Form.Label>
					<Form.Control type="text" placeholder="" onChange={(event) => {setTinggi(event.target.value);}} />
				</Form.Group>
				<Button variant="success" onClick={simpanPendidikan}>Simpan</Button>
				&nbsp;
				&nbsp;
				<Button variant="danger" onClick={() => {setShowInput2(false)}}>Batal</Button>
				</Col>
				</Row>
		        </Container>
		        </Modal.Body>
		      </Modal>

		      <Modal
		        size="lg"
		        show={showInput3}
		        onHide={() => setShowInput3(false)}
		        aria-labelledby="example-modal-sizes-title-lg">
		        <Modal.Header closeButton>
		          <Modal.Title id="example-modal-sizes-title-lg">
		            Silahkan Ubah Data Yang Anda Pilih.
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        <Container>
		        <Row>
		        <Col>
		        <Form.Group className="mb-3" >
					<Form.Label>TK / PlayGroup</Form.Label>
					<Form.Control type="text"  placeholder="" value={tk} onChange={(event) => {setTk(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>SD</Form.Label>
					<Form.Control type="text" placeholder="" value={sd} onChange={(event) => {setSd(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>SMP</Form.Label>
					<Form.Control type="text"  placeholder="" value={smp} onChange={(event) => {setSmp(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>SMA / SMK</Form.Label>
					<Form.Control type="text" placeholder="" value={smk} onChange={(event) => {setSmk(event.target.value);}} />
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>Pendidikan Tinggi </Form.Label>
					<Form.Control type="text" placeholder="" value={tinggi} onChange={(event) => {setTinggi(event.target.value);}} />
				</Form.Group>
				<Button variant="success" onClick={() => {ubahDataPen(idPendidik)}}>Simpan</Button>
				&nbsp;
				&nbsp;
				<Button variant="danger" onClick={gaJadi}>Batal</Button>
				</Col>
				</Row>
		        </Container>
		        </Modal.Body>
		      </Modal>

			<h1>Info Pendidikan<Button variant="primary" style={{float: "right"}} onClick={() => {setShowInput2(true)}}>Tambah Data</Button> </h1>
			<div style={{overflowY: "auto", height: "450px"}}>
			<Table responsive="sm">
				<thead>
				<tr>
				<th>Nama Lengkap</th>
				<th>TK/PlayGroup</th>
				<th>SD</th>
				<th>SMP</th>
				<th>SMA/SMK</th>
				<th>Pendidikan Tinggi</th>
				<th className="text-center" colSpan="1">Action</th>
				</tr>
				</thead>
				<tbody>
				{pendidik.map((test) => {
					return(
					<tr>
						<td style={{display: "none"}}>{test.id_pendidikan}</td>
						<td>{test.nama}</td>
						<td>{test.tk}</td>
						<td>{test.sd}</td>
						<td>{test.smp}</td>
						<td>{test.smk}</td>
						<td>{test.pendidikan_tinggi}</td>
						<td className="text-center"><Button variant="warning" onClick={() => {ubahPendidik(test.id_pendidikan, test.tk, test.sd, test.smp, test.smk, test.pendidikan_tinggi)}}>Update</Button></td>
						<td colSpan="1"><Button variant="danger" onClick={() => {deleteDataPen(test.id_pendidikan)}} >Delete</Button></td>
					</tr>)
				})}
					
				</tbody>
			</Table>
			</div>
			</Col>
		</Row>
		</Container>
		</>
	)


}


export default InputPendidikan;