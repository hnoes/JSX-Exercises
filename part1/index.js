const {useState} = React;

// first component
const FirstComponent = () => {
    return (
        <h1>My very first component</h1>
    );
};

// NamedComponent 
const NamedComponent = ({ name }) => {
    return (
        <p>My name is {name}</p>
    );
};

// app
const App = () => {
    const [name, setName] = useState("Mud");

    return (
        <div>
            <FirstComponent />
            <NamedComponent name = {name} />
        </div>
    );
};

// render the app component to the root div
ReactDOM.render(<App />, document.getElementById('root'));