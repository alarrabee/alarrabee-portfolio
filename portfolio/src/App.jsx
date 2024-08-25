import ComputerImg from './assets/images/computer.png'
import BookImg from './assets/images/books.png'
import DragonImg from './assets/images/dragon.png'
import PlantImg from './assets/images/plants.png'
import TeaImg from './assets/images/tea.png'

function App() {
    return (
        <div class="parent">
            <div class="div1"><img src={ComputerImg} alt='cozy computer desk set in front of a window surrounded by plants' /></div>
            <div class="div2" style={{ border: '2px solid black' }}>About</div>
            <div class="div3" style={{ border: '2px solid black' }}><img src={BookImg} alt='books on a wooden shelf' /></div>
            <div class="div4" style={{ border: '2px solid black' }}><img src={DragonImg} alt='green dragon curled up on a pillow' /></div>
            <div class="div5" style={{ border: '2px solid black' }}>Skills</div>
            <div class="div6" style={{ border: '2px solid black' }}>Timeline</div>
            <div class="div7" style={{ border: '2px solid black' }}><img src={PlantImg} alt='potted plants arranged on a windowsill' /></div>
            <div class="div8" style={{ border: '2px solid black' }}><img src={TeaImg} alt='cup of tea on a small wooden table' /></div>
        </div>
    )
}
  
export default App