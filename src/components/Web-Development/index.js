import React from "react";

import { Wrapper } from "./web.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const Web = () =>{
    document.title = "Web Development";
    return(
        <Wrapper>
            <Header/>
            {/* <Section 
                title="Web Development" 
                desc="Contact Now For" 
                link="Coustmized Development"
                backgroundImg="Web_2.jpeg" 
                arrow="true" 
                range='358'
                speed='3.1'
                top='162'
            />
            <Interior/> */}
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default Web;