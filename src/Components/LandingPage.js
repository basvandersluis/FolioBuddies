import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './LandingPage.css';
import Hero from '../Assets/Illustrations/Hero.png';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <section className="section1-style">
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
                        <img src={Hero} alt="Hero"/>
                    </div>
                    <Router>
                        <div>
                            <RouterLink ref= {ref} to="/Signup"/>
                            <Button variant="contained" color="primary" component={RouterLink} to="/Signup">SIGN UP</Button>
                            <Button variant="outlined" color="primary">LEARN MORE</Button>
                        </div>
                    </Router>
                </section>
                <section className="section2-style">
                    <h4>So, how does it work?</h4>
                    <p>You <b>sign up</b> on FolioBuddies and<b> set up your 
                    <br/>profile.</b> Based on your profile you will be able to
                    <br/>
                    see other people with the opposite role that
                    <br/>
                    match your ways and habits of working.</p>
                </section>
                <section className="section3-style">
                    <p>When you find someone that you feel is a good fit to
                    <br/>
                    work together with, you can <b>send them a request.</b>If
                    <br/>
                    you accept the request of someone or someone else
                    <br/> 
                    accapts your request you have a match! You will <b>receive
                    <br/>
                    contact information</b> and some tips to help you getting
                    <br/>
                    started.
                    </p>
                </section>
                <section className="section4-style">
                    <p>Once you made initial contact, you can start working
                    <br/>
                    together however you like to. If you need assistance,
                    <br/>
                    have any questions or problems, you can use the
                    <br/>
                    FolioBuddies Slack or Discord channel to ask the
                    <br/>
                    community! You can also use these for the
                    <br/>
                    communication with your buddy. If you don't know
                    <br/>
                    where to communicate elsewhere.
                    </p>
                </section>
                <section className="section5-style">
                    <p>You weren't a match after all? No problem!
                    <br/>
                    Just <b>activate your profile again</b> and look for someone
                    <br/>
                    else!
                    </p>
                </section>
                <section className="section6-style">
                    <div>
                        <p>Sign up now. It's completely free.
                        <br/>
                        FolioBuddies was designed, developed and
                        <br/>
                        started by a junior designer & developer who
                        <br/>
                        wanted to learn how to collaborate and help out
                        <br/>
                        other juniors just like themselves.
                        </p>
                        <Button variant="contained" color="primary">SIGN UP</Button>
                    </div>
                    <h4>Reasons to work together</h4>
                    <div>Get the portfolio YOU want!</div>
                    <div>Gain experience working collaboratively!</div>
                    <div>Make a case study out of it!</div>
                    <div>Some things are better together!</div>
                </section>
                <section className="section7-style">
                    <h4>Help to get started</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus fugiat ipsum nisi harum, tempora voluptate vel provident dolor obcaecati eligendi, nam magni illum nobis incidunt error, quibusdam placeat odio!</p>
                    <Button variant="contained" color="primary">SEE POSSIBLE NEXT STEPS</Button>
                </section>
                <section className="section8-style">
                    <h4>Find a buddy today</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat fuga iste deserunt eius quibusdam recusandae corrupti, in corporis eum reiciendis. Quo magnam perferendis natus nam ducimus maxime voluptas. Accusantium?</p>
                    <Button variant="contained" color="primary">SIGN UP</Button>
                </section>
                <footer className="footer">
                    <ul>
                        <li>
                            <a className="footer-item" href="#">PRIVACY POLICY</a>  
                        </li>
                        <li>
                            <a className="footer-item" href="#">TERMS & CONDITIONS</a>
                        </li>
                        <p class="ml-auto p-2">MADE WITH LOVE IN EUROPE</p>
                    </ul>
                </footer>
            </div>
        )
    }
}
