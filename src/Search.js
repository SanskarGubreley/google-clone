import React,{useState} from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { actionTypes } from './reducer';



function Search( {hideButtons = false}) {
    const [{} , dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useNavigate();

    const search = (e) =>{
        e.preventDefault();
        console.log("hey!" , input);

        dispatch({
          type : actionTypes.SET_SEARCH_TERM,
          term: input
        })

        history('/search');
    };
  
  
  return (
    <form className='search'>
        <div className="searchInput">
            <SearchIcon className="searchInputIcon"/>
            <input  value={input} onChange={e=> setInput(e.target.value)}  />
            <MicIcon />
        </div>

        {!hideButtons ?(<div className="searchButtons">
          <button type="submit" onClick={search} className="btn btn-light">google search</button>
          <button type="button" className="btn btn-dark">I'm feeling lucky</button>
        </div>) :(<div className="searchButtons">
          <button type="submit" onClick={search} className="searchButtonsHidden">google search</button>
          <button type="button" className="searchButtonsHidden">I'm feeling lucky</button>
        </div>)}

        
    </form>
  )
}

export default Search