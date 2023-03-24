import logo from './logo.svg';
import './App.css';
import Img from './components/ImageLogin/Img';
import Login from './components/FormLogin/Login';

function App() {
    return (
        <div className='app-container'>
            <Img />  
            <Login /> 
        </div>             
        );
    }

    export default App;