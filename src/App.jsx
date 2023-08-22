import './App.css'
// We import the UserCard component:
import UserCard from "./components/UserCard"
// We import the users array from the users.json file
// The json file was the one we created with chatGPT, its saved in the same folder as this file
import users from "./users.json"

function App() {
  return (
    <>
      {/* 
      To display the users, we map through the users array and render a UserCard component for each user:
      */}
      {users.map((user, index) => <UserCard user={user} key={index} />)}
      {/* 
      We can do it in one line, but we can also do it like this:
      {users.map((user, index) => {
        return <UserCard user={user} key={index} />
      })}
      This method may be more readable, but it's up to you to decide which one you prefer.
      */}
    </>
  )
}

export default App
