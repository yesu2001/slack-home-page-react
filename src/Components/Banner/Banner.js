import styled from 'styled-components';

const StyleBanner = styled.div`
	padding: 60px 0 60px 80px;
	background-color: #541554;
	display: flex; 
	color:white;

	@media screen and (max-width: 1081px) {
    	flex-direction:column;
    	justify-content:center;
    	align-items:center;
    	text-align:center;
	}
`;

const BannerLeft = styled.div`
	flex: 55%;
	@media screen and (max-width: 1081px) {
    	flex-direction:column;
    	justify-content:center;
    	align-items:center;
    	text-align:center;
	}
`;

const BannerRight = styled.div`
	flex: 45%;
`;

const Video = styled.video`
	width: 700px;
`;

const Heading = styled.h1`
	font-weight: 900;
    line-height: 1.0625;
    font-size: 3.75rem;
`;

const Para = styled.p`
	padding: 10px 0;
	font-size: 2vw;	
`;


const Buttons = styled.button`
	display: flex;
	align-items:center;
	justify-content:center;
	padding: 5px;
	border:none;
	width: 250px;
	border-radius: 5px;
	color: #541554;
	font-weight: 600;
	background-color: ${props => props.primary ? '#4285f4':'white'};
	color: ${props => props.primary ? 'white': '#541554'};
	margin-bottom: 20px;
	margin-right: 10px;
	&:hover {
		cursor:pointer;
	}

`;

const Div = styled.div`
	@media screen (max-width: 1081px) {
		justify-content:center;
		align-items:center;
	}
`;

const Strong = styled.strong`
	letter-spacing: 1.5px;
`;

const Banner = () => {
	return (
		<StyleBanner>
			<BannerLeft>
				<Heading>Great teamwork starts with a <span style={{color: '#ecb22e'}}>digital HQ</span></Heading>
				<Para>With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</Para>
				<Div style={{paddingTop: '50px', display:'flex',}} className='Banner_Left--buttons'>
					<Buttons>SIGN UP WITH EMAIL ADDRESS</Buttons>
					<Buttons primary><img style={{marginRight: '10px',width: '50px', backgroundColor: 'white',padding:'5px'}}className='google_logo' src="https://img.icons8.com/color/96/000000/google-logo.png"/>SIGN UP WITH GOOGLE</Buttons>
				</Div>
				<Strong>Slack is free to try for as long as you like</Strong>
			</BannerLeft>
			<BannerRight>
				<Video data-js-id="hero" aria-describedby="hero" autoplay="" loop="" muted="" playsinline="">
				<source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" type="video/webm" />
				<source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.mp4" type="video/mp4" />
				</Video>
			</BannerRight>
		</StyleBanner>
	)
}


export default Banner;