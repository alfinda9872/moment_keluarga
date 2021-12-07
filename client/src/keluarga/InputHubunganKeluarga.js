import React, {useState, useEffect} from 'react';
import {Form, Container, Col, Row, Button, Table, Alert, Modal, Image} from 'react-bootstrap';
import axios from 'axios';

function InputHubunganKeluarga(){

	const [id, setId] = useState(0);
	const [kakek, setKakek] = useState('-');
	const [nenek, setNenek] = useState('-');
	const [ayah, setAyah] = useState('-');
	const [ibu, setIbu] = useState('-');
	const [suamiIstri, setSuamiIstri] = useState('-');
	const [anakLaki, setAnakLaki] = useState([{ anakLaki: "-"}]);
	const [anakPerempuan, setAnakPerempuan] = useState([{ anakPerempuan: "-"}]);
	const [kakakLaki, setKakakLaki] = useState([{ kakakLaki: "-"}]);
	const [kakakPerempuan, setKakakPerempuan] = useState([{ kakakPerempuan: "-"}]);
	const [adikLaki, setAdikLaki] = useState([{ adikLaki: "-"}]);
	const [adikPerempuan, setAdikPerempuan] = useState([{ adikPerempuan: "-"}]);
	const [saudaraLaki, setSaudaraLaki] = useState([{ saudaraLaki: "-"}]);
	const [saudaraPerempuan, setSaudaraPerempuan] = useState([{ saudaraPerempuan: "-"}]);



	const [hasil, setHasil] = useState([]);
	const [hubLaki, setHubLaki] = useState([]);
	const [hubPerempuan, setHubPerempuan] = useState([]);
	const [hubungan, setHubungan] = useState([]);
	const [tampil, setTampil] = useState([]);


	const [showInput4, setShowInput4] = useState(false);

	//anak laki
	const handleInputChange = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...anakLaki];
	    list[index][name] = value;
	    setAnakLaki(list);

  	};
	 const handleRemoveClick = index => {
	    const list = [...anakLaki];
	    list.splice(index, 1);
	    setAnakLaki(list);
	 };
	 const handleAddClick = () => {
	    setAnakLaki([...anakLaki, { anakLaki: "-" }]);
	 };


	 //anak perempuan
	 const handleInputChange2 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...anakPerempuan];
	    list[index][name] = value;
	    setAnakPerempuan(list);

  	};
	 const handleRemoveClick2 = index => {
	    const list = [...anakPerempuan];
	    list.splice(index, 1);
	    setAnakPerempuan(list);
	 };
	 const handleAddClick2 = () => {
	    setAnakPerempuan([...anakPerempuan, { anakPerempuan: "-" }]);
	 };

	  //kakak laki-laki
	 const handleInputChange3 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...kakakLaki];
	    list[index][name] = value;
	    setKakakLaki(list);

  	};
	 const handleRemoveClick3 = index => {
	    const list = [...kakakLaki];
	    list.splice(index, 1);
	    setKakakLaki(list);
	 };
	 const handleAddClick3 = () => {
	    setKakakLaki([...kakakLaki, { kakakLaki: "-" }]);
	 };


	 //kakak perempuan
	 const handleInputChange4 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...kakakPerempuan];
	    list[index][name] = value;
	    setKakakPerempuan(list);

  	};
	 const handleRemoveClick4 = index => {
	    const list = [...kakakPerempuan];
	    list.splice(index, 1);
	    setKakakPerempuan(list);
	 };
	 const handleAddClick4 = () => {
	    setKakakPerempuan([...kakakPerempuan, { kakakPerempuan: "-" }]);
	 };


	 //adik laki-laki
	 const handleInputChange5 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...adikLaki];
	    list[index][name] = value;
	    setAdikLaki(list);

  	};
	 const handleRemoveClick5 = index => {
	    const list = [...adikLaki];
	    list.splice(index, 1);
	    setAdikLaki(list);
	 };
	 const handleAddClick5 = () => {
	    setAdikLaki([...adikLaki, { adikLaki: "-" }]);
	 };



	 //adik perempuan
	 const handleInputChange6 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...adikPerempuan];
	    list[index][name] = value;
	    setAdikPerempuan(list);

  	};
	 const handleRemoveClick6 = index => {
	    const list = [...adikPerempuan];
	    list.splice(index, 1);
	    setAdikPerempuan(list);
	 };
	 const handleAddClick6 = () => {
	    setAdikPerempuan([...adikPerempuan, { adikPerempuan: "-" }]);
	 };


	  //saudara laki-laki
	 const handleInputChange7 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...saudaraLaki];
	    list[index][name] = value;
	    setSaudaraLaki(list);

  	};
	 const handleRemoveClick7 = index => {
	    const list = [...saudaraLaki];
	    list.splice(index, 1);
	    setSaudaraLaki(list);
	 };
	 const handleAddClick7 = () => {
	    setSaudaraLaki([...saudaraLaki, { saudaraLaki: "-" }]);
	 };


 	//saudara perempuan
	 const handleInputChange8 = (e, index) => {
	    const { name, value } = e.target;
	    const list = [...saudaraPerempuan];
	    list[index][name] = value;
	    setSaudaraPerempuan(list);

  	};
	 const handleRemoveClick8 = index => {
	    const list = [...saudaraPerempuan];
	    list.splice(index, 1);
	    setSaudaraPerempuan(list);
	 };
	 const handleAddClick8 = () => {
	    setSaudaraPerempuan([...saudaraPerempuan, { saudaraPerempuan: "-" }]);
	 };


	 const simpanData = () => {
	 	const anak1 = anakLaki.reduce((acc, curr) => `${acc}${curr.anakLaki},`,'');
	 	const anak2 = anakPerempuan.reduce((acc, curr) => `${acc}${curr.anakPerempuan},`,'');
	 	const kakak1 = kakakLaki.reduce((acc, curr) => `${acc}${curr.kakakLaki},`,'');
	 	const kakak2 = kakakPerempuan.reduce((acc, curr) => `${acc}${curr.kakakPerempuan},`,'');
	 	const adik1 = adikLaki.reduce((acc, curr) => `${acc}${curr.adikLaki},`,'');
	 	const adik2 = adikPerempuan.reduce((acc, curr) => `${acc}${curr.adikPerempuan},`,'');
	 	const saudara1 = saudaraLaki.reduce((acc, curr) => `${acc}${curr.saudaraLaki},`,'');
	 	const saudara2 = saudaraPerempuan.reduce((acc, curr) => `${acc}${curr.saudaraPerempuan},`,'');
		const a1 = anak1.split('"');
		const a2 = anak2.split('"');
		const a3 = kakak1.split('"');
		const a4 = kakak2.split('"');
		const a5 = adik1.split('"');
		const a6 = adik2.split('"');
		const a7 = saudara1.split('"');
		const a8 = saudara2.split('"');

		axios.post("http://localhost:3001/api/simpanDats", {
			ids : id, kas : kakek, nas : nenek, ays : ayah, 
			ibs : ibu, sus : suamiIstri, ans : a1, ans2 : a2, 
			kaks1: a3, kaks2: a4, ads1: a5, ads2: a6, sas1 : a7, sas2 : a8});

		setShowInput4(false)
	 }

	 const deleteSaudara = (sora) => {
	 	axios.delete(`http://localhost:3001/api/deleteSaudara/${sora}`)
	 	.then(() => {
	 		console.log("kehapus nih");
	 	})
	 }


	useEffect(()=>{
		axios.get("http://localhost:3001/api/lihat")
		.then((res)=>{
			setHasil(res.data);
		});

	}, []);

	useEffect(() => {
		axios.get(`http://localhost:3001/api/hubungan_laki_laki/${id}`)
		.then((res) => {
			setHubLaki(res.data);
		})
	}, [])


	useEffect(() => {
		axios.get(`http://localhost:3001/api/hubungan_perempuan/${id}`)
		.then((res) => {
			setHubPerempuan(res.data);
		})
	}, [])

	useEffect(() => {
		axios.get('http://localhost:3001/api/datsHubungan')
		.then((res) => {
			setTampil(res.data);
		})
	}, [])




	return(
		<>
		<Container>
		<br />
		<Modal
		        size="lg"
		        show={showInput4}
		        onHide={() => setShowInput4(false)}
		        aria-labelledby="example-modal-sizes-title-lg">
		        <Modal.Header closeButton>
		          <Modal.Title id="example-modal-sizes-title-lg">
		           Silahkan Masukkan Daftar Hubungan Yang Ingin Anda Buat.
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        <Container>
		        <Row>
		        <Col>
		        <Form.Group className="mb-3" >
					<Form.Label>Nama Lengkap</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setId(event.target.value);}} >
					<option value="" selected disabled hidden>Pilih Nama Anda</option>
					{hasil.map((nano) => {
						return (
							<option value={nano.id}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>	
				 <Form.Group className="mb-3" >
					<Form.Label>Kakek</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setKakek(event.target.value);}} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubLaki.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				 <Form.Group className="mb-3" >
					<Form.Label>Nenek</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setNenek(event.target.value);}} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubPerempuan.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>Ayah</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setAyah(event.target.value);}} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubLaki.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>Ibu</Form.Label>
					<Form.Select aria-label="Default select example" onChange={(event) => {setIbu(event.target.value);}} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubPerempuan.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3" >
					<Form.Label>Suami/Istri </Form.Label>
					<Form.Control type="text" placeholder="Masukkan Nama Suami/Istri" onChange={(event) => {setSuamiIstri(event.target.value);}} />
				</Form.Group>			
				</Col>
				</Row>


				<Form.Label>Anak Laki-Laki</Form.Label>
				{anakLaki.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="anakLaki" onChange={e => handleInputChange(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubLaki.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{anakLaki.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {anakLaki.length - 1 === i && <Button variant="warning" onClick={handleAddClick}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}

				<Form.Label>Anak Perempuan</Form.Label>
				{anakPerempuan.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="anakPerempuan" onChange={e => handleInputChange2(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubPerempuan.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{anakPerempuan.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick2(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {anakPerempuan.length - 1 === i && <Button variant="warning" onClick={handleAddClick2}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}


				<Form.Label>Kakak Laki-Laki</Form.Label>
				{kakakLaki.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="kakakLaki" onChange={e => handleInputChange3(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubLaki.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{kakakLaki.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick3(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {kakakLaki.length - 1 === i && <Button variant="warning" onClick={handleAddClick3}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}


				<Form.Label>Kakak Perempuan</Form.Label>
				{kakakPerempuan.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="kakakPerempuan" onChange={e => handleInputChange4(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubPerempuan.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{kakakPerempuan.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick4(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {kakakPerempuan.length - 1 === i && <Button variant="warning" onClick={handleAddClick4}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}

				<Form.Label>Adik Laki-Laki</Form.Label>
				{adikLaki.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="adikLaki" onChange={e => handleInputChange5(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubLaki.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{adikLaki.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick5(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {adikLaki.length - 1 === i && <Button variant="warning" onClick={handleAddClick5}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}

				<Form.Label>Adik Perempuan</Form.Label>
				{adikPerempuan.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="adikPerempuan" onChange={e => handleInputChange6(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubPerempuan.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{adikPerempuan.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick6(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {adikPerempuan.length - 1 === i && <Button variant="warning" onClick={handleAddClick6}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}

				<Form.Label>Saudara Laki-Laki</Form.Label>
				{saudaraLaki.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="saudaraLaki" onChange={e => handleInputChange7(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubLaki.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{saudaraLaki.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick7(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {saudaraLaki.length - 1 === i && <Button variant="warning" onClick={handleAddClick7}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}


				<Form.Label>Saudara Perempuan</Form.Label>
				{saudaraPerempuan.map((x, i) => {
					return(
						<>
				<Row className="g-2">
				<Col md>
				<Form.Group className="mb-3" >
					<Form.Select aria-label="Default select example" name="saudaraPerempuan" onChange={e => handleInputChange8(e, i)} >
					<option value="" selected disabled hidden>Tidak Ada</option>
					{hubPerempuan.map((nano) => {
						return (
							<option value={nano.nama}>{nano.nama}</option>
							);
					})};
					</Form.Select>
				</Form.Group>
				</Col>
				<Col md>
				{saudaraPerempuan.length !== 1 && <Button variant="danger"
                onClick={() => handleRemoveClick8(i)}>Hapus</Button>}
                &nbsp;
				&nbsp;
             	 {saudaraPerempuan.length - 1 === i && <Button variant="warning" onClick={handleAddClick8}>Tambah Opsi</Button>}
				</Col>
				</Row>
					</>
						)
				})}

				<Button variant="success" onClick={simpanData}>Simpan</Button>
				&nbsp;
				&nbsp;
				<Button variant="danger" onClick={() => {setShowInput4(false)}}>Batal</Button>

		        </Container>
		        </Modal.Body>
		      </Modal>

		<Row>
		<Col>
		<h1>Info Hubungan<Button variant="primary" style={{float: "right"}} onClick={() => {setShowInput4 (true)}}>Tambah Data</Button> </h1>
			<div style={{overflowY: "auto", height: "450px"}}>
			<Table responsive="sm">
				<thead>
				<tr>
				<th>Nama Lengkap</th>
				<th>Kakek</th>
				<th>Nenek</th>
				<th>Ayah</th>
				<th>Ibu</th>
				<th>Suami/Istri</th>
				<th>Anak Laki-Laki</th>
				<th>Anak Perempuan</th>
				<th>Kakak Laki-Laki</th>
				<th>Kakak Perempuan</th>
				<th>Adik Laki-Laki</th>
				<th>Adik Perempuan</th>
				<th>Saudara Laki-Laki</th>
				<th>Saudara Perempuan</th>
				<th className="text-center" colSpan="1">Action</th>
				</tr>
				</thead>
				<tbody>
				{tampil.map((sax) => {
					return(
						<tr>
						<td style={{display: "none"}}>{sax.id_hubungan}</td>
						<td>{sax.nama}</td>
						<td>{sax.kakek}</td>
						<td>{sax.nenek}</td>
						<td>{sax.ayah}</td>
						<td>{sax.ibu}</td>
						<td>{sax.suami_istri}</td>
						<td>{sax.anak_laki_laki}</td>
						<td>{sax.anak_perempuan}</td>
						<td>{sax.kakak_laki_laki}</td>
						<td>{sax.kakak_perempuan}</td>
						<td>{sax.adik_laki_laki}</td>
						<td>{sax.adik_perempuan}</td>
						<td>{sax.saudara_laki_laki}</td>
						<td>{sax.saudara_perempuan}</td>
						<td className="text-center" onClick={() => {deleteSaudara(sax.id_hubungan)}}><Button variant="danger">Delete</Button></td>
						</tr>
						)
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

export default InputHubunganKeluarga;