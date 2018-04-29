'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.resetAll = _this.resetAll.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('count');
                var cParse = parseInt(json, 10);
                if (!isNaN(cParse)) {
                    console.log("component mounted" + cParse);
                    this.setState(function () {
                        return {
                            count: cParse
                        };
                    });
                }
            } catch (e) {
                // nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                //  const json = JSON.stringify(this.state.count);
                localStorage.setItem('count', this.state.count);
                console.log('updated' + localStorage.getItem('count'));
            }
        }
    }, {
        key: 'addOne',
        value: function addOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'resetAll',
        value: function resetAll() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count:',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    'minus'
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    'add'
                ),
                React.createElement(
                    'button',
                    { onClick: this.resetAll },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);
// The default prop to set the this.state prop value in constructor
// Counter.defaultProps = {
//     count: 0
// };


ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

/*
let c = 0;
const addOne = () => {
    c++;
    renderTheApp();
    console.log("add1"+c);
};
const minusCount = () => {
    c--;
    renderTheApp();
    console.log("minusing");
};
const reset = () => {
    c = 0;
    renderTheApp();
    console.log("reseting");
};
const appRoot = document.getElementById('app');
function renderApp() {

    const  appTemplate = (
    <div>
        <h1>Count: {c}</h1>
       
        <button onClick={addOne}>+1</button> 
        <button onClick={minusCount}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
        );
    ReactDOM.render(appTemplate, appRoot);
};
const renderTheApp = () => {
    const  appTemp = (
        <div>
            <h1>Count: {c}</h1>
           
            <button onClick={addOne}>+1</button> 
            <button onClick={minusCount}>-1</button>
            <button onClick={reset}>Reset</button>
            </div>
            );
        ReactDOM.render(appTemp, appRoot);

};
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, appRoot);
  };
  
  //setInterval(tick, 1000);
  
  
renderTheApp();
// can call whole html template to console with : console.log(appTemplate2);
*/
