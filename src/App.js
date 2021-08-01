import './App.css';


import Header from './components/ui/Header'
import SignIn from './components/ui/SignIn'
import SignUp from './components/ui/SignUp'
import Footer from './components/ui/footer/Footer'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <SignUp />
      </main>
      <Footer />

    </div>
  );
}

export default App;
