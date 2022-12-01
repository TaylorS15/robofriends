import React from 'react'
import CardList from './CardList'
import { robots } from './robots'
import Search from './Search'
import BackgroundGenerator from './BackgroundGenerator'
import './index.css'
import Background from './Background.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bots: robots,
            searchfield: '',
            color1: 'blue'
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    onColorChange = (e) => {
        this.setState({color1: e.target.value})
    }

    render(){
        const filteredRobots = this.state.bots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        const bodyColor = {backgroundColor: this.state.color1};

        return (
            <React.StrictMode>
                <Background color={bodyColor}>
                    <Search searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                    <BackgroundGenerator colorChange={this.onColorChange}/>
                </Background>
            </React.StrictMode>
        )
    }
}

export default App;