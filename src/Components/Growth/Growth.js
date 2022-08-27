import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px 100px 100px 100px;
	font-family: 'Nunito Sans', sans-serif;
`;

const Lists = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const List = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	width: 200px;
	margin: 0 100px;

`;

const Percentage = styled.span`
	font-size: 60px;
	font-weight: 900;
	color: #541554;
`;

const Para = styled.h4`
	font-weight: bold;
`;

const Growth = () => {
	return (
		<Container>
			<Lists> 
				<List>
					<Percentage>85%</Percentage>
					<Para>of users say Slack has improved communication</Para>
				</List>
				<List>
					<Percentage>86%</Percentage>
					<Para>feel their ability to work remotely has improved*</Para>
				</List>
				<List>
					<Percentage>88%</Percentage>
					<Para>feel more connected to their teams*</Para>
				</List>

			</Lists>

		</Container>
	)
}


export default Growth;