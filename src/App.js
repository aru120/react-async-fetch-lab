// create your App component here
import React from 'react'

class App extends React.Component{

    state={
        space: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then((data) => this.setState({space: data}))
    }

    renderSpace = () =>{
       return this.state.space.people.map(spaceMan => <h1 key={spaceMan}>{spaceMan.name}</h1>)
    }

    render(){
        

        return(
            <React.Fragment>
            {this.state.space.length === 0 ? <h1>Loading Spacemen</h1> :
             <div>
                {this.renderSpace()}
            </div>}
           </React.Fragment>
        );
    }
}

export default App