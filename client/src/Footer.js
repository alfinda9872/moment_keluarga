import React from 'react';


function Footer(){
	
	const myStyle = {
		backgroundColor : "black",
		textAlign : "center",
		left : 0,
		right :0,
		bottom: 0,
		position : "absolute"
	}

	return(

       <h1 style={myStyle} className="fixed-bottom">Coba Footer Desu</h1>
		);
}

export default Footer;