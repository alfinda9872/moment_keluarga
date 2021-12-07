const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors'); 
const mysql = require('mysql')
const multer = require('multer');
const path = require('path');




const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'silsilah_keluarga',
});


app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


app.get("/api/lihat", (req, res) => {
	const sqlBaca = "SELECT * FROM biodata_keluarga";
	db.query(sqlBaca, (err, result) => {
		res.send(result);
	})
});

app.get("/api/lihat_pendidikan", (req, res) =>{
	const sqlTampil = "SELECT biodata_keluarga.nama, info_pendidikan_keluarga.id_pendidikan ,info_pendidikan_keluarga.id, info_pendidikan_keluarga.tk, info_pendidikan_keluarga.sd, info_pendidikan_keluarga.smp, info_pendidikan_keluarga.smk, info_pendidikan_keluarga.pendidikan_tinggi FROM biodata_keluarga JOIN info_pendidikan_keluarga WHERE biodata_keluarga.id = info_pendidikan_keluarga.id";
	const sqlTest = "SELECT id FROM info_pendidikan_keluarga JOIN biodata_keluarga WHERE id.biodata_keluarga = id.info_pendidikan_keluarga";
	db.query(sqlTampil, (err, result) =>{
		res.send(result);
	})
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/api/tambah", upload.single("gambar"), (req, res) =>{

	const nama = req.body.nama;
	const tanggal_lahir = req.body.tanggal_lahir;
	const tempat_lahir = req.body.tempat_lahir;
	const jenis_kelamin = req.body.jenis_kelamin;
	const alamat_gambar = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;

	const sqlQuery = "INSERT INTO biodata_keluarga (nama,tanggal_lahir,tempat_lahir,jenis_kelamin, foto) VALUES (?,?,?,?,?);"
	db.query(sqlQuery, [nama, tanggal_lahir, tempat_lahir, jenis_kelamin, alamat_gambar], (err,result) =>{
		console.log(err);
	});

	
});


app.put("/api/newGambar", upload.single("pic"), (req,res) =>{
	const idas = req.body.ida;
	const alamat_gambar_baru = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;

	const sqlUbahGambar = "UPDATE biodata_keluarga SET foto = ? WHERE id = ?";
	db.query(sqlUbahGambar, [alamat_gambar_baru, idas], (err, result) =>{
		console.log(err);
	});
});


//kumpulan gambar untuk album
app.post("/api/isiGambar", upload.array("foto"), (req, res) => {
  // save filename nya ke database
 const idw = req.body.id_albums;
 const reqFile = [];
 const alamat_gambar_baru = req.protocol + "://" + req.get("host");
 for (var i =0; i < req.files.length; i++){
 	reqFile.push(alamat_gambar_baru +   "/uploads/" + req.files[i].filename);
 	console.log(reqFile);
 	 const qa = "INSERT INTO gambar_keluarga (id_album, gambar) VALUES (?,?);"
 	 db.query(qa, [idw, reqFile[i]], (err,result) =>{
 	console.log(err);
 	})

 }

}); 

app.post("/api/simpanAlbum", upload.single("cover"), (req, res) => {
	const albums = req.body.nama_album;
	const lokas = req.body.lokasiAlbum;
	const alamat_cover_album = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
	const tanggalAlbum = req.body.tanggal_album;
	const inputAlbum = "INSERT INTO album_keluarga (nama_album,lokasi,cover_album,tanggal_buat) VALUES (?,?,?,?)";
	db.query(inputAlbum, [albums, lokas, alamat_cover_album, tanggalAlbum], (err,result) => {
		console.log(err);
	})
})

app.post ("/api/simpanMoment", upload.single("gams"), (req, res) => {
	const juds = req.body.jud;
	const cers = req.body.cer;
	const alamat_gambar_moment = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
	const tans = req.body.tang;
	const inputMoment = "INSERT INTO moment_keluarga (judul_moment, isi_moment, gambar_moment, tanggal_post) VALUES (?,?,?,?)";
	db.query(inputMoment, [juds, cers, alamat_gambar_moment, tans], (err, result) => {
		console.log(err);
	})
})

app.put("/api/ubah", (req, res) => {
	const ids = req.body.id;
	const namaa = req.body.nama; 
	const tanggas = req.body.tanggal_lahir;
	const tempats = req.body.tempat_lahir;
	const sqlUbah = "UPDATE biodata_keluarga SET nama = ?, tanggal_lahir = ?, tempat_lahir = ? WHERE id = ?";
	db.query(sqlUbah, [namaa, tanggas, tempats, ids], (err, result) =>{
		console.log(err);
	})
});


app.put("/api/ubahPen", (req, res) =>{
	const var1 = req.body.idl;
	const var2 = req.body.tks;
	const var3 = req.body.sds;
	const var4 = req.body.smps;
	const var5 = req.body.smks;
	const var6 = req.body.pens;

	const sqlUbahPen = "UPDATE info_pendidikan_keluarga SET tk = ?, sd = ?, smp = ?, smk = ?, pendidikan_tinggi = ? WHERE id_pendidikan = ?";
	db.query(sqlUbahPen, [var2, var3, var4, var5, var6, var1], (err, result) => {
		console.log(err);
	})
});

app.delete("/api/delete/:id", (req, res) => {
	const ids = req.params.id;
	const sqlHapus = "DELETE FROM biodata_keluarga WHERE id = ?";
	db.query(sqlHapus, ids, (err, result) => {
		if (err) console.log(err);
	});
});


app.delete("/api/deletePen/:id_pendidikan", (req, res) => {
	const idw = req.params.id_pendidikan;
	const sqlHapus2 = "DELETE FROM info_pendidikan_keluarga WHERE id_pendidikan = ?";
	db.query(sqlHapus2, idw, (err, result) => {
		if (err) console.log(err);
	});
});

app.post("/api/tambah_pendidikan", (req, res) =>{
	const id_pen = req.body.idp;
	const tk_pen = req.body.ttk;
	const sd_pen = req.body.ssd;
	const smp_pen = req.body.ssmp;
	const smk_pen = req.body.ssmk;
	const tinggi_pen = req.body.ptinggi;

	const sqlTambah = "INSERT INTO info_pendidikan_keluarga (id, tk, sd, smp, smk, pendidikan_tinggi) VALUES (?,?,?,?,?,?)";
	db.query(sqlTambah, [id_pen, tk_pen, sd_pen, smp_pen, smk_pen, tinggi_pen], (err, result) =>{
		if(err) console.log(err);
	})
})





//data album
app.get("/api/tanggalAlbum", (req, res) => {
	const datas = "SELECT DISTINCT(tanggal_buat) as tan, GROUP_CONCAT(id_album, '') as ids, GROUP_CONCAT(lokasi SEPARATOR '*') as lokas, GROUP_CONCAT(nama_album SEPARATOR '/') as nam, GROUP_CONCAT(cover_album SEPARATOR '™') as cover FROM album_keluarga GROUP BY tan ORDER BY id_album DESC";
	db.query(datas, (err, result) => {
		res.send(result);
	})
})

app.get("/api/albumHome", (req, res) => {
	const datas = "SELECT * FROM album_keluarga ORDER BY id_album DESC LIMIT 4";
	db.query(datas, (err, result) => {
		res.send(result);
	})
})

app.get("/api/lihatIsiAlbum/:id_album", (req, res) => {
	const id = req.params.id_album;
	const lihat = "SELECT * FROM gambar_keluarga WHERE id_album = ? ORDER BY id_gambar DESC";
	db.query(lihat, [id], (err, result) => {
		res.send(result);
	})
})


//gambar multi keluarga
app.delete("/api/deleteIsiAlbum/:cw", (req, res) => {
	const idg = req.params.cw;
	const hap = "DELETE FROM gambar_keluarga WHERE id_gambar = ?";
	db.query(hap, idg, (err, result) => {
		if(err) console.log(err);
	})
})


app.delete("/api/hapusAlbum/:id", (req, res) => {
	const idm = req.params.id;
	const hav = "DELETE FROM album_keluarga WHERE id_album = ?";
	db.query(hav, idm, (err, result) => {
		if (err) console.log(err);
	})
})


app.get("/api/tampilMoment", (req, res) => {
	const tampil = "SELECT * FROM moment_keluarga order by id_moment DESC";
	db.query(tampil, (err, result) => {
		res.send(result);
	})
})

//select daftar hubungan
app.get("/api/lihat_hubungan", (req, res) =>{
	const hub = "SELECT * FROM hubungan_keluarga";
	db.query(hub, (err, result) => {
		res.send(result);
	})
})

app.get("/api/hubungan_laki_laki/:id", (req, res) => {
	const vp = req.params.id;
	const hub2 = "SELECT * FROM biodata_keluarga WHERE jenis_kelamin = 'Pria' AND NOT id = ? ORDER BY id ASC";
	db.query(hub2, [vp] ,(err, result) => {
		res.send(result);
	})
})

app.get("/api/hubungan_perempuan/:id", (req, res) => {
	const vs = req.params.id;
	const hub3 = "SELECT * FROM biodata_keluarga WHERE jenis_kelamin = 'Wanita' AND NOT id = ? ORDER BY id ASC";
	db.query(hub3, [vs] , (err, result) => {
		res.send(result);
	})
})

//hubungan keluarga
app.post("/api/simpanDats", (req, res) => {

	const data1 = req.body.ids;
	const data2 = req.body.kas;
	const data3 = req.body.nas;
	const data4 = req.body.ays;
	const data5 = req.body.ibs;
	const data6 = req.body.sus;
	const data7 = req.body.ans;
	const data8 = req.body.ans2;
	const data9 = req.body.kaks1;
	const data10 = req.body.kaks2;
	const data11 = req.body.ads1;
	const data12 = req.body.ads2;
	const data13 = req.body.sas1;
	const data14 = req.body.sas2;


	const inputs = "INSERT INTO hubungan_keluarga (id, kakek, nenek, ayah, ibu, suami_istri, anak_laki_laki, anak_perempuan, kakak_laki_laki, kakak_perempuan, adik_laki_laki, adik_perempuan, saudara_laki_laki, saudara_perempuan) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	db.query(inputs, [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14], (err, result) => {
		console.log(err);
	});
})

app.get("/api/datsHubungan", (req, res) => {
	const hubs = "SELECT hubungan_keluarga.id_hubungan, biodata_keluarga.nama, hubungan_keluarga.kakek, hubungan_keluarga.nenek, hubungan_keluarga.ayah, hubungan_keluarga.ibu, hubungan_keluarga.suami_istri, hubungan_keluarga.anak_laki_laki, hubungan_keluarga.anak_perempuan, hubungan_keluarga.kakak_laki_laki, hubungan_keluarga.kakak_perempuan, hubungan_keluarga.adik_laki_laki, hubungan_keluarga.adik_perempuan, hubungan_keluarga.saudara_laki_laki, hubungan_keluarga.saudara_perempuan FROM biodata_keluarga JOIN hubungan_keluarga ON biodata_keluarga.id = hubungan_keluarga.id ORDER BY nama ASC";
	db.query(hubs, (err, result) => {
		res.send(result);
	})
})


app.delete("/api/deleteSaudara/:id_hubungan", (req,result) => {
	const ass = req.params.id_hubungan
	const haps = "DELETE FROM hubungan_keluarga WHERE id_hubungan = ?";
	db.query(haps, ass, (err, result) => {
		console.log(err);
	})
})


//hal keluarga
app.get("/api/lihatKeluarga", (req, res) => {
	const lihat = "SELECT * FROM biodata_keluarga ORDER BY id ASC";
	db.query(lihat, (err, result) => {
		res.send(result);
	})
})

app.get("/api/lihatKeluargaHome", (req, res) => {
	const lihat = "SELECT * FROM biodata_keluarga ORDER BY id ASC LIMIT 4";
	db.query(lihat, (err, result) => {
		res.send(result);
	})
})


app.get("/api/tampilKeluarga/:id", (req,res) => {
	const idaw = req.params.id;
	const quar = "SELECT * FROM biodata_keluarga JOIN info_pendidikan_keluarga ON biodata_keluarga.id = info_pendidikan_keluarga.id JOIN hubungan_keluarga ON biodata_keluarga.id = hubungan_keluarga.id WHERE biodata_keluarga.id = ?";
	db.query(quar, [idaw], (err, result) => {
		res.send(result);
	})
})

//contoh
app.get("/api/anak", (req, res) => {
	const panggil = "select TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(c.coba, ',', NS.n), ',', -1)) as coba from ( select 1 as n union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9 union all select 10 ) NS inner join contoh c ON NS.n <= CHAR_LENGTH(c.coba) - CHAR_LENGTH(REPLACE(c.coba, ',', '')) + 1 order by id asc";
	db.query(panggil, (err, result) => {
		res.send(result);
	})
})


app.listen(3001, () =>{
	console.log('selamat datang')
});