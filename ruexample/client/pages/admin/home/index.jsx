'use strict';
const React = require('react');

class HomePage extends React.Component {
    render() {

        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <br />
                        <h1>This is admin page</h1>
                        <br />
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
