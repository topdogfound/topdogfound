import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { CoolMode } from "@/components/ui/cool-mode";
import { KineticText } from "@/components/ui/kinetic-text";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <KineticText
          as="h2"
          text="Get in Touch"
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
        />
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Just shoot me a dm{" "}
          <CoolMode options={{ particle: "✦", size: 8 }}>
            <span className="inline-block">
              <Link
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                with a direct question on twitter
              </Link>
            </span>
          </CoolMode>{" "}
          and I&apos;ll respond whenever I can. I will ignore all
          soliciting.
        </p>
      </div>
    </div>
  );
}
