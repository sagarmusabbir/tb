import {
  Footer,
  FooterBottom,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
  FooterText,
  ThemeToggle,
} from "@thirdbracket/bracketui";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const SiteFooter = () => {
  return (
    <Footer>
      <FooterSection className="col-span-2">
        <FooterBrand logo="/path.svg">
          Making the web a better place with beautiful UI components.
        </FooterBrand>
        <div className="flex -ml-1.5 gap-x-4 justify-start items-center">
          <FooterSocial
            href="https://facebook.com/yourpage"
            icon={<SiFacebook size={16} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://linkedin.com/in/yourprofile"
            icon={<SiLinkedin size={18} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="https://linkedin.com/in/yourprofile"
            icon={<SiGithub size={18} />}
            label="LinkedIn"
          />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink href="/components">Components</FooterLink>
        <FooterLink href="/templates">Templates</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="/docs">Documentation</FooterLink>
        <FooterLink href="/guides">Guides</FooterLink>
        <FooterLink href="/support">Support</FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
      </FooterSection>
      <FooterSection title="More">
        <FooterLink href="/components">Components</FooterLink>
        <FooterLink href="/templates">Templates</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
      </FooterSection>
      <FooterBottom>
        <FooterText>© 2024 Third Bracket Solution.</FooterText>
        <div>
          <ThemeToggle />
        </div>
      </FooterBottom>
    </Footer>
  );
};
export default SiteFooter;
