import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import Verify from './verify'

export default {
  title: 'Views/Identity/Verify',
  component: Verify,
  decorators: [withKnobs]
}

export const Default = () => (
  <Verify email={text('E-Mail', 'example@delivc.com')} onResend={action('clicked')} />
)
