import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                    <a href="https://github.com/Manirajk29/Tesla-Clone" target='_blank' >Tesla-Clone &copy; 2025</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/maniraj-k-6ab940265/" target="_blank" >LinkedIn</a>
                    <a href="https://github.com/Manirajk29" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer