import react,{useRef} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Formda =(props)=>{
    const{data,handleformdata,handleSubmitData}=props;
     console.log(data);
    const Handleform=(value,type)=>{
        handleformdata(value,type)
    }
     const formElement = useRef(null);
    const handleSubmit=()=>
    {
       
        handleSubmitData(data);
        
         formElement.current.reset();
    }
    

    return(
        <div className="formm">
           
        <Form ref={formElement}>
        <label> Book Name </label> 
            <input type="text" name="boookname" value={data.bookname} onChange={(event)=>Handleform(event.target.value,'bookname')}></input><br/><br/>
           <label> Author </label>
            <input type="text"  name="Author"  value={data.author} onChange={(event)=>Handleform(event.target.value,'author')}></input><br/><br/>
           <label> Price</label>
            <input type="text"  name="Price" value={data.price} onChange={(event)=>Handleform(event.target.value,'price')}></input><br/><br/>
           <label> Description </label>
            <input type="text" name="Description" value={data.description} onChange={(event)=>Handleform(event.target.value,'description')}></input><br/><br/>
            {/* <input type="button" value="submit" onClick={handleSubmit}/> */}
            <Button variant="success" onClick={handleSubmit}>Submit </Button>
        </Form> 
        </div>
        
    )


}
export default Formda