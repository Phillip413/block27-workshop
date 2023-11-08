import {useState} from "react"


function SignUpForm () {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    // console.log("a small message from handlesubmit function!")

    try {

      let response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        })
      })

      
      let json = await response.json()
      console.log(json)

    } catch(err){
      setError(error.message)
    }

  }

  return (
    <div>
      
      <h2>Sign Up</h2> {error && <p>{error}</p>}
      <form onSubmit={(handleSubmit)}>
        
        <label>
          Username:
          <input type="text" value={username} onChange={event => setUsername(event.target.value)}></input>
        </label>
        
        <label>
          Password:
          <input type="text" value={password} onChange={event => setPassword(event.target.value)}></input>
        </label>
        
        <button>Submit</button>

      </form>
    
    
    </div>
  )
}

export default SignUpForm