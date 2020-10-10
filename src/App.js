import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list:[]
    }
  }
  updateInput(key, value){
    this.setState({
      [key]:value
    })
  }
  addItem(){
    const newItem = {
      id:Math.random()+1,
      value: this.state.newItem
    }; // creating a new item with unique id

    // the current list
    const list = [...this.state.list]

    // add new item to the list
    list.push(newItem)

    //set state
    this.setState({
      list, 
      newItem:''
    })
  }
  deleteItem(id){
    const list = [...this.state.list]; // get the current list
    // now update the list
    const updatedList = list.filter(item=> item.id!==id)

    this.setState({list:updatedList})

  }
  render() {
    return (
      <div className="App">
        <div>
          Add an item
        </div>
          <input 
            type="text"
            placeholder="Add new item"
            value={this.state.newItem}
            onChange={e=>this.updateInput("newItem", e.target.value)}
          />
          <button onClick={()=>this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
            {
              this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    {item.value}
                    <button
                      onClick={this.deleteItem(item.id)}
                    >-X-</button>
                  </li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default App;
