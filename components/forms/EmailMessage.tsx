import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import { MessageUsEmailProps } from "@/types";

const MessageUsEmail = ({ name, email, message }: MessageUsEmailProps) => {
  const previewText = `Welcome, ${name} `;

  return (
    <Html>
      <Head />
      <Preview className="text-[18px] font-normal text-white">
        {previewText}
      </Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[20px] max-w-4xl p-[20px]">
            <Heading className="text-left text-[20px] font-normal text-black">
              <strong>Hello {name},</strong>
            </Heading>
            <Text className="text-[12px] text-[#666666]">Welcome,</Text>
            <Hr className="mx-0 my-[16px] w-full" />
            <Text className="text-[12px] text-[#666666]">
              Modern and unique web designing and Full Stack Web Development is
              not easy at all, lets give it a try, we make unique websites with
              most modern technologies including NEXT.JS, Typescript,
              Postgresql, TailwindCss, Docker, NextAuth and so on. Embrance the
              future of web Development with us.
            </Text>
            <Text className="text-[12px] text-[#666666]">
              Keep in touch with Us.✨
            </Text>
            <Text className="text-[12px] text-[#666666]">
              thanks,
              <br /> parvez
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
