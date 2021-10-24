import react from "react";
import { Button } from "react-bootstrap";

const View=(props)=>{
    const {addform,handleEdit,handleBookDelete,searchForm,searchData}=props;
    console.log('add',addform)
    const handleEditBook = (bookData) => {
        console.log("book to edit", bookData);
        handleEdit(bookData);
       }
       const handleDelete = (bookData) => {
        handleBookDelete(bookData)
    }
    const searchItem =(value,type)=>{
        searchForm(value,type)
    }
    return(
        <div>
             
        <div>
            <h1>Result</h1>
            <div>
                <form>
                    <input type="text" placeholder="search..." onChange={(event)=>searchItem(event.target.value,"item")}>
                    </input>
                </form>
            </div>
            {

            
            searchData.map(item=>{
                return(
                    
                    <div >
                    <fieldset key={item.bookname} style={{backgroundColor:"#99ffff"}}>
                    <span><br/>
                    BOOKNAME: <b>{item.bookname}</b><br/>
                    AUTHOR: <b>{item.author}</b><br/>
                    PRICE: <b>{item.price}</b><br/>
                    DESCRIPTION: <b>{item.description}</b><br/>
                    <br/>
                    </span>
                    {/* <button onClick={() => handleDelete(item)}>delete</button> &nbsp; &nbsp; */}
                    <Button variant="danger" onClick={() => handleDelete(item)}>Delete </Button> &nbsp; &nbsp;
                    {/* <button onClick={() =>handleEditBook(item)}>edit</button> */}
                    <Button variant="warning" onClick={() =>handleEditBook(item)}>Edit </Button>

                    </fieldset> &nbsp;
                    </div>
                )

            })}
        </div>
        </div>
       
            
        
    )


}
export default View