import react, { Component } from 'react';

                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }
    
    render() {
        return (
            <div className="container">
                <button onClick={ this.flipSwitch }>Switch { this.state.position }</button>
            </div>
        );
    }
}
                
export default LightSwitch;