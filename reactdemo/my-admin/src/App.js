import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Footer from './Footer';
import Header from "./Header";
import Sidebar from './Sidebar';
import Main from './Main';

const  App = () => {
  return (
    <div className="">
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <Header />
          <Main />
        </div>


      </div>
    </div>
  );
}

export default App;
