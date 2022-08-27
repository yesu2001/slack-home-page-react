import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 30px 80px 30px 80px;
	font-family: 'Montserrat', sans-serif;
	background-color: #f4ede4;
`;

const  ContainerVideo = styled.div`
	flex:50%;
`;

const Video = styled.video`
	width: 400px;
	height: 400px;
`;

const ContainerContent = styled.div`
	flex:50%;
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
`;

const HeadingTwo = styled.h2`
	font-size: 50px;
	font-weight: normal;
`;

const Para = styled.p`
	position: relative;
	max-width: 500px;
	line-height: 1.5;
	padding: 20px 0 20px 0;
	font-size: 17px;
	color: black;
`;

const Link = styled.span`
	margin: 5px 0;
	color: #1264a3;
	&:hover {
		cursor:pointer;
	}
`;


const Channel = () => {
	return (
		<Container>
			<ContainerVideo>
				<Video autoplay="" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness-mobile.webm" type="video/webm" /><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness-mobile.mp4" type="video/mp4" /></Video>
			</ContainerVideo>
			<ContainerContent>
				<HeadingTwo>Bring your team together</HeadingTwo>
				<Para>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</Para>
				<Link>Learn more about channels</Link>
			</ContainerContent>
		</Container>
	)
}


export default Channel;