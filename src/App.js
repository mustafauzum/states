import { useState } from "react";

function App() {
const [name, setName] = useState("Mustafa");
const [age, setAge] = useState(19);
const [friends, setFriends] = useState(["Yusuf", "Serhat"]);
const[address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ertuğrul")}>Change name</button>
      <button onClick={() => setAge(8)}>Change age</button>

      <hr />
      <br /><br />

<h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      
      <br />

      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add new friend</button>

      <hr />
      <br /><br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      
      <br />

      <button onClick={() => setAddress({ ...address, zip: "44444", title: "Ankara"})}>Change the address</button>

    </div>
  );
}

export default App;
