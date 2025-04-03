"use client";

import Link from "next/link";

import {
  Phone,
  Mail,
  Shield,
  Thermometer,
  Eye,
  Car,
  Home,
  Sun,
  Check,
  Hourglass,
  Gem,
} from "lucide-react";

import type React from "react";

import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselApp = () => {
  return (
    <Carousel
      autoPlay={true}
      autoFocus={false}
      infiniteLoop={true}
      emulateTouch={true}
      showArrows={false}
      showStatus={false}
    >
      <div>
        <Image
          src="/images/CarrosselImagemUm.jpeg"
          alt="Película residencial"
          width={600}
          height={200}
          className="rounded-lg object-cover mt-4 m-0 p-0"
        />
      </div>
      <div>
        <Image
          src="/images/CarrosselImagemDois.jpeg"
          alt="Película residencial"
          width={600}
          height={200}
          className="rounded-lg object-cover mt-4 m-0 p-0"
        />
      </div>
      <div>
        <Image
          src="/images/CarrosselImagemTres.jpeg"
          alt="Película residencial"
          width={600}
          height={200}
          className="rounded-lg object-cover mt-4 m-0 p-0"
        />
      </div>
    </Carousel>
  );
};

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M12 2.16c3.313 0 3.74.012 5.05.073 1.24.059 2.34.288 3.23 1.178.89.89 1.12 1.99 1.178 3.23.061 1.31.073 1.738.073 5.05s-.012 3.74-.073 5.05c-.059 1.24-.288 2.34-1.178 3.23-.89.89-1.99 1.12-3.23 1.178-1.31.061-1.738.073-5.05.073s-3.74-.012-5.05-.073c-1.24-.059-2.34-.288-3.23-1.178-.89-.89-1.12-1.99-1.178-3.23-.061-1.31-.073-1.738-.073-5.05s.012-3.74.073-5.05c.059-1.24.288-2.34 1.178-3.23.89-.89 1.99-1.12 3.23-1.178 1.31-.061 1.738-.073 5.05-.073zm0 1.78c-3.211 0-3.588.012-4.86.068-1.08.051-1.96.288-2.77.998-.81.81-.948 1.69-.998 2.77-.057 1.272-.068 1.65-.068 4.86s.012 3.588.068 4.86c.051 1.08.288 1.96.998 2.77.81.81 1.69.948 2.77.998 1.272.057 1.65.068 4.86.068s3.588-.012 4.86-.068c1.08-.051 1.96-.288 2.77-.998.81-.81.948-1.69.998-2.77.057-1.272.068-1.65.068-4.86s-.012-3.588-.068-4.86c-.051-1.08-.288-1.96-.998-2.77-.81-.81-1.69-.948-2.77-.998-1.272-.057-1.65-.068-4.86-.068zm0 5.431a6.45 6.45 0 1 0 0 12.9 6.45 6.45 0 0 0 0-12.9zm0 10.118a3.67 3.67 0 1 1 0-7.334 3.67 3.67 0 0 1 0 7.334zm5.585-10.898c-.497 0-.903-.405-.903-.903s.406-.903.903-.903c.498 0 .903.405.903.903s-.405.903-.903.903z" />
  </svg>
);

export default function LandingPage() {
  // Function to handle smooth scrolling
  const carImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CarrosselImagemUm-zJpD2qRJVNTZLVTIJmZ3Sdkn0m5N1H.jpeg",
      alt: "Audi com película automotiva instalada",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CarrosselImagemTres-iMa7LDD3cfM1a4XOGNmhjbwDts8BZU.jpeg",
      alt: "BMW com película automotiva instalada",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CarrosselImagemDois-FbXqrBz6HJBb3zJ80r4f8TzXwbEIje.jpeg",
      alt: "Volvo com película automotiva instalada",
    },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Floating WhatsApp Button */}

      <Link
        href="https://wa.link/cjtc55"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </Link>

      <header className="sticky top-0 z-40 border-b bg-white backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">JS Films</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "inicio")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Início
            </a>

            <a
              href="#servicos"
              onClick={(e) => scrollToSection(e, "servicos")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Serviços
            </a>

            <a
              href="#beneficios"
              onClick={(e) => scrollToSection(e, "beneficios")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Benefícios
            </a>

            <a
              href="#sobre"
              onClick={(e) => scrollToSection(e, "sobre")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sobre Nós
            </a>

            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, "contato")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contato
            </a>
          </nav>

          <Link
            href="https://wa.link/cjtc55"
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#201e1f] px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#201e1f]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}

        <section
          id="inicio"
          className="relative overflow-hidden bg-muted py-20 md:py-32"
        >
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Películas de Alta Performance para Vidros
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Há mais de 10 anos protegendo o que é importante para você.
                Conforto térmico, proteção UV e privacidade com soluções
                profissionais.
              </p>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/images/hero-building.jpeg"
                alt="Película instalada em janela residencial"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section id="servicos" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nossos Serviços
              </h2>

              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Oferecemos soluções personalizadas para cada necessidade, com
                instalação profissional e garantia de qualidade.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Residential Service */}

              <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#201e1f]/10 p-3">
                    <Home className="h-6 w-6 text-[#1458b8]" />
                  </div>

                  <h3 className="text-xl font-bold">Películas Residenciais</h3>
                </div>

                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground">
                    Proteja sua casa do calor excessivo, desbotamento de móveis
                    e olhares indiscretos com nossas películas residenciais de
                    alta qualidade.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Controle solar e térmico</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Proteção contra raios UV</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Privacidade e segurança</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Redução de brilho e ofuscamento</span>
                    </li>
                  </ul>

                  <Image
                    src="/images/ImagemPeliculasResidenciais.jpeg"
                    alt="Película residencial"
                    width={600}
                    height={200}
                    className="rounded-lg object-cover mt-4"
                  />
                </div>
              </div>

              {/* Automotive Service */}

              <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#201e1f]/10 p-3">
                    <Car className="h-6 w-6 text-[#1458b8]" />
                  </div>

                  <h3 className="text-xl font-bold">Películas Automotivas</h3>
                </div>

                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground">
                    Melhore o conforto, estética e segurança do seu veículo com
                    nossas películas automotivas de alta performance.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Redução de calor interno</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Proteção contra raios UV</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Privacidade e segurança</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />

                      <span>Estética aprimorada</span>
                    </li>
                  </ul>

                  <div style={{ margin: 0 }}>
                    <CarouselApp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}

        <section id="beneficios" className="py-16 md:py-24 bg-muted">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Benefícios das Películas
              </h2>

              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descubra como nossas películas podem melhorar sua qualidade de
                vida e proteger seu patrimônio.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Benefit 1 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="rounded-full bg-[#201e1f]/10 p-3 w-fit">
                  <Sun className="h-6 w-6 text-[#1458b8]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">Proteção UV</h3>

                <p className="mt-2 text-muted-foreground">
                  Bloqueia até 99% dos raios ultravioleta nocivos, protegendo
                  sua pele e evitando o desbotamento de móveis e estofados.
                </p>
              </div>

              {/* Benefit 2 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="rounded-full bg-[#201e1f]/10 p-3 w-fit">
                  <Thermometer className="h-6 w-6 text-[#1458b8]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">Conforto Térmico</h3>

                <p className="mt-2 text-muted-foreground">
                  Reduz significativamente o calor interno, proporcionando maior
                  conforto e economia de energia com ar condicionado.
                </p>
              </div>

              {/* Benefit 3 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="rounded-full bg-[#201e1f]/10 p-3 w-fit">
                  <Eye className="h-6 w-6 text-[#1458b8]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">Privacidade</h3>

                <p className="mt-2 text-muted-foreground">
                  Garante maior privacidade durante o dia, impedindo a
                  visibilidade do exterior para o interior.
                </p>
              </div>

              {/* Benefit 4 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="rounded-full bg-[#201e1f]/10 p-3 w-fit">
                  <Shield className="h-6 w-6 text-[#1458b8]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">Segurança</h3>

                <p className="mt-2 text-muted-foreground">
                  Em caso de quebra, a película ajuda a manter os fragmentos de
                  vidro unidos, reduzindo o risco de ferimentos.
                </p>
              </div>

              {/* Benefit 5 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="rounded-full bg-[#201e1f]/10 p-3 w-fit">
                  <Hourglass className="h-6 w-6 text-[#1458b8]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">Durabilidade</h3>

                <p className="mt-2 text-muted-foreground">
                  Nossas películas são feitas com materiais de alta qualidade,
                  garantindo resistência e durabilidade por muitos anos.
                </p>
              </div>

              {/* Benefit 6 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="rounded-full bg-[#201e1f]/10 p-3 w-fit">
                  <Gem className="h-6 w-6 text-[#1458b8]" />
                </div>

                <h3 className="mt-4 text-xl font-bold">Estética</h3>

                <p className="mt-2 text-muted-foreground">
                  Melhora a aparência de residências e veículos, agregando valor
                  e sofisticação ao seu patrimônio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}

        <section id="sobre" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Image
                  src="/images/instalacao-residencial.jpeg"
                  alt="Nossa equipe trabalhando"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sobre Nós
                </h2>

                <p className="text-muted-foreground md:text-xl">
                  Há mais de 10 anos no mercado, a JS Films se destaca pela
                  excelência em serviços de instalação de películas para
                  residências e veículos.
                </p>

                <p className="text-muted-foreground">
                  Nossa equipe é formada por profissionais altamente
                  qualificados e treinados para garantir a perfeita aplicação
                  das películas, utilizando técnicas avançadas e materiais de
                  primeira linha.
                </p>

                <p className="text-muted-foreground">
                  Nosso compromisso é oferecer soluções personalizadas que
                  atendam às necessidades específicas de cada cliente, sempre
                  com foco na qualidade, durabilidade e satisfação.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#1458b8]">
                      10+
                    </span>

                    <span className="text-muted-foreground">
                      Anos de experiência
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#1458b8]">
                      1000+
                    </span>

                    <span className="text-muted-foreground">
                      Clientes satisfeitos
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#1458b8]">
                      100%
                    </span>

                    <span className="text-muted-foreground">
                      Garantia de serviço
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#1458b8]">
                      10000+
                    </span>

                    <span className="text-muted-foreground">
                      Metros quadrados aplicado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}

        <section id="nossosCliente" className="py-16 md:py-24 bg-muted">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                O Que Nossos Clientes Dizem
              </h2>

              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A satisfação de nossos clientes é o nosso maior orgulho. Confira
                alguns depoimentos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Testimonial 1 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#201e1f]/10 p-2">
                    <span className="text-xl font-bold text-primary">AP</span>
                  </div>

                  <div>
                    <h4 className="font-bold">Ana Paula Carvalho</h4>

                    <p className="text-sm text-muted-foreground">
                      Curitiba, PR
                    </p>
                  </div>
                </div>

                <p className="italic text-muted-foreground">
                  "Instalei película em todos os vidros da minha casa e a
                  diferença é impressionante. O calor reduziu drasticamente e a
                  privacidade aumentou. Serviço impecável e profissional."
                </p>
              </div>

              {/* Testimonial 2 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#201e1f]/10 p-2">
                    <span className="text-xl font-bold text-primary">AS</span>
                  </div>

                  <div>
                    <h4 className="font-bold">Altieris Souza</h4>

                    <p className="text-sm text-muted-foreground">
                      São José dos Pinhais, PR
                    </p>
                  </div>
                </div>

                <p className="italic text-muted-foreground">
                  "Apliquei película no meu carro e fiquei impressionado com a
                  qualidade do serviço. Além de ficar esteticamente bonito, o
                  interior do carro fica muito mais fresco nos dias quentes."
                </p>
              </div>

              {/* Testimonial 3 */}

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-[#201e1f]/10 p-2">
                    <span className="text-xl font-bold text-primary">JA</span>
                  </div>

                  <div>
                    <h4 className="font-bold">João Alfredo</h4>

                    <p className="text-sm text-muted-foreground">
                      Campo Largo, PR
                    </p>
                  </div>
                </div>

                <p className="italic text-muted-foreground">
                  "Contratei para meu escritório e o resultado superou minhas
                  expectativas. Ambiente mais confortável, menos uso de ar
                  condicionado e ainda ganhamos em privacidade. Recomendo!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}

        <section id="contato" className="py-16 md:py-24">
          <div className="container">
            <div className="md:text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Entre em Contato
              </h2>

              <p className="md:mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Estamos prontos para atender você e oferecer a melhor solução
                para suas necessidades. Entre em contato conosco para um
                orçamento gratuito.
              </p>
            </div>

            <div className="md:max-w-2xl md:mx-auto">
              <div className="space-y-6">
                <div className="md:flex md:justify-center md:gap-8">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="rounded-full bg-[#201e1f]/10 p-2">
                      <Phone className="h-5 w-5 text-[#1458b8]" />
                    </div>

                    <div>
                      <p className="font-medium">Telefone</p>

                      <p className="text-muted-foreground">(41) 99914-5537</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#201e1f]/10 p-2">
                      <Mail className="h-5 w-5 text-[#1458b8]" />
                    </div>

                    <div>
                      <p className="font-medium">E-mail</p>

                      <p className="text-muted-foreground">
                        jsfilmscomercial@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-4 md:text-center">
                    Horário de Atendimento
                  </h3>

                  <div className="space-y-2 md:max-w-md md:mx-auto">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta</span>

                      <span>08:00 - 18:00</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Sábado e Domingo</span>

                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">JS Films</span>
              </div>

              <p className="text-sm text-muted-foreground">
                Há mais de 10 anos oferecendo soluções em películas de alta
                qualidade para residências e veículos.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/js.filmsoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full  p-2  transition-colors"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/instagram.png"
                    alt="Nossa equipe trabalhando"
                    width={36}
                    height={36}
                  />
                </a>

                <a
                  href="https://wa.link/cjtc55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Serviços</h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#servicos"
                    onClick={(e) => scrollToSection(e, "servicos")}
                    className="hover:text-primary"
                  >
                    Películas Residenciais
                  </a>
                </li>

                <li>
                  <a
                    href="#servicos"
                    onClick={(e) => scrollToSection(e, "servicos")}
                    className="hover:text-primary"
                  >
                    Películas Automotivas
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#sobre"
                    onClick={(e) => scrollToSection(e, "sobre")}
                    className="hover:text-primary"
                  >
                    Sobre Nós
                  </a>
                </li>

                <li>
                  <a
                    href="#nossosCliente"
                    onClick={(e) => scrollToSection(e, "nossosCliente")}
                    className="hover:text-primary"
                  >
                    Nossos Clientes
                  </a>
                </li>

                <li>
                  <a
                    href="#contato"
                    onClick={(e) => scrollToSection(e, "contato")}
                    className="hover:text-primary"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contato</h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />

                  <span>(41) 99914-5537</span>
                </li>

                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />

                  <span>jsfilmscomercial@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} JS Films. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
