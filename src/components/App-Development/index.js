import React from "react";

import { Wrapper } from "./app.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const App = () =>{
    document.title = "App Development";
    return(
        <Wrapper>
            <Header/>
            {/* <Section 
                title="App Development" 
                desc="Contact Now For" 
                link="Coustmized Development"
                backgroundImg="model-x.jpg" 
                arrow="true" 
                range='333'
                speed='2.5'
                top='175'
                hp='1,020'
            />
            <Interior/> */}
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default App;