import React from "react";

import { Wrapper,Content } from "./product.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const Product = () =>{

    document.title = "Product Photography";
    return(
        <Wrapper>
            <Header/>
            {/* <Content>
                <Section 
                title="Product Photography" 
                desc="Elevate Your Brand" 
                link="Aesthetics Instantly."
                backgroundImg="model-s.jpg" 
                arrow="true" 
                range='396'
                speed='1.99'
                top='200'
                hp='1,020'
                />
            </Content>
            <Content>
                <Interior/>
            </Content> */}
            <Content>
                <Specs/>
            </Content>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default Product;