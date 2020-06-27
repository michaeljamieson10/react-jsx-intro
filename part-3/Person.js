function Person(props) {
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        {props.hobbies.map((value,index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
      <h3>You {props.age < 18 ? "you must be 18" : "please go vote!"}</h3>
    </div>
  )

  }
