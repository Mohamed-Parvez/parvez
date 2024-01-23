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
  const previewText = `Hello from, ${name}`;

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
              <strong>This is {name},</strong>
              <Text className="text-[12px] text-[#666666]">Id: {email}</Text>
            </Heading>
            <Hr className="mx-0 my-[16px] w-full" />
            <Text className="text-[12px] text-[#666666]">{message}</Text>
            <Text className="text-[12px] text-[#666666]">
              by,
              <br /> {name}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
