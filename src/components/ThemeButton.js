import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'


const ThemeButton = () => {
    
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>Toggle theme</button>
    );
}
 
export default ThemeButton;

/* import React, {Component} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

class ThemeButton extends Component {
    static contextType = ThemeContext
    render() { 
        const {toggleTheme} = this.context
        return (
            <button onClick={toggleTheme}>Toggle theme</button>
        );
    }
}
 
export default ThemeButton; */