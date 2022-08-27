import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Companies from './Components/Companies/Companies'
import Channel from './Components/Channel/Channel'
import Communication from './Components/Communication/Communication'
import Platform from './Components/Platform/Platform'
import Sales from './Components/Sales/Sales'
import Growth from './Components/Growth/Growth'
import Stories from './Components/Stories/Stories'
import Posts from './Components/Posts/Posts'
import Banner2 from './Components/Banner2/Banner2'
import Links from './Components/Links/Links'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Companies/>
      <Channel/>
      <Communication/>
      <Platform/>
      <Sales/>
      <Growth/>
      <Stories/>
      <Posts/>
      <Banner2/>
      <Links/>
      <hr/>
      <Footer/>

      {/*
      
      <img src="https://img.icons8.com/ios/50/000000/download-2--v1.png"/>*/}
    </div>
  );
}

export default App;
