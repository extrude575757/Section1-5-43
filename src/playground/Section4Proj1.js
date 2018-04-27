class IndecisionApp extends React.Component {
    constructor (props) {
      super(props)
      this.deleteOptions = this.deleteOptions.bind(this)
      this.pickOptions = this.pickOptions.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
        options: []
      }
    }
    deleteOptions () {
      this.setState(() => {
        return {
          options: []
        }
      })
    }
    handleAddOption (option) {
      if (!option) {
        return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists'
      }
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }
    pickOptions () {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      alert(option)
      console.log(randomNum)
    }
    render () {
      const title = '!Indecision App'
      const subTitle = 'Put your life in the hands of a computer'
      const quote = <i>Never Know What to do</i>
  
      return (
        <div>
          <Header title={title} subTitle={subTitle} quote={quote} />
          <Action hasOptions={this.state.options.length > 0} pickOptions={this.pickOptions} />
          <Options option1={this.state.options[0]} options={this.state.options} deleteOptions={this.deleteOptions} />
          <Option />
          <AddOptions handleAddOption={this.handleAddOption} />
        </div>
      )
    }
  }
  class Header extends React.Component {
    render () {
      console.log(this.props)
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
          <h3>{this.props.quote}</h3>
        </div>
      )
    }
  }
  
  class Action extends React.Component {
    render () {
      return (
        <div>
          <button onClick={this.props.pickOptions} disabled={!this.props.hasOptions}>
            What should I do?
          </button>
        </div>
      )
    }
  }
  
  class Options extends React.Component {
    render () {
      return (
        <div>
          <button onClick={this.props.deleteOptions}>
            Remove All
          </button>
          {/*
                                          this.props.options.map( (option) => {
                                              return <p key={option}>{option}</p>
                                          })
                                          */
       this.props.options.map((option) => <Option key={option} optionText={option} />)}
        </div>
      )
    }
  }
  class Option extends React.Component {
    render () {
      return (
        <div>
          {this.props.optionText}
        </div>
      )
    }
  }
  
  class AddOptions extends React.Component {
    constructor (props) {
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
        error: undefined
      }
    }
    handleAddOption (e) {
      e.preventDefault()
      const option = e.target.elements.option.value.trim()
      const error = this.props.handleAddOption(option)
      console.log('error' + error)
      this.setState(() => {
        return { error}
      })
    }
  
    render () { 
      return (
        <div>
          {this.state.error && <p>
                                 {this.state.error}
                               </p>}
          <form onSubmit={this.handleAddOption}>
            <input type='text' name='option' />
            <button>
              Add Option
            </button>
          </form>
          Add Options Component here
        </div>
      )
    }
  }
  
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
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
  