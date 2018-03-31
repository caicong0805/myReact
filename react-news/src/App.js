var React = require('react')
var ReactDom = require('react-dom')
import ComponentHeader from './js/components/header'

class Index extends React.Component{
  render(){
    return(
      <ComponentHeader/>
    )
  }
}
// ReactDom.render(<Index/>,document.getElementById('example'))