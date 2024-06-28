import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import ProductionPage from "./pages/ProductionPage.jsx";
import DealerPage from "./pages/DealerPage.jsx";
import CertificatesPage from "./pages/CertificatesPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import PhotosPage from "./pages/PhotosPage.jsx";


function App() {


    return (
        <BrowserRouter>
            <Header/>
            <main className='px-4 lg:px-40 xl: pt-4'>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path='/production' element={<ProductionPage/>}/>
                    <Route path='/dealer' element={<DealerPage/>}/>
                    <Route path='/certificates' element={<CertificatesPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path='/photos' element={<PhotosPage/>}/>

                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
