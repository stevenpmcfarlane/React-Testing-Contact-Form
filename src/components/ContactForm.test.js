import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("renders without errors ", () => {
  render(<ContactForm />);
});

//Arrange (renders and getBys) , Act (screen and userEvents), Assertion (expects)

test("form is filled out and on submit displays object", () => {
  render(<ContactForm />);
  //const firstNameInput = screen.getByLabelText(/firstname/i);
  const lastNameInput = screen.getByLabelText(/lastname/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  //userEvent.type(firstNameInput, "Steve");
  userEvent.type(emailInput, "waddup@waddup.com");
  userEvent.type(lastNameInput, "McFarlane");
  userEvent.type(messageInput, "waddup");

  screenLeft.getByRole("pre", (type = { submit }));
  userEvent.click(pre);

  const mcfarlaneText = screen.queryByText(/mcfarlane/i);
  expect(mcfarlaneText).toBeInTheDocument();
});
