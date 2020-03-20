import React, { useState } from 'react'
import {
  Button,
  Card,
  Heading,
  majorScale,
  Pane,
  Paragraph,
  Link,
  minorScale,
  TextInputField,
  toaster
} from 'evergreen-ui'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstname:
    yup.string()
      .required()
      .min(2),
  lastname:
    yup.string()
      .required()
      .min(2),
  email:
    yup.string()
      .required()
      .email(),
  password:
    yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      )
})

type Props = {
  onSubmit: Function
}

const SignUp: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, errors, handleSubmit } = useForm({
    validationSchema: schema
  })

  const onCallback = () => {
    setLoading(false)

    toaster.success(
      'Welcome',
      {
        description: 'Please check your email for futher instructions.'
      }
    )
  }

  const onSubmit = handleSubmit((formData) => {
    setLoading(true)
    props.onSubmit(formData, onCallback)
  })

  // const minStrength = 3, thresholdLength = 7

  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxSizing="border-box"
      marginRight="auto"
      marginLeft="auto"
      marginY={100}
      width={576}
      elevation={1}
      backgroundColor="white"
      padding={majorScale(4)}
    >
      <Pane
        display="flex"
        flexDirection="column"
        textAlign="center"
        marginBottom={majorScale(2)}
      >
        <Heading is="h1" size={600}>Let's create your account</Heading>
        <Paragraph
          marginTop={majorScale(1)}
        >
          Already have an Delivc account?
          <Link marginLeft={minorScale(1)}>Sign In</Link>
        </Paragraph>
      </Pane>
      <Pane
        is="form"
        width="100%"
        display="flex"
        flexDirection="column"
        onSubmit={onSubmit}
      >
        <Controller
          as={TextInputField}
          name="firstname"
          type="text"
          label="First Name"
          isInvalid={errors.firstname ? true : false}
          validationMessage={errors.firstname ? errors.firstname.message : false}
          control={control}
        />
        <Controller
          as={TextInputField}
          name="lastname"
          type="text"
          label="Last Name"
          isInvalid={errors.lastname ? true : false}
          validationMessage={errors.lastname ? errors.lastname.message : false}
          control={control}
        />
        <Controller
          as={TextInputField}
          name="email"
          type="email"
          label="Work email"
          isInvalid={errors.email ? true : false}
          validationMessage={errors.email ? errors.email.message : false}
          control={control}
        />
        <Controller
          as={TextInputField}
          name="password"
          type="password"
          label="Password"
          isInvalid={errors.password ? true : false}
          validationMessage={errors.password ? errors.password.message : false}
          control={control}
        />
        <Button
          appearance="primary"
          height={40}
          isLoading={loading}
        >
          Create A Free Account
        </Button>
      </Pane>
    </Card>
  )
}

export default SignUp
