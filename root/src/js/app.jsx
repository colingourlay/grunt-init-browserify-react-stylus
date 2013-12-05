var React = require('./react').React;
var Hello = require('./hello.jsx');

React.renderComponent(
    <Hello thing="World"/>,
    document.getElementById('app'));