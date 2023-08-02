import "./App.css";

function App() {
  return (
    <div>
      <UserData />
      <UserLink />

      <UserData />
      <UserLink />

      <UserData />
      <UserLink />
    </div>
  );
}

//userData component
const UserData = () => {
  return (
    <div>
      <h2>John Doe</h2>
      <div>useremail@gmail.com</div>
    </div>
  );
};

//userLink component

const UserLink = () => {
  return (
    <div>
      <a href="https://ejs.co/">click me</a>
    </div>
  );
};

export default App;
