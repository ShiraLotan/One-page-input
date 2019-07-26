import React from 'react';
import './App.scss';
import searchIcon from '../src/img/search.png';
import listItem from '../src/img/listItem.jpg';
import rightArrow from '../src/img/rightSideArrow.png';
import plus from '../src/img/Plus.png';



class App extends React.Component{
state={
  items:['Toy Story','Frozen','Mission Impossible', 'The Lion King','Spiderman','The Big Trip', 'The Humming'],
  Suggestions:[],
  text:'',
  display: 'none'
}

 dimLights = () =>
{
  this.setState({display:'block'})
}

leaveinput = ()=>
{
  this.setState({
    Suggestions:[],
    display:'none'
  })
}

onTextChange=(e)=>
{
  const value = e.target.value;

  if(value.length===0)
  {
      this.setState(()=>({
        text:'',
        Suggestions:[]
      }));
    }else{
      const regex = new RegExp(`^${value}`,'i');
      const suggestions = this.state.items.sort().filter(v=>regex.test(v))
      this.setState(()=>({Suggestions:suggestions, text: value}))
  }
}

selectedValue=(value)=>
{
  this.setState({
    text: value,
    Suggestions:[]
  })
}

renderSuggestions=()=>
{
  const { Suggestions } = this.state;
  if(Suggestions.length===0)
  {
    return null;
  }
  return  <ul >
          <li className='firstListItem'><img className='searchIcon' src={searchIcon} alt='#'/>Search: <span className='showSearch'>{this.state.text}</span><img className='searchIcon right' src={rightArrow} alt='#'/></li>
          {Suggestions.map((item,i)=><li className='searchListItem' onClick={()=>{this.selectedValue(item)}}  key={i}><img className='searchIcon' src={listItem} alt='#'/>{item}<img className='searchIcon right' src={rightArrow} alt='#'/></li>)}
          <li className='lastListItem'><img  className='searchIcon plus' src={plus} alt='#'/>Add New Question</li>
          </ul> 
}

  render() {
    return (
      <div className="App" >
        <div id='backgroundDim' onClick={this.leaveinput} style={{display:this.state.display}}></div>
         <div className='inputRap'> 
            <img className='searchIcon sameLine' src={searchIcon} alt='#'/>
           <input placeholder='Search' value={this.state.text} onChange={this.onTextChange} onClick={this.dimLights}  type='text'/>
           {this.renderSuggestions()}
         </div>
      </div>
    );
  }
}


export default App;
