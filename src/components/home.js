import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "Zencodx";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="Software Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="software.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="Wep Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="web.jpg"/>
            </Content>
            <Content>
                <Section title="App Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="app.jpg"/>
            </Content>
            <Content>
                <Section title="Game Development" desc="Contact Now For " link="Coustmized Development" leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="game.jpg"/>
            </Content>
            <Content>
                <Section title="Product Photography" desc="Elevate Your Brand" link="Aesthetics Instantly." leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="product_photography.jpg"/>
            </Content>
            <Content>
                <Section title="Digital Marketing" desc="Elevate Your Brand" link="Aesthetics Instantly." leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="digital_marketing.jpg"/>
            </Content>
            <Content>
                <Section title="Graphics Designing" desc="Elevate Your Brand" link="Aesthetics Instantly." leftbtn="CONTACT NOW" rightbtn="LIVE LINK" backgroundImg="graphic_designing.jpg"/>
                <Footer/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home