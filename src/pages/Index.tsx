
import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import { Github, Twitter, Youtube, Linkedin } from "lucide-react";

const links = [
  {
    title: "Follow me on Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    title: "Connect on LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    title: "Check out my GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    title: "Watch my tutorials",
    href: "https://youtube.com",
    icon: Youtube,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <Profile />
        <div className="mt-12 space-y-4">
          {links.map((link, index) => (
            <LinkCard
              key={link.href}
              href={link.href}
              title={link.title}
              icon={link.icon}
              className="delay-[${index * 100}ms]"
            />
          ))}
        </div>
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 Jane Smith. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
