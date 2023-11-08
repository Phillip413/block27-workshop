
function Authenticate () {
setToken(result.token);
return (
  <>
    <h2>Authenticate</h2>
    
    <button type="button" onClick={() => {
      let response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup")
      let json = await response.json()
    }}>Authenticate Token</button>
  
  </>

)
  
}

export default Authenticate