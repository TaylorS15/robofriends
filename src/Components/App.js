import React from 'react'
import CardList from './CardList'
import { robots } from '../robots'
import Search from './Search'
import BackgroundGenerator from './BackgroundGenerator'
import Background from './Background.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bots: robots,
            searchfield: '',
            color1: 'lightsteelblue'
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    onColorChange = (e) => {
        this.setState({color1: e.target.value})
        console.log(this.state.color1)
    }

    render(){
        const filteredRobots = this.state.bots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        const bodyColor = {backgroundColor: this.state.color1};

        return (
            <Background color={bodyColor}>
                <div className='main-header'>Robot Friends</div>
                <div className='main-copy'>A placeholder like web app that displays arbitrary accounts with a working search bar and a color picker to choose the background color</div>

                <div className='hr-cont1'>
                    <Search searchChange={this.onSearchChange}/>
                    <BackgroundGenerator colorChange={this.onColorChange}/>
                </div>

                <div id="footer"></div>
                
                <CardList robots={filteredRobots}/>
            </Background>
        )
    }
}

export default App;