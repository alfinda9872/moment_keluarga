import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import logo from '../foto/1.jpg';
import logo2 from '../foto/2.jpg';
import logo3 from '../foto/3.jpg';
import logo4 from '../foto/4.jpg';
import logo5 from '../foto/5.jpg';
import logo6 from '../foto/6.jpg';
import kel1 from '../foto/kel1.jpg';
import kel2 from '../foto/kel2.jpg';
import {Container, Col, Row, Card, Button, CardGroup, Image} from 'react-bootstrap';
import axios from 'axios';
import FotoKeluarga from '../keluarga/FotoKeluarga';
import HalKeluarga from '../keluarga/HalKeluarga';
import Bounce from 'react-reveal/Bounce';

function Home(){
	const [tampil, setTampil] = useState([]);
	const [isiHal, setIsiHal] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/api/albumHome")
		.then((res) => {
			setTampil(res.data);
		})
	},[])

	useEffect(() => {
		axios.get("http://localhost:3001/api/lihatKeluargaHome")
		.then((res) => {
			setIsiHal(res.data);
		})
	},[])

	return( 
		<>
		<Carousel variant='white'>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={kel1} alt="First slide" width="1024" height="720" style={{objectFit: 'cover'}}
		    />
		    <Carousel.Caption>
		      <h3>Keluarga Antapanil</h3>
		    </Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={kel2} alt="First slide" width="1024" height="720" style={{objectFit: 'cover'}}
		    />
		    <Carousel.Caption>
		      <h3>Keluarga Antapani</h3>
		     
		    </Carousel.Caption>
		  </Carousel.Item>
		    </Carousel>

		    <Container className="text-center">
		    <Row>
		    <Col className="fs-1" style={{fontFamily: "Arial"}}>Selamat Datang di Website Keluarga Besar Kami</Col>
		    </Row>
		    <Row>
		    <Col style={{textAlign: "justify", wordBreak: "break-word", fontStyle: "italic"}}>
		    <p className="fs-5">"Website ini akan menampilkan beberapa kenangan menarik dari keluarga besar Rumah Kawali berdasarkan tahun ke tahun. Kenangan
		    tersebut terdiri dari Acara Ulang Tahun, Libur Lebaran Bersama, maupun kenangan lainnya. Dengan adanya website ini, kami berharap
		    kenangan-kenangan tersebut dapat dilihat kembali secara terseluruh dan terstruktur"</p>
		    </Col>
		    </Row>
		    </Container>

		    <div style={{padding: '80px', width: '100%', height: '50%' , backgroundImage: `url(${kel1})`, backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
		    <center>
		    <p style={{color: 'white', fontSize: '80px', textDecoration: 'bold'}}><b>BIG FAMILY</b></p>
		    </center>
		    </div>
		    <br />
		    <br />
		    
		    <Row className="text-center">
		    <p className="fs-2 text-uppercase"><b>Kumpulan Kegiatan</b></p>
		    <hr style={{width: '100%'}}/>
		    </Row>
		    <Container>
		    <center>
		     <Row>
		    <CardGroup>
			   {tampil.map((as, index) => {
			    		return (
						<>
						<Col xs lg="3">
						<Card>
						  <Card.Img variant="top" src={as.cover_album} width="350" height="350" style={{objectFit: 'cover'}}/>
						  <Card.Body>
						    <Card.Title style={{textTransform: 'capitalize'}}>{as.nama_album}</Card.Title>
						    <Card.Text>
						      {as.tanggal_buat}
						    </Card.Text>
						  </Card.Body>
						</Card>
					    </Col>
						</>
						)})}
		    </CardGroup>
		    </Row>
		    <Row>
		    <Col>
		    <br />
		    <Button variant="primary" href="/FotoKeluarga">Lihat Selengkapnya</Button>
		    </Col> 
		    </Row>
		    </center>
		    </Container>
		    <hr />


		    <div style={{padding: '80px', width: '100%', height: '50%' , backgroundImage: `url(${kel2})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
		    <center>
		    <p style={{color: 'white', fontSize: '50px', textDecoration: 'bold'}}><b>ANTAPANI</b></p>
		    </center>
		    </div>
		    <br />
		    <br />

		    <Row className="text-center">
		    <p className="fs-2 text-uppercase"><b>Moment Lainnya</b></p>
		    <hr style={{width: '100%'}}/>
		    <br />
		    </Row>
		    <Container>
			<Row>
				{isiHal.map((a) => {
					return(
					<Col>
					<Bounce>
					<center>
						<Image src={a.foto} width="131" height="130" style={{objectFit: 'cover'}} roundedCircle/>
						<br />
					<p className="text-center">{a.nama}</p>
					</center>
					</Bounce>
					</Col>
					)
				})}
		</Row>
		<Row>
		<center>
		    <Col>
		    <br />
		    <Button variant="primary" href="/HalKeluarga">Lihat Selengkapnya</Button>
		    </Col>
		    </center> 
		    </Row>
		</Container>


		    </>


	);
}

export default Home;