import { useCharacters } from '../custom Hooks/feedQL'
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import CardInfo from './CardInfo'
import './feed.css'
import { useStateContext } from '../context/StateContext';
import {FaArrowCircleLeft} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa'
import { useContext } from 'react';
import { motion } from 'framer-motion';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <span   onClick={() => scrollPrev()} className="left-arrow">
    <FaArrowCircleLeft/>
    </span>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <FaArrowCircleRight  onClick={() => scrollNext()} className="right-arrow"/>
  );
};


function Feed() {
  const {loading,error,data } = useCharacters()
  const {amILoggedIn} = useStateContext()

  console.log(amILoggedIn)

  return (
    <div className='scrollPage'>
    {amILoggedIn ? <motion.div
    initial={{y:500}}
    animate={{ y:0 }}
    transition={{ease:'easeOut',duration:1}}><ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data && data.characters.results.map(character => (
          <CardInfo
          itemId={character.id}   key={character.id} id={character.id} created={character.created} name={character.name} status={character.status} img={character.image} />
        ))}
    </ScrollMenu></motion.div> : <h1>Error 404: Page not found</h1>}
    
    <h2>CHARACTERS: 826
LOCATIONS: 126
EPISODES: 51</h2>
    </div>
  );
}

export default Feed;
