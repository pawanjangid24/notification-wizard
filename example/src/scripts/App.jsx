var React = require('react');
var ReactDOM = require('react-dom');
var NotificationSystem = require('NotificationSystem');
var constants = require('constants');
const showcase = require('./showcase');

var _getRandomPosition = function() {
  var positions = Object.keys(constants.positions);
  return positions[Math.floor(Math.random() * ((positions.length - 1) + 1)) + 0];
};

// Styles
require('styles/base');

class NotificationSystemExample extends React.Component {
  constructor() {
    super();
    this._notificationSystem = React.createRef();
    this._magicCount = 0;

    this.state = {
      allowHTML: false,
      newOnTop: false,
      viewHeight: null
    };
  }

  _notificationSystemInstance() {
    return this._notificationSystem.current;
  }

  _allowHTML(allow) {
    this.setState({ allowHTML: allow });
  }

  _newOnTop(newOnTop) {
    this.setState({ newOnTop });
  }

  _showTheMagic() {
    showcase.forEach((notification) => {
      var _notification = notification;
      if (this._magicCount > 0) {
        _notification.position = _getRandomPosition();
      }

      this._notificationSystemInstance().addNotification(_notification);
    });
    this._magicCount += 1;
  }

  componentDidMount() {
    this.setState({ viewHeight: window.innerHeight });
  }

  render() {
    return (
      <div className="app-container">
        <header style={ { minHeight: this.state.viewHeight } } className="header gradient">
          <div className="overlay" />
          <div className="content">
            <h1 className="title">Notification Widget</h1>
            <div className="btn-show-magic-holder">
              <button className="btn btn-outline btn-show-magic" onClick={ this._showTheMagic.bind(this) }>
                Display Notification!
              </button>
              <span className="width-warning">Better experience in larger screens</span>
            </div>
            
          </div>
        </header>
        
        <NotificationSystem ref={ this._notificationSystem } allowHTML={ this.state.allowHTML } newOnTop={ this.state.newOnTop } />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(NotificationSystemExample), document.getElementById('app'));
