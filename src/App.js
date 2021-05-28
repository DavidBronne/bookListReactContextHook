import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContext from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContext>
          <Navbar/>
          <BookList/>
      </ThemeContext>
    </div>
  );
}

export default App;
