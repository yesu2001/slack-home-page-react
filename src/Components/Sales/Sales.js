import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
	font-family: 'Nunito Sans', sans-serif;
	padding: 50px 0 25px 0;
`;

const Heading = styled.h2`
	padding: 20px 0;
	font-size: 50px;
	font-weight: 700;
`;

const Para = styled.p`
	padding: 10px 0 40px 0;
	font-weight: bold;
	letter-spacing: 1.2px;
`;

const Buttons = styled.div`
	margin: 5px 5px;
`;

const Button = styled.button`
	position: relative;
	border:none;
	margin-right:10px;
	letter-spacing: 1.3px;
	background: ${props => props.primary ? "#541554" : "white"};
	color: ${props => props.primary ? "white" : "#541554"};
	border: 1px solid #541554;
	padding: 20px 25px;
	border-radius: 5px;
	&:hover{
		cursor:pointer;
		background: ${props => props.primary ? '#541554':'white' };
		border-width: ${props => props.primary ? '1px': '2px'}
		margin: -2px;
	}
`;

const Sales = () => {
	return (
		<Container>
			<Heading>Teams Large and small rely on Slack</Heading>
			<Para>Slack securely scales up to support collaboration at the world's biggest companies</Para>
			<Buttons>
				<Button primary>MEET SLACK FOR ENTERPRISE</Button>
				<Button secondary>TALK TO SALES</Button>
			</Buttons>
		</Container>
	)
}


export default Sales;