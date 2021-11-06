import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
        />
        <Form.Check.Label>{checkboxLabel}</Form.Check.Label>
        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
