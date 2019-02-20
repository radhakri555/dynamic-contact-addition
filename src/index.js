import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Example from "./example";
import pkg from "./package.json";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List>

    {children}
  </Container>
);
let data = [
  {
    id: "342",
    type: "MAIN",
    country_code: "1",
    national_number: "4089671253",
    extension_number: "2453",
    contact_name: "John",
    inactive: false,
    primary: true,
    confirmation_status: "VALID",
    confirmation_authority: "SMS_REPLY",
    validation_status: "VALID",
    validation_authority: "PARTY_RELATIONSHIP",
    time_created: "2015-03-24T18:22:38.000Z",
    links: [
      {
        href:
          "https://api.paypal.com/v2/customer/users/1161643625273908033/phones/342",
        rel: "self"
      }
    ]
  },
  {
    id: "343",
    type: "WORK",
    country_code: "1",
    national_number: "4089671255",
    contact_name: "John",
    inactive: false,
    primary: false,
    confirmation_status: "VALID",
    confirmation_authority: "CARRIER",
    validation_status: "VALID",
    validation_authority: "PARTY_RELATIONSHIP",
    time_created: "2015-04-24T18:22:38.000Z",
    links: [
      {
        href:
          "https://api.paypal.com/v2/customer/users/1161643625273908033/phones/343",
        rel: "self"
      }
    ]
  }
];
ReactDOM.render(
  <App>
    <Example data={data} />
  </App>,
  document.getElementById("root")
);
