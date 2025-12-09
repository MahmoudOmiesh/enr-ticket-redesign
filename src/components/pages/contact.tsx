import { Mail, Phone, MessageSquare, ChevronRight, Send } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

const FAQ_DATA = [
  {
    question: "How do I reset my password?",
    answer:
      "Go to the Login page and click 'Forgot Password'. You will be prompted to enter the email address associated with your account to receive a password reset link.",
  },
  {
    question: "What is the baggage limit for train travel?",
    answer:
      "Generally, passengers are allowed two pieces of luggage. For specific weight and size restrictions, please refer to the 'Terms of Service' linked in the footer.",
  },
  {
    question: "Can I change the date or time of my booked ticket?",
    answer:
      "Ticket modifications (date/time changes) are permitted up to 24 hours before departure, subject to availability and a modification fee. Please use the 'Manage Booking' section in your account.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards (Visa, MasterCard) and local payment methods via our secure payment gateway.",
  },
  {
    question: "How do I get a refund for a cancelled trip?",
    answer:
      "If the railway cancels the trip, you are eligible for a full refund, processed automatically within 5-7 business days. If you cancel your ticket, refund eligibility depends on the cancellation policy and time remaining before departure.",
  },
];

export function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-20">
      <div className="grid items-start gap-8 grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact our support team</CardTitle>
            <CardDescription>
              We are here to help you with your questions and issues.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex justify-between items-center rounded-xl p-4 border">
              <div className="flex items-start gap-3">
                <div className="rounded-full p-2 bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm">Support email</p>
                  <p className="font-semibold">obs@enr.gov.eg</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:obs@enr.gov.eg" target="_blank">
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex justify-between items-center rounded-xl p-4 border">
              <div className="flex items-start gap-3">
                <div className="rounded-full p-2 bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm">Support phone</p>
                  <p className="font-semibold">+20 100 000 0000</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="tel:+201000000000" target="_blank">
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Badge variant="outline" className="border-green-400">
              <span className="size-2 rounded-full bg-green-400" />
              Live now
            </Badge>
            <CardTitle className="text-2xl">Start a live chat</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex items-start gap-3">
              <div className="rounded-full p-2 bg-primary text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="w-full space-y-1">
                <div className="inline-block max-w-[90%] rounded-xl p-4 border">
                  Hi there! Tell us what you need help with and we will join the
                  chat.
                </div>
                <div className="text-xs text-muted-foreground">
                  Support · just now
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <InputGroup className="[--radius:9999px] py-5">
              <InputGroupInput placeholder="Type your message…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  size="icon-sm"
                  className="bg-primary text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </CardFooter>
        </Card>
      </div>

      <FAQ />
    </div>
  );
}

function FAQ() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">
        Frequently Asked Questions
      </h2>

      {/* Shadcn Accordion */}
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {FAQ_DATA.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
