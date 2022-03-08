import React from 'react';
import Boxes from './Components/Boxes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Parasec from './Components/Parasec';
import Slider from './Components/Slider';

function App() {
    return (
        <div>

         <Header />
         <Slider />
         <Boxes />
         <div style={{clear:'both',}} ></div>
         <Parasec />
         <Footer />


        </div>
    );
}

export default App;