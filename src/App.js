import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeButton from './components/ThemeButton'
import AuthContextProvider from './contexts/AuthContext'
import BookListProvider from './contexts/BookListContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
            <Navbar/>
            <BookListProvider>
              <BookList/>
            </BookListProvider>
            <ThemeButton/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
