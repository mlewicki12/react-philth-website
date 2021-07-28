
import './style.scss';
import daydrunks from './daydrunks.jpg';

const Highlights = () => {
  return (
    <div className='container'>
      <div className='highlights-container'>
        <img
          src={daydrunks}
          alt='Daydrunks at Wharf Arts Center (2/28/2020)'
        />
        <div className='highlights-overlay'>
          Daydrunks at Wharf Arts Center (2/28/2020)
        </div>
      </div>
    </div>
  )
}

export default Highlights;