import "./App.css";

function App() {
  return (
    <div>
      <UserData userEmail="jhondoe@gmail.com" userName="Jhon Doe" />
      <UserLink
        title="link-1"
        href="https://www.linkedin.com/company/login/ "
      />

      <UserData userName="Saman Kumara" userEmail="samansaman@gmail.com" />
      <UserLink title="link-2" href="https://github.com/" />

      <UserData userName="Maranun Maris" userEmail="marunmaris@gmail.com" />
      <UserLink
        title="link-3"
        href="https://one-tender.atlassian.net/jira/your-work"
      />
    </div>
  );
}

//userData component
const UserData = (props) => {
  return (
    <div>
      <h2>{props.userName}</h2>
      <div>{props.userEmail}</div>
    </div>
  );
};

//userLink component

const UserLink = (props) => {
  return (
    <div>
      <a href={props.href} target="_blank">
        {props.title}
      </a>
    </div>
  );
};

export default App;
