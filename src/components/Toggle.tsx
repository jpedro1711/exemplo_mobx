import { Switch } from '@mui/material'
import React, { useState } from 'react'
import { ToggleStore } from '../stores/ToggleStore'

const Toggle = () => {
  const toggle_store = new ToggleStore();
  const [checked, setChecked] = React.useState(toggle_store.getValue())

  const handleChange = () => {
    toggle_store.setValue(!checked)
    setChecked(toggle_store.getValue())
  }

  return (
    <div>
      <Switch 
        checked={checked}
        onChange={handleChange}
      />
      {<p>Checked: </p>}{checked.toString()}
    </div>
  )
}

export default Toggle