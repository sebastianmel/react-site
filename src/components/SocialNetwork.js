import React from 'react';

const anim = ()=> {
let navLinks =document.querySelectorAll('.social-network a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', (e)=> {
        let attrX = e.offsetX - 20 ;
        let attrY = e.offsetY - 13;
        link.style.transform = `translate(${attrX}px, ${attrY}px)`;
    })

    link.addEventListener('mouseleave',()=>{
        link.style.transform = '';
    })
})
}
const SocialNetwork = () => {
    return (

        <div className="social-network">
            <ul className="content">
                <a href="https://www.facebook.com" target="blank"
                rel="noopener noreferrer" className="hover"onMouseOver={anim}>
                    <li><i className="fab fa-facebook-f"></i></li>
                </a>
                <a href="https://www.twitter.com" target="blank"
                rel="noopener noreferrer" className="hover"onMouseOver={anim}>
                    <li><i className="fab fa-twitter"></i></li>
                </a>
                <a href="https://www.intagram.com" target="blank"
                rel="noopener noreferrer" className="hover"onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;