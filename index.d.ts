declare module '@delivc/uikit' {
  import * as React from 'react'

  export interface NavbarProps {
    expanded: Boolean
  }

  export class Navbar extends React.PureComponent<NavbarProps> {}

  export class Sidenav extends React.PureComponent {}

  export interface TopnavProps {
    locationMessage?: string
    center?: React.ReactNode
    right?: React.ReactNode
    user?: User
  }

  export class Topnav extends React.Component<TopnavProps> {}

  export interface ForgotPasswordViewProps {
    onSubmit: Function
    loginLink: string
    signUpLink: string
  }

  export const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = (props) => {}
}
