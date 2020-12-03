import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Portfolios can be scary.</h1>
                    <br/>
                    <h2>You don't have to work 
                    <br/>
                    on yours alone!</h2>
                    <p>Work together with a fellow junior developer or
                    <br/>
                    designer on your portfolios. Get your portfolio both
                    <br/>
                    pixel perfect and perfectly functional while gaining
                    <br/>
                    collaborative experience on the way!</p>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </div>
            </div>
        )
    }
}
