import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import data from './Data'
import 'react-toastify/dist/ReactToastify.css';


const Textgen = () =>{
    const[saveNumber, setSaveNumber] = useState();
    const[paragrph, setParagraph] = useState([])
    const[flag,setFlag] = useState(false)

   function handleParagraphs(){
    
    if(saveNumber >0 && saveNumber<=data.length){
        setParagraph(data.slice(0,saveNumber));
        setFlag(true)
        toast.success(`Your ${saveNumber} Paragraphs are ready!!! `)
        
    }
    else {
        setFlag(false)
        toast.error("Ayyo! You are demanding very much paragraph in one go, kindly take little little 😀");
    }
   }

   //flag state has been used so that we can keep track of wheather input provided by user is within limit or not
   //if not then useEffect is called on modification of the state of the flag
   useEffect(()=>{
    if(saveNumber>data.length && flag === false){
        setParagraph(data.slice(0,data.length))
    }
   },[flag])
    
    return(
        <div className="Loremgen_main">
            <h2 className="heading">TIRED OF BORING LOREM IPSUM?</h2>
            
            <label className="para">Paragraphs: </label>
            <input type="number" className="inputnumber" value={saveNumber} onChange={(e)=>setSaveNumber(e.target.value)} />
            <button type="submit" className="generatepara" onClick={handleParagraphs}>GENERATE</button>
            
            <div className="paragraphs">
                {
                    paragrph.map((item)=>{
                        return(
                            <p className="paragraph-text" key={item.id}>{item.text}</p>
                        )
                    })
                }
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    )

}

export default Textgen;