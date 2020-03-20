import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from "@storybook/addon-knobs"
import Forgot from './forgot'

export default {
  title: 'Views/Identity/ForgotPassword',
  component: Forgot,
  decorators: [withKnobs]
}

const onSubmitAction = (formData: any, cb: Function) => {
  action(formData)

  const error = {
    label: 'That user doesn’t exist',
    message: 'There is no user with that email address. Do you want to sign up instead?'
  }

  setTimeout(() => { cb(error) }, 5000);
}

export const Default = () => (
  <Forgot signUpLink={text('signUpLink', '#')} loginLink={text('loginLink', '#')} onSubmit={onSubmitAction} />
)
