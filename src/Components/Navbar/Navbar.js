import styled from 'styled-components';
import {useState} from 'react';

const StyledNavbar = styled.div`
	display: flex;
	justify-content:center;
	align-items:center;
	padding: 15px 80px;
	background-color: #541554;
	color: white;
	height: 80px;
	font-size: 1rem;
	position: sticky;
	top:0;
	z-index: 10;
`;

const NavbarLogo = styled.div`
	display:flex;
	align-items:center;	
	margin-right: 40px;
	&:hover {
		cursor:pointer;
	}
`;

const NavbarLogoImage = styled.img`
	width: 40px;
`;

const LogoName = styled.h1`
display: block;
`;

const Lists = styled.ul`
	display:flex;
	align-items:center;
	margin-right: 200px
`;

const List = styled.li`
	list-style:none;
	padding: 0 15px;
	font-weight: 800;

	&:hover {
		cursor:pointer;
		border-bottom: 1.5px solid white;
	}
`;

const Searchimg = styled.img`
	width: 25px;
	&:hover {
		cursor:pointer;
	}
`;

const Signin = styled.strong`
	margin-left: 10px;
	margin-right: 20px;
	&:hover {
		cursor:pointer;
	}
`;

const Button = styled.button`
	background: ${props => props.primary ? "#541554" : "white"};
	color: ${props => props.primary ? "white" : "#541554"};
	display:block;
	border:none;
	padding: 10px 10px;
	border-radius: 5px;
	font-weight: bold;
	border: 2px solid white;
	margin-right: 20px;
	&:hover {
		cursor:pointer;
	}
`;




const Navbar = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () =>{
	    if(window.scrollY >= 300){
	       setColorchange(true);
	    }
	    else{
	       setColorchange(false);
	    }
	};
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<StyledNavbar className={colorChange ? 'navbar colorChange' : 'navbar'}>
			<NavbarLogo>
				<NavbarLogoImage src="https://img.icons8.com/color/48/000000/slack-new.png"/>
				<LogoName>slack</LogoName>
			</NavbarLogo>
			<Lists>
				<List>Product</List>
				<List>Solutions</List>
				<List>Enterprise</List>
				<List>Resources</List>
				<List>Pricing</List>
			</Lists>
			<Searchimg src="https://img.icons8.com/ios-glyphs/90/FFFFFF/search--v1.png"/>
			<Signin>Sign in</Signin>
			<Button primary>TALK TO SALES</Button>
			<Button >TRY FOR FREE</Button>
		</StyledNavbar>
	)
}


export default Navbar;