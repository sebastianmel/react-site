import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <main>
            <Mouse/>
            <div className="contact">
            <Navigation/>
            <Logo/>
            {/* form */}
            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>addresse</h4>
                        <p>45 rue Martin</p>
                        <p>75110  Paris</p>
                    </div>
                </div>
                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="06488985" className="hover">
                            <p style={{cursor:'pointer'}}
                            className="clipboard" onClick={() =>{
                                alert('Téléphone copié !')
                            }}>06568956</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                    <h4>email</h4>
                    <CopyToClipboard text="fsagency@gmail.com" className="hover">
                    <p style={{cursor:'pointer'}}
                            className="clipboard" onClick={() =>{
                                alert('email copié !')
                            }}>fsagency@gmail.com</p>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>

            </div>
            
        </main>
    );
};

export default Contact;