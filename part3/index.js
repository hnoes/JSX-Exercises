const { useState } = React;

// person component
// takes 'name', 'age', and 'hobbies; as properties
// renders info about person, including conditional message about voting 
//based on age and a truncated name if it's longer than 8 characters
const Person = ({ name, age, hobbies }) => {
    const truncatedName = name.length > 8 ? name.slice(0,6) + '...' : name; 
    const voteMessage = age >= 18 ? "Please go vote!" : "You must be 18 or older";

    return (
        <div className="person"> 
        <p>Learn something about this person:</p>
        <p>Name: {truncatedName}</p>
        <p>Age: {age}</p>
        
        <ul>
            {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
            ))}
        </ul>
        <h3>{voteMessage}</h3>
        </div>
    );
};

// app component
const App = () => {
    // state hooks for the persons and their hobbies    
    const persons = [
        {name:"Hilarie", age:32, hobbies:["Reading","Hiking","Coding"]},
        {name:"Josh", age:35, hobbies:["Brazillian Jiu Jitsu","Cooking","Travelling"]},
        {name:"Fritz", age:4, hobbies:["Playing","Hunting","Hiking"]},
        {name:"Daisy", age:11, hobbies:["Receiving attention","Cuddling","Talking"]}
    ];

    // create a new array of objects with only the names from the persons array
    return (
        <div>
            <h1>Part 3</h1>
            {persons.map((person, index) => (
                <Person key={index} {...person} />
            ))}
        </div>
    );
};

// Render the App component to the root div
ReactDOM.render(<App />, document.getElementById('root'));
