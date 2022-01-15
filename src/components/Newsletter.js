import React from 'react';
import {
  Card, CardBody, CardTitle, Form, FormGroup, Input,
} from 'reactstrap';

function Newsletter() {
  return (
    <Card className="shadow-sm">
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Your email address..." />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase" type="submit">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default Newsletter;
