import React, {useState} from 'react'

function Hook2() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <form>
            <input type="text" value={name.firstName} 
            onChange={e => setName({...name,firstName: e.target.value})}></input>
            <input type="text" value={name.lastName} 
            onChange={e => setName({...name, lastName: e.target.value})}></input>
            <h3>First Name is - {name.firstName}</h3>
            <h3>Last Name is - {name.lastName}</h3>
            <h4>{JSON.stringify(name)}</h4>
            </form>
        </div>
    )
}

export default Hook2
