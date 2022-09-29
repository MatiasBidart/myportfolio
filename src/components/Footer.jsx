import React from 'react'
import './components.stylesheets/Footer.css'
const Footer = () => {
  return (
    <div>
        <footer>
            <a class="cntc-btn" href="https://www.linkedin.com/in/matias-bidart-a03a25231/" target="blank">
                 <img class="ftr-logo" src="https://i.postimg.cc/CMkfRXr9/linkedin.png" alt="Linked In"/>
            </a>
            <a class="cntc-btn" href="https://github.com/MatiasBidart" target="blank">
             <img class="ftr-logo" src="https://i.postimg.cc/PfCnKknF/github.png" alt="GitHub"/>
            </a>
            <a class="cntc-btn" href="mailto: matiasezequielbidart@gmail.com" target="blank">
             <img class="ftr-logo" src="https://i.postimg.cc/XqhzqDTR/mail.png" alt="Send Email"/>
            </a>
            <a class="cntc-btn" href="https://api.whatsapp.com/send?phone=1123733304&amp;text=Hola" target="blank">
             <img class="ftr-logo" src="https://i.postimg.cc/kMz6Yfr7/whatsapp.png" alt="Whatsapp"/>
            </a>
        </footer>
    </div>
  )
}

export default Footer