import Link from "next/link";
import { CheckIcon, ShieldCheckIcon, Github, Layers, PlaySquare, Settings2, GitMerge } from "lucide-react";
import { Si1password, SiAirbnb, SiLufthansa, SiMcdonalds, SiPaloaltonetworks, SiStarbucks } from "@icons-pack/react-simple-icons";
import HeroAnimation from "@/components/HeroAnimation";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-4 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            GitOps for Terraform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            An open-source Kubernetes Operator that brings declarative GitOps orchestration and state-machine predictability directly to your Terraform environments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs/getting-started" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
              Get Started
            </Link>
            <a href="https://github.com/magosproject" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </div>

          {/* Featured Visual Frame / Animation */}
          <HeroAnimation />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-4 w-full bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Used by engineering teams worldwide
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:opacity-80 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
              <SiStarbucks className="w-8 h-8" />
              <span>Starbucks</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
              <Si1password className="w-8 h-8" />
              <span>1Password</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
              <SiAirbnb className="w-8 h-8" />
              <span>AirBnb</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
              <SiMcdonalds className="w-8 h-8" />
              <span>McDonalds</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
              <SiLufthansa className="w-8 h-8" />
              <span>Lufthansa</span>
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
              <SiPaloaltonetworks className="w-8 h-8" />
              <span>Palo Alto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Infrastructure tooling should be fundamentally reliable, strictly secure, and governed by its users. Magos is built by practitioners, for practitioners. It is <strong>100% open-source</strong>, free forever, and steered by a neutral committee. No commercial agenda. No vendor lock-in. Just enterprise-grade orchestration.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 w-full bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              State-Machine Driven Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decoupling orchestration from execution for maximum predictability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
            <Link href="/docs/magos/projects" className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Establish logical boundaries for your infrastructure. Projects act as the top-level grouping mechanism, ensuring that configurations and variable sets remain scoped and highly predictable across related environments.
              </p>
            </Link>

            <Link href="/docs/magos/variablesets" className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Settings2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">Variable Sets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Define reusable configurations centrally. Variable sets seamlessly propagate downward from the project boundary to individual workspaces, drastically reducing operational redundancy and ensuring absolute consistency.
              </p>
            </Link>

            <Link href="/docs/magos/workspaces" className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <PlaySquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">Workspaces</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strictly passive executors. Every workspace is a fully isolated Kubernetes Custom Resource that executes Terraform operations only when explicitly authorized, ensuring zero blast radius between sibling environments.
              </p>
            </Link>

            <Link href="/docs/magos/rollouts" className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <GitMerge className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">Rollouts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sophisticated state machines that dynamically group workspaces using label selectors. Rollouts provide deterministic progression across your environments, enforcing limits and failure policies natively in Kubernetes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Security Section */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 text-left">
            <div className="flex-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Magos operates strictly on standard Kubernetes RBAC. By utilizing isolated runner pods for every Workspace and enforcing deterministic state transitions through the Rollout controller, the blast radius of any infrastructure failure or credential exposure is strictly minimized.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Zero hardcoded dependencies between workspaces.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Clear boundaries via Project scoping.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Cryptographic state verification via Git commit hashes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}