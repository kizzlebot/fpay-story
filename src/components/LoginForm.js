import React from 'react';
import { Form, FormGroup, HelpBlock, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';


require('bootstrap-loader');

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

FieldGroup.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  help: React.PropTypes.string,
};

const FormComponent = () => {
  const formStyle = {
    padding: '50px 50px',
  };
  return (
    <div className="container">
      <Col sm={6} smOffset={3} style={formStyle}>
        <Form>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address:"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password:"
            type="password"
          />
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default FormComponent;
