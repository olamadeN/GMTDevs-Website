import { div } from "framer-motion/client"

const Step7 = () => {

  return (
    <div>
      <br /><br />
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
        <img src="/images/sent.png" alt="sent" />
        <h2 className="aboutTitle" style={{fontFamily:`"Inter", sans-serif`}}>Request Submitted</h2>
    
        <br />
        <p className="aboutMainTxt">
          Thank you for reaching out. We’ve received your project details and will get back to you shortly.
        </p>

        <p className="aboutMainTxt" style={{ marginTop: "10px", fontSize: "16px" }}>
          Expect a response within 24–48 hours.
        </p>
        
        
      </div>
      <br />
      <p className="aboutMainTxt" style={{ marginTop: "40px", fontSize: "14px", textAlign:"center" }}>check out our past project <a href="/case" style={{ color: "#ce9729", fontWeight: "700"}} >here</a></p>
    </div>
  );
}

export default Step7;