/* tslint:disable:interface-name max-classes-per-file no-empty-interface */

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

  export type LoginViewProps = {
    onSubmit: Function
    forgotPasswordLink: string
    signUpLink: string
  }

  export const LoginView: React.FC<LoginViewProps> = (props) => {}

  export type SignupViewProps = {
    onSubmit: Function
  }

  export const SignupView: React.FC<SignupViewProps> = (props) => {}

  export type VerifyViewProps = {
    email: String,
    onResend: Function
  }

  export default class VerifyView extends React.Component<VerifyViewProps> {}

  export type UserSettingsViewProps = {
    onClose: Function
    onProfileSubmit: Function
    onPasswordSubmit: Function
  }

  export type UserSettingsViewState = {
    passwordDialogIsShown: boolean
  }

  export class UserSettingsView extends React.Component<UserSettingsViewProps, UserSettingsViewState> {}

  export type TeamsViewProps = {
    user?: any
    workspaces?: any[]
    onClickNew: Function
  }

  export type TeamsViewState = {
    newCanvasVisible: boolean
  }
  export class TeamsView extends React.Component<TeamsViewProps, TeamsViewState> { }

  export enum Order {
    NONE,
    ASC,
    DESC
  }

  type TeamsSettingsAccessManagementViewProps = {
    users: any[]
    onInviteClick: Function
  }

  type TeamsSettingsAccessManagementViewState = {
    orderedColumn: number
    ordering: Order
  }
  export class TeamsSettingsAccessManagementView extends React.Component<TeamsSettingsAccessManagementViewProps, TeamsSettingsAccessManagementViewState> {}

  export type TeamsSettingsGeneralViewProps = {
    team: any
    onSubmit: Function
  }
  export type TeamsSettingsGeneralViewState = {
    id: string
    name: string
  }

  export class TeamsSettingsGeneralView extends React.Component<TeamsSettingsGeneralViewProps, TeamsSettingsGeneralViewState> {}

  export type TeamSettingsInviteViewProps = {
    onCancel: Function
    onInvite: Function
  }
  export type TeamSettingsInviteViewState = {
    emails: string[]
  }

  export class TeamSettingsInviteView extends React.Component<TeamSettingsInviteViewProps, TeamSettingsInviteViewState> {}
}
