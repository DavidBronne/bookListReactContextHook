import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContext from './contexts/ThemeContext'
import ThemeButton from './components/ThemeButton'

function App() {
  return (
    <div className="App">
      <ThemeContext>
          <Navbar/>
          <BookList/>
          <ThemeButton/>
      </ThemeContext>
    </div>
  );
}

export default App;
