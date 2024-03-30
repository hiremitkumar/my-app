import React,{useState} from 'react'

export default function About() {
    document.title="About"
    const [About_Style, NewAbout_Style] = useState({
        color:'black',
        backgroundColor:'white'
    });
    const [text, setText] = useState("Enable Dark Mode");
    const ToggleMode= ()=>{
        if (About_Style.color==='white') {
            NewAbout_Style({color:'black',
            backgroundColor:'white'})
            setText("Enable Dark Mode")
        } else {
            NewAbout_Style({color:'white',
            backgroundColor:'black'})
            setText("Enable Light Mode")
        }
    }
  return (
        <>
        <div className="container my-5">
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={About_Style}>
            <h2 className="accordion-header" id="headingOne">
            <button style={About_Style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong> Company history</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            It is under the ownership of Gujarat Cooperative Milk Marketing Federation Limited, Department of Cooperation, Government of Gujarat. It is controlled by 3.6 million milk producers. Tribhuvandas Kishibhai Patel founded the organisation in 1946 and served as its chairman until his retirement in the 1970s.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={About_Style}>
            <h2 className="accordion-header" id="headingTwo">
            <button style={About_Style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Company's goal and principal</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
            <p>  VISION STATEMENT:-</p>
          <p> It basically tells that at what position the company wants to be in the future. It is
                short term in nature</p>
                <p>     MISSION STATEMENT:-</p>
                <p> It acts as a roadmap to the vision of the company. It tell that how the company will
                reach its set position</p>
                <p> GOALS:-</p>
                <p> Goals are general statement which tells what needs to be fulfilled in given period of
                time.</p>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={About_Style}>
            <h2 className="accordion-header" id="headingThree">
            <button style={About_Style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>How to reach us</strong>  
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                <pre style={About_Style}>
            Gujarat Cooperative Milk Marketing Federation Ltd.<p></p>

                Amul Dairy Road,<p></p>
                Opp: Hotel Surabhi,<p></p>
                Anand – 388001,<p></p>
                Gujarat, India.<p></p>

                Phone:
                +91-2692-258506, 258507, 258508, 258509
                </pre>
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="container">
        <button type="button" onClick={ToggleMode} class="btn btn-primary">{text}</button>
        </div>
        </>
  )
}
