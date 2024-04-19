export const ContactHeader = () => {
  return (
    <div className="contact-head">
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <div className="contact-content">
            <div className="contact-form">
                <div className="help-buttons">
                   <div className="half-buttons">
                     <button className="btn"> <i className="fa-solid fa-message"></i>VIA SUPPORT CHAT</button>
                    <button className="btn"> <i className="fa-solid fa-phone"></i>VIA CALL</button>
                    </div>
                    <button className="btn"> <i className="fa-solid fa-message"></i>VIA EMAIL FORM</button>
                    <div className="form">
                      <input type="text" placeholder="Name"/>
                      <input type="text" placeholder="Email"/>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                
            </div>
            <img src="images/Service 24_7-pana 1.svg" alt="" />
        </div>
    </div>
  )
}
