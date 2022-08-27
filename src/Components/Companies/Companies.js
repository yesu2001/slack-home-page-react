import Deliveroo from '../sources/Images/deliveroo.png'
import ibm from '../sources/Images/ibm.png'
import xero from '../sources/Images/logo-xero.png'
import seek from '../sources/Images/logo-seek.png'
import rea from '../sources/Images/rea.png'
import rmit from '../sources/Images/rmit.png'
import styled from 'styled-components';

const StyledCompanies = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	padding: 40px 0;
	background-color: #f4ede4;

`;

const Heading = styled.h1`
	font-size: 0.9rem;
	color: black;
`;

const Logos = styled.img`
	margin: 30px 30px;
	max-width: 100px;
	height: auto;
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	@media acreen (max-width: 1081px) {
		flex:wrap;
`;

const Companies = () => {
	return (
		<StyledCompanies>
			<Heading>TRUSTED BY COMPANIES ALL OVER THE WORLD</Heading>
			<Container>
				<Logos src={Deliveroo} alt=' deliveroo logo'/>
				<Logos src={ibm} alt='ibm logo'/>
				<Logos src={xero} alt='xero logo'/>
				<Logos src={seek} alt='seek logo'/>
				<Logos src={rea} alt='rea logo'/>
				<Logos src={rmit} alt='rmit logo'/>
			</Container>
		</StyledCompanies>
	)
}


export default Companies;