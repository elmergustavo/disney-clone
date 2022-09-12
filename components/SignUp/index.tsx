import React from "react";
import Input from "./Input";
import { Container, CTA, Description, DisneyLogo, Headline } from "./styles";

function SignUp() {
  return (
    <Container>
      <CTA>
        <DisneyLogo
          src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
          alt="Disney Logo"
          loading="lazy"
        />
        <Headline>+ More than you'd ever imagine</Headline>
        <Description>
          Enter your email to create or restart your subscription.
        </Description>
        <Input />

        <Description>
          Get 12 months for the price of 10 when you sign up for an annual
          Disney+ subscription, compared to paying monthly.
        </Description>
      </CTA>
    </Container>
  );
}

export default SignUp;
