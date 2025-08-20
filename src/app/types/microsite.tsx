import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { LeadAttributes } from "./leads"

export interface NavLinks {
    href: string,
    label: string,
}

export interface HeroSection {
    poster: string,
    video: string,
    preHeadline: string,
    headline: string,
    subheading: string,
    button: string,
}

export interface Proof {
    icon: string,
    number: string,
    text: string,
}

export interface Step {
    number: number,
    title: string,
    text: string,
}

export interface HowSection {
    title: string,
    subtitle: string,
    steps: Array<Step>
}

export interface CaseItem {
    image: string,
    alt: string,
    quote: string,
    author: string,
    result: string,
}

export interface Case {
    title: string,
    subtitle: string,
    items: Array<CaseItem>,
    logosTitle: string,
    logos: Array<string>
}

export interface BenefitItem {
    icon: string,
    title: string,
    text: string,
}

export interface Benefit {
    title: string,
    subtitle: string,
    items: Array<BenefitItem>
}

export interface FAQItems {
    q: string,
    a: string,
}

export interface FAQ {
    title: string,
    subtitle: string,
    items: Array<FAQItems>
}

export interface CTA {
    title: string,
    button: string
}

export interface FooterSection {
    title: string,
    links?: Array<NavLinks>
    texts?: Array<string>
}

export interface Footer {
    sections: Array<FooterSection>
    copyright: string
}

export interface MicrositeAttributes {
    id?: string,
    title: string,
    slug: string,
    styles: string,
    brand: string,
    navButton: string,
    navLinks: Array<NavLinks>,
    hero: HeroSection,
    proofs: Array<Proof>
    how: HowSection
    cases: Case,
    benefits: Benefit,
    faq: FAQ,
    cta: CTA
    footer: Footer
    leads?: Array<LeadAttributes>
}

export interface Props<T extends FieldValues> {
    isAvailable: boolean,
    register: UseFormRegister<T>,
    errors: FieldErrors<T>
}