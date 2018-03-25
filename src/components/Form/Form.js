import React from 'react'
import FormContainer from './FormContainer/FormContainer'

const Form = ({ match }) => (
  <FormContainer mode={match.params.mode} />
)

export default Form
