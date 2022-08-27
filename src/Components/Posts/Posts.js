import styled from 'styled-components';
import imgPromo from '../sources/Images/img-promo-01.png';
import imgPromoOne from '../sources/Images/img-promo-02.jpg';
import imgPromoTwo from '../sources/Images/img-promo-03.jpg';
import imgPromoThre from '../sources/Images/img-promo-04.jpg';


const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 100px;
	background-color: #F3ECE3;
`;

const Collection = styled.div`
	display: flex;
`;

const Heading = styled.h2`
	font-size: 40px;
	padding: 20px;
`;

const Lists = styled.ul`
	display: flex;
`;

const List = styled.li`
	width: 280px;
	transition: transform 0.5s;
	height: 400px;
	background-color: ${props=> props.primary ? '#4A154B':'white'};
	list-style:none;
	margin: 0 15px;
	color: ${props => props.primary ? 'white' : 'black'};
	padding: 15px 15px;
	&:hover{
		cursor:pointer;
		transform: scale(1.05);
		-webkit-box-shadow: -5px -7px 17px -1px rgba(194,194,194,1);
		-moz-box-shadow: -5px -7px 17px -1px rgba(194,194,194,1);
		box-shadow: -5px -7px 17px -1px rgba(194,194,194,1);
	} 
`;

const SubHeading = styled.h3`
	letter-spacing: 1.1px;
	margin: 3px 0;
	height: 100px;

`;

const Name = styled.p`
`;

const Image = styled.img`
	margin-bottom: ${props => props.primary ? '20px': '0px'};
`;

const Arrow = styled.img`
	width: 30px;	
`;

const ListFooter = styled.div`
	font-size: 13px;
	font-weight: bold;
	letter-spacing:1.1px;
	display: flex;
	align-items:center;
	justify-content: space-between;
	padding-top: ${props => props.primary ? 'opx':'25px'};

`;

const Link = styled.p`
	color: ${props => props.primary ? 'white' : '#2266EE'}
`;

const Posts = () => {
	return (
		<Box>
			<Heading>Take a deeper dive into a new way to work</Heading>
			<Collection>
				<Lists>
					<List primary>
						<Name>Collection</Name>
						<SubHeading>Slack as your digital HQ</SubHeading>
						<Image primary src={imgPromo} alt='some image'/>
						<ListFooter primary>
							<Link primary>SEE ALL</Link>
							<Arrow src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-right.png"/>
						</ListFooter>
					</List>
					<List>
						<Image src={imgPromoOne} alt=''/>
						<Name>Resource</Name>
						<SubHeading>See how others are building their digital HQ</SubHeading>
						<ListFooter>
							<Link>READ MORE</Link>
							<Arrow src="https://img.icons8.com/ios-filled/50/2266EE/long-arrow-right.png"/>
						</ListFooter>
					</List>
					<List>
						<Image src={imgPromoTwo} alt=''/>
						<Name>Webinar</Name>
						<SubHeading>Embracing a digital-first approach to work</SubHeading>
						<ListFooter>
							<Link>WATCH NOW</Link>
							<Arrow src="https://img.icons8.com/ios-filled/50/2266EE/long-arrow-right.png"/>
						</ListFooter>
					</List>
					<List>
						<img src={imgPromoThre} alt=''/>
						<Name>E-book</Name>
						<SubHeading>Reinventing work: new imperatives for the future of working</SubHeading>
						<ListFooter>
							<Link>GET E-BOOK</Link>
							<Arrow src="https://img.icons8.com/ios-filled/50/2266EE/long-arrow-right.png"/>
						</ListFooter>
					</List>
				</Lists>
			</Collection>
		</Box>
	)
}


export default Posts;