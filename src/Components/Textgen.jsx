import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import data from './Data'
import 'react-toastify/dist/ReactToastify.css';


const Textgen = () =>{
    const[saveNumber, setSaveNumber] = useState();
    const[paragrph, setParagraph] = useState([])
    
   

   function handleParagraphs(){
    
    if(saveNumber >0 && saveNumber<=data.length){
        setParagraph(data.slice(0,saveNumber));
        toast.success(`Your ${saveNumber} Paragraphs are ready!!! `)
    }
    else if(saveNumber > data.length){
        alert("Ayyo! You are demanding very much paragraph in one go, kindly take little little 😀")
        setParagraph(data.slice(0,data.length))
        
    }
    else if(saveNumber <= 0){
        alert("Ayyo ! you know that you wrote negative input 😵")
        setParagraph(data.slice(0,1))
        
    }
   }

  
    
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