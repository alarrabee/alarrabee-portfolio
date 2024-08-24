import Header from './components/header'
import Footer from './components/footer'

function App() {
    return (
      <div className='parent' style={{ border: '2px solid black' }}>
        <div className='div1' style={{ border: '2px solid black' }}><Header /></div>
        <div className='div2' style={{ border: '2px solid black' }}>header image here</div>
        <div className='div3' style={{ border: '2px solid black' }}>about section</div>
        <div className='div4' style={{ border: '2px solid black' }}>image one</div>
        <div className='div5' style={{ border: '2px solid black' }}>image two</div>
        <div className='div6' style={{ border: '2px solid black' }}>skills</div>
        <div className='div7' style={{ border: '2px solid black' }}>timeline component</div>
        <div className='div8' style={{ border: '2px solid black' }}>image three</div>
        <div className='div9' style={{ border: '2px solid black' }}>image four</div>
        <div className='div10' style={{ border: '2px solid black' }}><Footer /></div>
      </div>
    )
    }
  
  export default App