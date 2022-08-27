import styled from 'styled-components';


const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #FFFFFF;
	padding-bottom: 20px;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	height: 400px;
	margin-bottom: 50px;
	
`;

const  ContainerVideo = styled.div`
	flex:55%;
	position: relative; 
	left: 0;
`;

const Vlink = styled.a`
	
`;

const Video = styled.video`
	width: 750px;
	padding-right: 20px;
`;

const ContainerContent = styled.div`
	flex:45%;
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
`;


const Para = styled.p`
	position: relative;
	max-width: 600px;
	line-height: 1.5;
	padding: 20px 0 20px 0;
	font-size: 25px;
	color: black;
	font-style: italic;
`;

const Link = styled.span`
	margin: 10px 0;
	color: #1264a3;
	&:hover {
		cursor:pointer;
	}
`;

const Name = styled.p`
	font-weight: bold;
`;

const Span = styled.span``;


const Stories = () => {
	return (
		<Main>
			<Container>
				<ContainerVideo>
					<Vlink href="https://www.youtube.com/embed/IDrUzXubiiQ">
						<Video autoplay="" loop="" muted="" playsinline="">
							<source src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4" type="video/mp4"/></Video>
						</Vlink>
				</ContainerVideo>
				<ContainerContent>
					<Para>‘We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</Para>
					<Name>Mark Smith</Name>
					<Span>Senior Technical Product Manager, T-Mobile</Span>
					<Link href="#">See more customer stories</Link>
				</ContainerContent>
			</Container>
			<p> Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
		</Main>
	)
}


export default Stories;