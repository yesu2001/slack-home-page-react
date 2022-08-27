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
	width: 550px;
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


const Communication = () => {
	return (
		<Container>
			<ContainerContent>
				<HeadingTwo>Choose How you want to work</HeadingTwo>
				<Para>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</Para>
				<Link>Learn more about flexible Communication</Link>
			</ContainerContent>
			<ContainerVideo>
				<Video autoplay="" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm" type="video/webm"/><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility.mp4" type="video/mp4"/></Video>
			</ContainerVideo>
		</Container>
	)
}


export default Communication;