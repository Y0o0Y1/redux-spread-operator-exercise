import { useSelector } from 'react-redux';
import { fetchProfile, updateFirstName, updateLastName, addHobby, updateHobbies, addSkill, updateSkills, updateIdentity } from './state/actions/User';
import { useDispatch } from 'react-redux';
import { user1, newHobbies, newSkills } from './constants/userData';
function App() {
  const dispatch = useDispatch()
  const userData = useSelector((state) => {
    return state.user
  })
  console.log(userData)
  return (
    <div className="App">
      <button onClick={() => {
        dispatch(fetchProfile(user1))
      }}>Fetch</button>
      <button onClick={() => {
        dispatch(updateFirstName("Okba"))
      }}>
        Update First Name</button>
      <button onClick={() => {
        dispatch(updateLastName("Cemuz"))
      }}>Update Last Name</button>
      <button onClick={() => {
        dispatch(addHobby({
          id: 121313,
          name: "Going To GYM"
        }))
      }}>Add Hobby</button>
      <button onClick={() => {
        dispatch(updateHobbies(newHobbies))
      }}>Update Hobbies</button>
      <button onClick={() => {
        dispatch(addSkill({
          id: 121313,
          name: "AngularJS"
        }))
      }}>Add Skill</button>
      <button onClick={() => {
        dispatch(updateSkills(newSkills))
      }}>Update Skills</button>
      <button onClick={() => {
        dispatch(updateIdentity({
          height: "204",
          speed: "123 mph"
        }))
      }}>Update identity</button>

    </div>
  );
}

export default App;
