import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import PropTypes from 'prop-types';
import './App.css';


function SimpleCounter(props) {
  return (<div className="main-container">
      <div className="clock">
          <i className="far fa-clock"></i>
      </div>
      <div className="fourthDigit">{props.fourth % 10}</div>
      <div className="thirdDigit">{props.third % 10}</div>
      <div className="secondDigit">{props.second % 10}</div>
      <div className="firstDigit">{props.first % 10}</div>
  </div>)
}

SimpleCounter.propTypes = {
  fourth: PropTypes.number,
  third: PropTypes.number,
  second: PropTypes.number,
  first: PropTypes.number
};




export default SimpleCounter;
