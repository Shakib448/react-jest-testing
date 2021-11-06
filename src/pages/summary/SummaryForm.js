import React, { useState } from "react";
import { Form, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const renderTooltip = (
    <Tooltip id="button-tooltip">
      No ice cream will actually be delivered
    </Tooltip>
  );

  const checkboxLabel = (
    <span style={{ color: "blue" }}>Terms and Conditions</span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
        />

        <Form.Check.Label>
          I agree to
          <OverlayTrigger placement="right" overlay={renderTooltip}>
            {checkboxLabel}
          </OverlayTrigger>
        </Form.Check.Label>

        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
