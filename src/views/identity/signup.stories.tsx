import React from 'react'
import { withKnobs } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions';
import SignUp from './signup'

export default {
  title: 'Views/Identity/SignUp',
  component: SignUp,
  decorators: [withKnobs]
}

const onSubmit = (formData: any, cb: Function) => {
  action(formData)
  cb()
}

export const Default = () => (
  <SignUp onSubmit={onSubmit} />
)
