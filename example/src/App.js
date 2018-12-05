import React, { Component } from 'react'

import ExampleComponent from 'semantic-ui-navbar-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent 
          logo={ 'https://react.semantic-ui.com/logo.png' }
          title={ 
            { 
              text : 'Semantic UI Navbar React',
              size : 'h3' 
            }}
          menu={
            {
              left : [
                { text : 'Menu1', name : 'menu1' },
                { text : 'Menu2', name : 'menu2' },
                { text : 'Menu3', name : 'menu3' }
              ],
              right : [
                { text : 'Menu4', name : 'menu4' }
              ]
            }}
          />
      </div>
    )
  }
}
