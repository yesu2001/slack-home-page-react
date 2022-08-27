import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	box-sizing: border-box;
	height: 400px;
	background-color: #4A154B;
	clip-path: ellipse(75% 100% at 52% 0%);
	margin-top: 20px;
	margin-bottom: 50px;
`;

const Heading = styled.h2`
	color: #fff;
	font-size: 60px;
`;

const Buttons = styled.div`
	
`;

const Button = styled.button`
	border: 1px solid ${props => props.primary ? 'transparent' : 'white'};
	border-radius: 3px;
	padding: 15px 20px;
	margin: 20px 10px;
	background-color: ${props => props.primary ? "white":"#4A154B"};
	color: ${props => props.primary ? "#4A154B":"white"};
	&:hover {
		cursor: pointer;
	}

`;


const Banner2 = () => {
	return (
		<Container>
			<Heading>Welcome to your new digital HQ.</Heading>
			<Buttons>
				<Button primary>TRY FOR FREE</Button>
				<Button>TALK TO SALES</Button>
			</Buttons>
		</Container>
	)
}


export default Banner2;