import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Flex,
  Card,
  Image,
  Button,
  Form,
} from 'rimble-ui'

class MyCustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {validated: false};
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ validated: true });
  }

  handleValidation = (e) => {
    e.target.parentNode.classList.add('was-validated')
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field label='Email' width={1}>
          <Form.Input type="email" required width={1} onChange={this.handleValidation} />
        </Form.Field>
        <Form.Field validated={this.state.validated} label='Password' width={1}>
          <Form.Input type="password" required width={1} onChange={this.handleValidation}/>
        </Form.Field>
        <Form.Check label="Remember me?" mb={3} onChange={this.handleValidation} />
        <Button type="submit" width={1}>Sign Up</Button>
      </Form>
    );
  }

}

storiesOf('Form/Form Validation', module)
  .addDecorator(withDocs(MyREADME))
  .add('HTML 5 Validation', () => (
    <div>
      <Card>
        <MyCustomForm />
      </Card>
    </div>
))
