import Header from "./components/header/Header";
import Development from "./components/main/development/Development";
import Industries from "./components/main/industries/Industries";
import Services from "./components/main/services/Services";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <div className="_container">
                <Header/>
                <div className="main">
                    <Development/>
                    <Industries/>
                    <Services/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
