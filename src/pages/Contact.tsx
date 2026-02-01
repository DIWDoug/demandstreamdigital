import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Quote } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SubtleOrbs from "@/components/SubtleOrbs";
import { Card, CardContent } from "@/components/ui/card";
import { PHONE_NUMBER, PHONE_HREF, ADDRESS, EMAIL } from "@/lib/constants";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import { getContactPageSchema } from "@/lib/schema";

const testimonials = [
  {
    quote:
      "They're trustworthy, they communicate clearly and really consistently, which is sometimes rare in today's world.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative",
  },
  {
    quote:
      "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none — extremely competitive pricing for the level of wisdom and responsiveness you receive.",
    author: "Cole",
    role: "Digital Marketing Agency Owner, Dallas",
  },
  {
    quote:
      "We needed a partner we could trust to deliver quality work across different client situations. The ability to have real conversations about scope and strategy made a measurable difference in client retention.",
    author: "Jeremy",
    role: "Digital Marketing Agency Owner, Florida",
  },
];

export default function Contact() {
  return <div style={{ color: "white", padding: 24 }}>CONTACT DEBUG</div>;
}
