'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');
const ReactRouter = require('react-router-dom');


const Helmet = ReactHelmet.Helmet;
const Link = ReactRouter.Link;


class HomePage extends React.Component {
    render() {

        return (
            <section className="section-home container">
                <Helmet>
                    <title>Demo</title>
                </Helmet>
                <br /><br />
                <h1>Hello This is main screen</h1>
            </section>
        );
    }
}


module.exports = HomePage;
