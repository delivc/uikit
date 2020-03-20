import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";
import User from './user'

export default {
  title: 'Views/Settings/User',
  component: User,
  decorators: [withKnobs]
}

export const Default = () => (
  <User onClose={action('onClose')} onPasswordSubmit={action('onPasswordSubmit')} onProfileSubmit={action('onProfileSubmit')} />
)
