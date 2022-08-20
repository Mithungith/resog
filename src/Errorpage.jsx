import './errorpage.css';
import egg from './images/egg.png'
function Error(){
    return (<section>
           <div className='main'>
           <div>
           <img src={egg} alt="egg-image" />
           </div>
           <div>
           <h1>OPPS!</h1>
           <p>item not found or wrong qr code scanned</p>
           </div>
           <div className="btn">
           <button>Scan Again</button>
           </div>
           </div>
           </section>)
}
export default Error;