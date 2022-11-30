import React from 'react'
import CardList from './CardList'
import { robots } from './robots'
import Search from './Search'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <>
                <Search searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </>
        )
    }
}

export default App;