import './home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/about');
    }


  return (
    <body>
      <div className="title-home">
        <h1 className='text-with-cursor'>Hello Traveler. Glad you stopped by...</h1>
        <p>My name is Alex. This portfolio is best enjoyed with a warm cup of tea.  <span className='cursor'></span></p>

        <button onClick={handleButtonClick}>
            Go to About Page
        </button>
        
      </div>
    </body>
  )
};

export default Home;