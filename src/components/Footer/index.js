import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="www.zencodx.com" target='_blank' >ZENCODX &copy; 2024</a>
                </div>
                <div>
                <a href="" target='_blank'>Privacy & Legal</a>
                <a href="" target="_blank" >Contact</a>
                <a href="" target="_blank" >News</a>
                <a href="" target="_blank" >Blogs</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer