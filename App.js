import logo from './logo.svg';
import './App.css';
import Formda from './form';
import View from './view';
import Form from './form';
import { useState } from 'react';
import { Button } from "react-bootstrap";

function App() {
  const[formData,setFormData]=useState({
    bookname:"",
    author:"",
    price:"",
    description:""

  })
  const [edit, setEdit] = useState(false);
  const [addData,setaddData]=useState([])
  const [searchData, setSearchData] = useState([]);

  const handleformdata=(value,type)=>{
    console.log(value);
    console.log(type);
    const edit={...formData}
    edit[type]=value;
    setFormData(edit);
    
    
  }
  const addform=(item)=>{
    if(edit) {
      console.log('This is for editing ...');
      const index = addData.findIndex(item => {return item.bookname === formData.bookname})
      console.log('index', index);
      const editedData = [...addData];
      if(index !== -1) {
        editedData[index] = formData;
      }
      setaddData(editedData);
      setEdit(false)
      setSearchData(editedData);
    }
    else {
      console.log("this is for add");
      const  add=[...addData];
   add.push(item);
   setaddData(add);
   setSearchData(add);
    } 
   
  
  
  }
  const[state,showstate]=useState(true);
  const toggleview=()=>{
    showstate(!state)
    
    
  }
  const handleBookDelete = (book) => {
    console.log('book to delete', book);
    const deletebook = [...searchData];
    const filteredBook = deletebook.filter(books => { return books.bookname !== book.bookname})
    setaddData(filteredBook);
    setSearchData(filteredBook);
}
  const handleBookEdit =(book) => {
    console.log('bookssssssss', book)
    showstate(true);
    setEdit(true);
    setFormData(book)
  
  }
  const searchForm = (value, type) => {
    
   
    const filterBookName = addData.filter(Data => {
      if (Data.bookname.toLowerCase().includes(value.toLowerCase())) {
      
        return Data
      }
      else if(Data.author.toLowerCase().includes(value.toLowerCase()))
      {
        return Data
      }
      else if(Data.price.toLowerCase().includes(value.toLowerCase()))
      {
       
        return Data
      }
      else if(Data.description.toLowerCase().includes(value.toLowerCase()))
      {
        
        return Data
      }

    })
   
      setSearchData(filterBookName)
   

  }

  return (
    <div className="App">
      <div className="buttonn">{state===true?(<Button variant="primary" onClick={(toggleview)}>view</Button>):( <Button onClick={(toggleview)}>add</Button>)}</div><br/><br/><br/>
      {state?(<Formda data={formData}
      handleformdata={handleformdata}
      handleSubmitData={addform}/>):(<View addform={addData} handleEdit={handleBookEdit} handleBookDelete={handleBookDelete} searchForm={searchForm} searchData={searchData}/>)}
      
     
      
      
    </div>
  );
}

export default App;
