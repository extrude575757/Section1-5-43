'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.deleteOptions = _this.deleteOptions.bind(_this);
    _this.pickOptions = _this.pickOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.deleteOption = _this.deleteOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /// Localstorage only works with strings & will convert numbers to strings
      // To fetch objects back from local storage, one can use json to convert objects to strings
      // Then convert them back from strings with stringify back to objects with parse
      localStorage.setItem('name', 'Andrew');
      var json = JSON.stringify({ age: 28 });
      console.log(JSON.parse(json));
      console.log('Parsing a json object age is ' + JSON.parse(json).age);
      console.log("Mountaed" + localStorage.getItem('name'));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevState, prevProps) {
      console.log("Updated");
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log("unmounted");
    }
  }, {
    key: 'deleteOptions',
    value: function deleteOptions() {
      console.log("deleteoptions");
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'deleteOption',
    value: function deleteOption(optionToRemove) {
      console.log("deleted" + optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          }) };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'pickOptions',
    value: function pickOptions() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
      console.log(randomNum);
    }
  }, {
    key: 'render',
    value: function render() {

      var subTitle = 'Put your life in the hands of a computer';
      var quote = React.createElement(
        'i',
        null,
        'Never Know What to do'
      );

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { quote: quote }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, pickOptions: this.pickOptions }),
        React.createElement(Options, { option1: this.state.options[0], options: this.state.options,
          deleteOptions: this.deleteOptions, deleteOption: this.deleteOption }),
        React.createElement(Option, null),
        React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subTitle && React.createElement(
      'h2',
      null,
      props.subTitle
    ),
    React.createElement(
      'h3',
      null,
      props.quote
    )
  );
};

Header.defaultProps = {
  title: '!Indecision App'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.pickOptions, disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.deleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option,
        optionText: option, deleteOption: props.deleteOption });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick() {
          props.deleteOption(props.optionText);
        }
      },
      'Delete'
    )
  );
};

var AddOptions = function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOptions, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      console.log('error' + error);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        ),
        'Add Options Component here'
      );
    }
  }]);

  return AddOptions;
}(React.Component);

/*
**Stateless Functional Component
*/ // A class based component's prop is defined with this.props.name 
///  While stateless functional component is  defined by props.name
/// We cannot use state inside these components WE can indeed use props to pass data
// These are faster than class based react components because there is no over heard from code concerned with state
// It gets the jsx & returns it. There is no overhead. These said to be easier to read, write, & test
// const User = (props) =>{
//     return (
//         <div>
//         <p>Name: {props.name}</p> 
//         <p>Age: {props.age *(4+3)}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Devils Den', 'Fork Fucks'] }), document.getElementById('app'));
