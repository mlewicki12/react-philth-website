
import './style.scss';
import daydrunks from './daydrunks.jpg';

const Highlights = () => {
  return (
    <div className='container'>
      <div className='highlights-container'>
        <img
          src={daydrunks}
          alt='Daydrunks band playing in a basement'
        />
        <div className='highlights-overlay'>
          Daydrunks band playing at Wharf Arts Center
        </div>
      </div>
    </div>
  )
}

export default Highlights;