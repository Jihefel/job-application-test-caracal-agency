import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Col from "../components/layouts/Col";
import Container from "../components/layouts/Container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA />
    </main>

  );
}