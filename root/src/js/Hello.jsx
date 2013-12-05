var React = require('./react').React;

module.exports = React.createClass({
    render: function() {
        return (
            <h1>Hello {this.props.thing}</h1>
        );
    }
});