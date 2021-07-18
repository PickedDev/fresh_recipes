import './App.css';


import Header from './components/ui/Header'
import SignIn from './components/ui/SignIn'
import Footer from './components/ui/footer/Footer'

function App() {
  return (
    <div className="wrapper">       
      <Header/> 
      <main>
       <SignIn/>
      </main>
      <Footer/>

    </div>
  );
}

export default App;
