import React, {useState} from 'react'

function Five() {
    const [checked, setChecked] = useState(false)

    const handelChecked = ()=>{
        setChecked(!checked)
    }
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handelChecked} />
      </label>
      <p>{checked?"ON":"OFF"}</p>
    </div>
  )
}

export default Five
