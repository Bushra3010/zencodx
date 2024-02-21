import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "Electric Cars, Solar & Clean Energy | Tesla";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="Software Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="model-3.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="Wep Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="App Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="Game Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="Product Photography" desc="Elevate Your Brand" link="Aesthetics Instantly." leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="solar-panel.jpg"/>
            </Content>
            <Content>
                <Section title="Digital Marketing" desc="Elevate Your Brand" link="Aesthetics Instantly." leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="solar-roof.jpg"/>
            </Content>
            <Content>
                <Section title="Graphics Designing" desc="Elevate Your Brand" link="Aesthetics Instantly." leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="accessories.jpg"/>
                <Footer/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home