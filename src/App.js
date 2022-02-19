import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

const [image, setImage] = useState('');
const clientId = 'gab2ATZ6loAKNJZHBIcqLBgB0TpjL9IHbxxIEuYYxHQ';
const [result, setResult] = useState([]);

const handleChange = (event) => {
  setImage(event.target.value);
 };

 const handleSubmit = () => {
 console.log(image);

 const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
 axios.get(url).then((response) => {
 console.log(response);
 setResult(response.data.results);
 });
 };


  return (
    <div className="App">
      <div className="Header">
        <h1> PICTURE WEB</h1>
        <p> unsplash API </p>
      </div>

      <div className="SearchBar">
        <input onChange={handleChange} type="search" name="search" placeholder="Search A Picture"></input>
<br></br>
        <button onClick={handleSubmit} type="button" className="Btn-Submit" name="submit"> Search </button>
</div>
        <div className="result">
    {result.map((image) => (
  <>
   <div className="card">
    <img src={image.urls.thumb} />
    <p className="username"> Photo by {image.user.name}</p>
    <p className="like">👍 {image.likes}</p>
   </div>
  </>
   ))}
</div>
    </div>
  );
}


export default App;
