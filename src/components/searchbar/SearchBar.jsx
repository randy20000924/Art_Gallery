import React, {useEffect, useState} from 'react'
import './searchbar.css'
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

function SearchBar(props) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const [arturl, seturlResult] = useState([]);
  const [author, setauthorResult] = useState('');
  const [location, setlocationResult] = useState([]);
  const [sizes, setsizesResult] = useState([]);
  const [texture, settextureResult] = useState('');
  const [views, setviewsResult] = useState([]);
  const [year, setyearResult] = useState([]);
  const [number, setnumberResult] = useState([]);
  const [color, setcolorResult] = useState([]);

  let searchfunction = () => {
    if(value.length > 0){
      fetch('http://127.0.0.1:5000/database?key='+value).then(
        response => response.json()
      ).then(responseData => {
        setResult([]);
        let searchQuery = value.toLowerCase();
        for(const key in responseData) {
          let paint = responseData[key].info.toLowerCase()
          if(paint.indexOf(searchQuery) !== -1) {
            setResult((prevResult) => {
              return [...prevResult, responseData[key].name]
            });
            seturlResult((prevResult) => {
              return [...prevResult, responseData[key].url]
            });
            setauthorResult((prevResult) => {
              return [...prevResult, responseData[key].author]
            });
            setlocationResult((prevResult) => {
              return [...prevResult, responseData[key].location]
            });
            setsizesResult((prevResult) => {
              return [...prevResult, responseData[key].sizes]
            });
            settextureResult((prevResult) => {
              return [...prevResult, responseData[key].texture]
            });
            setviewsResult((prevResult) => {
              return [...prevResult, responseData[key].views]
            });
            setyearResult((prevResult) => {
              return [...prevResult, responseData[key].year]
            });
            setnumberResult((prevResult) => {
              return [...prevResult, responseData[key].number]
            });
            setcolorResult((prevResult) => {
              return [...prevResult, responseData[key].color]
            });
          }
        }
      }).catch(error => {
        console.log(error);
      })
    }else{
      setResult([]);
    }
  }

  return (
    <div className='searchbarposition'>
    <div className="titleText" >Art Search</div>
      <Autocomplete
        className='suggest'
        freeSolo
        disablePortal
        options={options}
        renderInput={(options) => (
        <div ref={options.InputProps.ref}>
          <input 
            type="search" 
            {...options.inputProps} 
            className='searchbar'
            placeholder="輸入關鍵字"
            onChange={(event) => setValue(event.target.value) }
            value={value}    
            />
        </div>
        )}
      />
      <div className='buttons'>
      <Button 
      variant="contained" 
      style={{
        borderRadius: 40,
        backgroundColor: "#21b6ae",
        padding: "14px 50px",
        fontSize: "1.5rem",
        border: '5px solid',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '90%',
        position: '10px', 
        display: "grid",
      }}
      onClick={() => { searchfunction() }}
      >搜尋</Button>
      <Button 
      variant="contained" 
      style={{
        borderRadius: 40,
        backgroundColor: "#2b21b6",
        padding: "14px 50px",
        fontSize: "1.5rem",
        border: '5px solid',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '80%',
        position: '10px', 
        display: "grid",
      }}
      onClick={() => window.location.reload()}
      >重新整理</Button>
      </div>
        <div className='searchBack'>
          {result.map((result, index) => (
            <a href={arturl[index]} key={index} target="_blank" rel="noreferrer">
              <div className='searchEntry card-image'>
                  <h3>{result}</h3>
                  <img src={arturl[index]} alt="" rel="noreferrer" referrerPolicy='no-referrer' className='picture'></img>
                  作者:{author[index]}<br></br>
                  館藏處:{location[index]}<br></br>
                  原作尺寸:{sizes[index]}<br></br>
                  年分:{year[index]}<br></br>
                  原作材質:{texture[index]}<br></br>
                  瀏覽人次:{views[index]}<br></br>
                  編號:{number[index]}<br></br>
                  色系:{color[index]}<br></br>
              </div>
            </a>
          ))}
        </div>
    </div>
  )
}

export default SearchBar;

const options = [
  '星夜 The Starry Night',
  '夜晚露天咖啡座 Cafe Terrace at Night',
  '睡蓮 Water Lilies',
  '隆河的星夜 Starry Night Over the Rhone',
  '印象．日出 Impression. Soleil levant (Impression Sunrise)',
];