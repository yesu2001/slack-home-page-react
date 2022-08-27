import styled from 'styled-components';
import speed from '../sources/Videos/speed.webm'

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 30px 80px 30px 80px;
	font-family: 'Montserrat', sans-serif;
	background-color: #f4ede4;

	@media screen and (max-width: 1081px) {
		flex-direction: column;
	}
	
`;

const  ContainerVideo = styled.div`
	flex:50%;
`;

const Video = styled.video`
	max-width: 550px;
	height: auto;
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

const Platform = () => {
	return (
		<Container>
			<ContainerVideo>
				<Video autoplay>
					<source src={speed} type="video/webm"/>
				</Video>
			</ContainerVideo>
			<ContainerContent>
				<HeadingTwo>Move faster with your tools in one place</HeadingTwo>
				<Para>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</Para>
				<Link>Learn more about Slack platform</Link>
			</ContainerContent>
		</Container>
	)
}


export default Platform;