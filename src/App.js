import { Header, Footer, Skills, Projects } from './containers'
import { Navbar } from './components'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
