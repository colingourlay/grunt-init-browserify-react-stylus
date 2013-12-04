var React = require('./react').React;

var Hello = React.createClass({
    render: function() {
        return (
            <h1>Hello {this.props.thing}</h1>
        );
    }
});

React.renderComponent(
    <Hello thing="World"/>,
    document.getElementById('app'));