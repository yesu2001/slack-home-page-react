import styled from 'styled-components';

const Container = styled.div`
	padding: 40px 50px 10px 50px; 
`;

const Social = styled.div`
	display: flex;
	justify-content: space-between;
	align-items:center;
`;

const TradeMark = styled.div`
	padding-top: 40px;
	font-size: 13px;
`;

const Lists = styled.ul`
	display:flex;
	align-items:center;
`;

const List = styled.li`
	list-style:none;
	display:flex;
	align-items:center;
	margin: 0 10px;
	font-size: 15px;
	font-weight:bold;
	&:hover {
		cursor:pointer;
		color: #2266ee;
	}
`;

const Image = styled.img`
	width: 20px;
	margin: 0 ${props => props.primary ? '5px':'0px'}
	&:hover {
		cursor:pointer;
		color: #2266ee;
	}
`;


const Footer = () => {
	return (
		<Container>
			<Social>
				<Lists>
					<List>Status</List>
					<List>Privacy</List>
					<List>Terms</List>
					<List>Cookie preferences</List>
					<List>Conact us</List>
					<List><Image primary src="https://img.icons8.com/ios/50/000000/globe--v1.png"/>Change Region</List>
				</Lists>
				<Lists>
					<List style={{color:'#2266ee'}}><Image primary src="https://img.icons8.com/ios/90/2266EE/download-2--v1.png"/> Download Slack</List>
					<List><Image src="https://img.icons8.com/ios-glyphs/90/000000/twitter--v1.png"/></List>
			      	<List><Image src="https://img.icons8.com/material-rounded/96/000000/youtube-play.png"/></List>			      	
			      	<List><Image src="https://img.icons8.com/ios-glyphs/90/000000/linkedin.png"/></List>
					<List><Image src="https://img.icons8.com/glyph-neue/64/000000/facebook-new.png"/></List>
				</Lists>
			</Social>
			<TradeMark>
				<p>©2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
			</TradeMark>
		</Container>
	)
}


export default Footer;