import React from 'react'
import { InputStore } from '../stores/InputStore'

const Inputs = () => {
  const input_store = new InputStore();
  const [value, setValue] = React.useState(input_store.getValue())

  const handleChange = (e: any) => {
      console.log(e.target.value)
      input_store.setValue(e.target.value)
      setValue(input_store.getValue())
      console.log('store: ', input_store.getValue())
  }

  return (
    <div>
        <input 
            value={value}
            onChange={handleChange}
        />
        {value}
    </div>
  )
}

export default Inputs