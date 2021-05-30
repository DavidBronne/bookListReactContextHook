import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

const Navbar = () => {

    const {isAuth, toggleAuth} = useContext(AuthContext)
    const {isLightTheme, light , dark } = useContext(ThemeContext)
    const theme = isLightTheme? light : dark
    return (                            
        
        <nav style={{background:theme.ui , color:theme.syntax}}>
            <h1>Context App</h1>
            <h2 onClick={toggleAuth}>{isAuth ? 'Logged in' : 'Logged out'}</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;


/* import React, {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

class Navbar extends Component {
render() { 
        return (
            <AuthContext.Consumer>{ (AuthContext) => {
                const {isAuth, toggleAuth} = AuthContext
                return (
                    <ThemeContext.Consumer>{(ThemeContext) => {
                        const {isLightTheme, light , dark } = ThemeContext;
                        const theme = isLightTheme? light : dark
                        return (
                            <nav style={{background:theme.ui , color:theme.syntax}}>
                                <h1>Context App</h1>
                                <h2 onClick={toggleAuth}>{isAuth ? 'Logged in' : 'Logged out'}</h2>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        )
                    }}</ThemeContext.Consumer>
                )
            }}
             </AuthContext.Consumer>

        );
    }
}
 
export default Navbar; */