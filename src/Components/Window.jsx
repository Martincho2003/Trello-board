import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="center">
    <div>Popup content here !!</div>
  </Popup>
);