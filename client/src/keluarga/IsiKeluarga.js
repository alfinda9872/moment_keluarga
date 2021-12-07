import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Image, Container, Row, Col, Card, Table} from 'react-bootstrap';
import Moment from 'react-moment';


const IsiKeluarga = (props) => {
	const [tampilHal, setTampilHal]  = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3001/api/tampilKeluarga/${props.id}`)
		.then((res) => {
			setTampilHal(res.data);
		})
	},[])

	return(
		<>
		<Container>
		<Row>
		{tampilHal.map((s, index) => {
		//anak laki
      	return(
      		<>
      	<Col>
      	<Card.Img src={s.foto} />
        </Col>
        </>
        )})}
        </Row>
        <Row>
        {tampilHal.map((s, index) => {
        	return(
        <>
        <Col sm={6}>
      	<br />
      	<h3>Biodata</h3>
      	<hr />
      	<table border="0" width="100%">
      		<tr>
      			<th>Nama</th>
      			<td>:</td>
      			<td>{s.nama}</td>
      		</tr>
      		<tr>
      			<th>Tanggal Lahir</th>
      			<td>:</td>
      			<td><Moment format="D MMM YYYY">{s.tanggal_lahir}</Moment></td>
      		</tr>
      		<tr>
      			<th>Tempat Lahir</th>
      			<td>:</td>
      			<td>{s.tempat_lahir}</td>
      		</tr>
      		<tr>
      			<th>Jenis Kelamin</th>
      			<td>:</td>
      			<td>{s.jenis_kelamin}</td>
      		</tr>
      	</table>
      	</Col>
      	<Col sm={6}>
      	<br />
      	<h3>Pendidikan</h3>
      	<hr />
      	<table border="0" width="100%">
      		<tr>
      			<th>TK</th>
      			<td>:</td>
      			<td>{s.tk}</td>
      		</tr>
      		<tr>
      			<th>SD</th>
      			<td>:</td>
      			<td>{s.sd}</td>
      		</tr>
      		<tr>
      			<th>SMP</th>
      			<td>:</td>
      			<td>{s.smp}</td>
      		</tr>
      		<tr>
      			<th>SMK / SMA</th>
      			<td>:</td>
      			<td>{s.smk}</td>
      		</tr>
      		<tr>
      			<th>Pendidikan Tinggi</th>
      			<td>:</td>
      			<td>{s.pendidikan_tinggi}</td>
      		</tr>
      	</table>
      	</Col>
      	</>
        		)
        })}
      	</Row>
      	<br />
      	<Row>
      	<br />
      	<br />
      	<h3>Hubungan Keluarga</h3>
      	<hr />
      	{tampilHal.map((s, index) => {
      	const al = s.anak_laki_laki;
		const als = al.split(',');
		const al_ars = Array.from(als).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//anak perempuan
		const ap = s.anak_perempuan;
		const aps = ap.split(',');
		const ap_ars = Array.from(aps).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//kakak laki
		const kl = s.kakak_laki_laki;
		const kls = kl.split(',');
		const kl_ars = Array.from(kls).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//kakak perempuan
		const kp = s.kakak_perempuan;
		const kps = kp.split(',');
		const kp_ars = Array.from(kps).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//adik laki
		const adl = s.adik_laki_laki;
		const ads = adl.split(',');
		const adl_ars = Array.from(ads).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//adik perempuan
		const adp = s.adik_perempuan;
		const adps = adp.split(',');
		const adps_ars = Array.from(adps).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//saudara laki
		const sdl = s.saudara_laki_laki;
		const sdls = sdl.split(',');
		const sdl_ars = Array.from(sdls).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
		//saudara perempuan
		const sps = s.saudara_perempuan;
		const spss = sps.split(',');
		const sps_ars = Array.from(spss).map((a) => {return (<li style={{listStyle: 'none'}}>{a}</li>)});
      	return(
      	<>
      	<Col sm={6}>
      	<table border="0" width="80%">
      		<tr>
      			<th>Kakek</th>
      			<td>:</td>
      			<td>{s.kakek}</td>
      		</tr>
      		<tr>
      			<th>Nenek</th>
      			<td>:</td>
      			<td>{s.nenek}</td>
      		</tr>
      		<tr>
      			<th>Ayah</th>
      			<td>:</td>
      			<td>{s.ayah}</td>
      		</tr>
      		<tr>
      			<th>Ibu</th>
      			<td>:</td>
      			<td>{s.ibu}</td>
      		</tr>
      		<tr>
      			<th>Suami / Istri</th>
      			<td>:</td>
      			<td>{s.suami_istri}</td>
      		</tr>
      		<tr>
      			<th>Anak Laki-Laki</th>
      			<td>:</td>
      			<td>{al_ars}</td>
      		</tr>
      		<tr>
      			<th>Anak Perempuan</th>
      			<td>:</td>
      			<td>{ap_ars}</td>
      		</tr>
      		<tr>
      			<th>Kakak Laki-Laki</th>
      			<td>:</td>
      			<td>{kl_ars}</td>
      		</tr>
      	</table>
      	</Col>
      		<Col sm={6}>
      		<table border="0" width="75%">
      		<tr>
      			<th>Kakak Perempuan</th>
      			<td>:</td>
      			<td>{kp_ars}</td>
      		</tr>
      		<tr>
      			<th>Adik Laki-Laki</th>
      			<td>:</td>
      			<td>{adl_ars}</td>
      		</tr>
      		<tr>
      			<th>Adik Perempuan</th>
      			<td>:</td>
      			<td>{adps_ars}</td>
      		</tr>
      		<tr>
      			<th>Saudara Laki-Laki</th>
      			<td>:</td>
      			<td>{sdl_ars}</td>
      		</tr>
      		<tr>
      			<th>Saudara Perempuan</th>
      			<td>:</td>
      			<td>{sps_ars}</td>
      		</tr>
      	</table>
      	</Col>
      	</>
      	)
      	})}
		</Row>
		</Container>
		</>
		)

}

export default IsiKeluarga;