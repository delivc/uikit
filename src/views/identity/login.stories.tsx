import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import Login from './login'

export default {
  title: 'Views/Identity/Login',
  component: Login,
  decorators: [withKnobs]
}

const onSubmit = (formData: any, cb: Function) => {
  action(formData)
  cb()
}

export const Default = () => (
  <Login signUpLink={text('signUpLink', '#')} forgotPasswordLink={text('ForgotPasswordLink', '#')} onSubmit={onSubmit} />
)
