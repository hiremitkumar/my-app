import React , {useState} from 'react'

export default function Textform(props) {
  document.title="Textfrom"
  const changing=(event)=>{
        setText(event.target.value)
        // console.log("hello")
    }


    const lowwer=()=>{      
      let newText= text.toLowerCase()
      // alert(newText)
      setText(newText);
  }



    const upper =()=>{
      // console.log("upper");
      let newText= text.toUpperCase()
      setText(newText);
  }
  const listen=()=>{
    const synth = window.speechSynthesis;
    const utterance1 = new SpeechSynthesisUtterance(text);
    utterance1.lang="hi-IN"
    synth.speak(utterance1);

  }


  const [text, setText] = useState("");

  return (
   <>

  <div className="container">
  <div className="mb-3" style={{color:props.Mode==='light'?'black':'white'}}>
    <label htmlFor="textform">Enter The Text Below</label>
    <textarea className="form-control" id="textform" style={{backgroundColor:props.Mode==='light'?'white':'grey',color:props.Mode==='light'?'black':'white'}} value= {text} onChange={changing} rows="4"></textarea>
  </div>
    <div>
    <button className="btn btn-primary mx-1 " style={{color:props.Mode==='light'?'black':'white'}} onClick={upper}>Change to UpperCase</button>
    <button className="btn btn-primary mx-1 " style={{color:props.Mode==='light'?'black':'white'}} onClick={lowwer}>Change to LowerCase</button>
    <button className="btn btn-primary mx-1 " style={{color:props.Mode==='light'?'black':'white'}} onClick={listen}>click to listen</button>
    </div>
  </div>
  <div id="word-summery" className="container mb-3" style={{color:props.Mode==='light'?'black':'white'}}>
    <h4>Your Text Summery:</h4>
    <p>you have written {text.split(" ").length} word and {text.length} character</p>
    <h4>Preview:</h4>
    <p>{text}</p> 
  </div>
   </>
  )
}
