import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
`;

const Lists = styled.ul`
	display: flex;
	align-items: flex-start;
`;

const List = styled.li`
	display: flex;
	flex-direction: column;
	margin: 0 50px;
	list-style:none;

`;

const Heading = styled.h3`
	font-weight: bold;
	font-size: 14px;
	margin: 10px;
`;

const Link = styled.a`
	font-size: 14px;
	margin: 15px;
	text-decoration:none;
	color: #000000;
	&:hover{
		color:#2266EE;
	}

`;

const Links = () => {
	return (
		<Container>
			<Lists>
				<List>
					<img src="https://img.icons8.com/color/48/000000/slack-new.png"/>
				</List>
				<List>
					<Heading>WHY SLACK</Heading>
					<Link href=''>Slack vs email</Link>
					<Link href=''>Channels</Link>
					<Link href=''>Engagement</Link>
					<Link href=''>Scale</Link>
					<Link href=''>Watch the demo</Link>
				</List>
				<List>
			
					<Heading>PRODUCT</Heading>
				
					<Link href=''>Features</Link>
				
					<Link href=''>Integrations</Link>
				
					<Link href=''>Enterprise</Link>
				
					<Link href=''>Solutions</Link>
				
				</List>
				<List>
					
					<Heading>PRICING</Heading>
					<Link href=''>Subscriptions</Link>						
					<Link href=''>Paid vs Free</Link>
						
				</List>
				<List>
					
					<Heading>RESOURCES</Heading>
				
					<Link href=''>Partners</Link>
				
					<Link href=''>Developers</Link>
				
					<Link href=''>Community</Link>
				
					<Link href=''>Apps</Link>
				
					<Link href=''>Blog</Link>
				
					<Link href=''>Help Centre</Link>
				
					<Link href=''>Events</Link>
						
				</List>
				<List>
					
					<Heading>COMPANY</Heading>
				
					<Link href=''>About us</Link>
			
					<Link href=''>Leadership</Link>
				
					<Link href=''>Investor relations</Link>
				
					<Link href=''>News</Link>
			
					<Link href=''>Media Kit</Link>
				
					<Link href=''>Careers</Link>
						
				</List>
			</Lists>
		</Container>
	)
}


export default Links;