import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";
import InviteMember from './invite'

export default {
  title: 'Views/Team/Invite',
  component: InviteMember,
  decorators: [withKnobs]
}

export const Default = () => (
  <InviteMember onCancel={action('onCancel')} onInvite={action('onInvite')} />
)
