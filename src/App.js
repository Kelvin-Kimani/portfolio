import { Header, About, Footer, Skills, Projects } from './containers'
import { Navbar } from './components'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
