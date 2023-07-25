import { useState } from "react"


function Feedback(){

    const [score,setScore]=useState("10")
    const [comment,setComment]=useState("")

    const handleSubmit=(e)=>{
         e.preventDefault();

         if(Number(score)<5 && comment.length<=0){
            alert("Please proviea comment explaining thy the experience is poor.")
            return;
         }
         alert(`Form submited with a score of:${score} reason being ${comment}`)

         setComment("")
         setScore("10")

    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label htmlFor="range">Score: {score} </label>
                        <br></br>
                        <input id="range"
                        type="range" 
                        min="0" 
                        max="10"
                         value={score} 
                         onChange={e => setScore(e.target.value)}/>              
                    </div>
                    <div className="Field">
                        <label>Comment:</label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)}/>

                        
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>

        </div>
        
        )

}
export default Feedback