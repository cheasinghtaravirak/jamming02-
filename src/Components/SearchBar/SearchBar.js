import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }
  search(event) {
    this.props.onSearch(this.state.term);
    event.preventDefault();
  }
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }
  //Press "Enter key" to trigger search, need onKeyPress attribute in the input element
  //Problem works only in http://localhost:3000/
   //1st way
  handleKeyPress(event) {
      if (event.key === 'Enter') {
        //alert('Enter pressed')
        this.props.onSearch(this.state.term);
        event.preventDefault();
      }
  }  //2nd way
  enterPressed(event) {
    //let code = event.keyCode || event.which;
    let code = event.keyCode|| event.which;
    if(code === 13) { 
        this.props.onSearch(this.state.term);
        event.preventDefault();
    }
}
  render() {
    return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange = {this.handleTermChange}
      onKeyPress = {this.enterPressed}/>
      <a onClick = {this.search}>SEARCH</a>
    </div>
    );
  }
}
export default SearchBar;
/*


*/

/*

*/
