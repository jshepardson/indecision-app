console.log('App.js is running!')

// if statements
// ternary operators
// logical and operator

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
<div>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

var user = {
    name: 'Josh Shepardson',
    age: 41,

};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var template1 = (
<div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
</div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(template1, appRoot)