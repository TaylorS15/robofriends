import React from 'react'
import CardList from './CardList'
import Search from './Search'
// import BackgroundGenerator from './BackgroundGenerator'
import Background from './Background.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bots: [],
            searchfield: '',
            color1: '#150F2E'
        }
    }

    componentDidMount() {    
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ bots:  users}))
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    onColorChange = (e) => {
        this.setState({color1: e.target.value})
        console.log(this.state.color1)
    }

    render(){
        const { bots, searchfield, color1 } = this.state;

        const filteredRobots = bots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        const bodyColor = {backgroundColor: color1};

        return (
            <Background color={bodyColor}>
                <div className='main-header'>Robot Friends</div>
                <div className='main-copy'>A placeholder-like web app that displays arbitrary 
                accounts accessed through JSON. It includes a working search bar that dynamically alters the listed accounts</div>

                <div className='hr-cont1'>
                    <Search searchChange={this.onSearchChange}/>
                    {/* <BackgroundGenerator colorChange={this.onColorChange}/> */}
                </div>
                {!this.state.bots.length ? <div className='main-header'>Loading...</div> : <CardList robots={filteredRobots}/>}
            </Background>
        )
    }
}

export default App;