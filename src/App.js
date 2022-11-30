import React from 'react'
import CardList from './CardList'
import { robots } from './robots'
import Search from './Search'
import BackgroundGenerator from './BackgroundGenerator'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bots: robots,
            searchfield: '',
            color1: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
        console.log(this.searchfield)
    }

    onColorChange = (e) => {
        this.setState({color1: e.target.value})
        console.log(this.color1)
    }

    render(){
        const filteredRobots = this.state.bots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <React.StrictMode>
                <Search searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
                <BackgroundGenerator colorChange={this.onColorChange} value={this.state.color1}/>
            </React.StrictMode>
        )
    }
}

export default App;