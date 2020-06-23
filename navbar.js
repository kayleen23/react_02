import React from 'react';
import { BrowserRouter as Router,route, switch } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import = as serviceWorker  from './serviceWorker';
import './App.css';

const App = () => {
    return <div className='App'> Kayleens App</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


const navbar = ({ title, icon }) => {
    return <div className="navbar bg-primary">
    <h1>
       <i className={icon}  /> { title }
    </h1>
    <i className={icon} /> {title}
    <ul>
        <li>
        <link to='/'> Home</link>
        </li>
        <li>
        <link to='/'> About</link>
        </li>
    </ul>
</div>
};


Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string,
}

Navbar.defaultProps = {
    title:'Contact Keeper'
    icon: 'fas fa-id-card-alt'
}

export default Navbar



export const About = () => {
    return (
        <div>
            <h1>
                about APP
            </h1>
            <p className="my-1"></p>
            <p className="bg-dark p"></p>
              <strong> Version:</strong> 1.0.0
            
        </div>
    )
}

export default About

