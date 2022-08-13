import React from 'react';
import response from './response';
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Room } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  const {data} =useGoogleSearch(term);

  // const data = response;

  console.log(data);

  return (
    <div className="searchPage">

      <div className="searchPageHeader">
        <Link to="/"><img className='searchPageLogo' src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="oops!" /> </Link>

        <div className="searchPageHeaderBody">
          <Search hideButtons />
          <div className="searchPageOptions">
          <div className="searchPageOptionsLeft">
            <div className="searchPageOption">
              <SearchIcon/>
              <Link to="/all">ALl</Link>
            </div>
            <div className="searchPageOption">
              <DescriptionIcon/>
              <Link to="/news">News</Link>
            </div>
            <div className="searchPageOption">
              <ImageIcon/>
              <Link to="/images">Images</Link>
            </div>
            
            <div className="searchPageOption">
              <LocalOfferIcon/>
              <Link to="/shopping">shopping</Link>
            </div>
            <div className="searchPageOption">
              <Room/>
              <Link to="/maps">maps</Link>
            </div>
            <div className="searchPageOption">
              <MoreVert/>
              <Link to="/more">more</Link>
            </div>

          </div>
          <div className="searchPageOptionsRight">
            <div className="searchPageOption">
              <Link to="/settings">Settings</Link>
            </div>
            <div className="searchPageOption">
              <Link to="/tools">tools</Link>
            </div>
          </div>
          </div>
        </div>

      </div>

      {term && (<div className="searchPageResults">
      <p className='searchPageResultCount'>About {data?.searchInformation.formattedTotalResults} results for ({data?.searchInformation.formattedSearchTime}) for {term}</p>
      {data?.items.map(item=>(<div className='searchPageResult' ><a href={item.link}>{item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (<img className='searchPageResultImage' src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt="" />)}{item.displayLink}</a> <a href={item.link} className="searchPageResultTitle"><h2>{item.title}</h2></a> <p className='searchPageResultSnippet'>{item.snippet}</p> </div>))}
      </div>)}


    </div>
  )
}

export default SearchPage