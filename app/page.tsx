import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Target,
  Cog,
  Users,
  ChevronRight,
  Play,
  CheckCircle,
  Settings,
  Database,
  BarChart3,
  Shield,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Cog className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Axial</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors">
                Workflow
              </a>
              <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
                Use Cases
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted/20 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Next-Generation Automation
            </Badge> */}

            <h1 className="font-playfair text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
              CAE Simulation workflow on Autopilot with AI
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed">
              Automate the CAE validation process after a CAD revision update - Get highlights from 
              CAE results documented and optimize designs quicker
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                See It in Action
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2x2 mx-auto">
              Our product automates CAE workflows and seamlessly integrates with CAD softwares 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Live CAD Revision Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Integrated with PDM to constantly check for design updates, and automatically pulls updated CAD
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">CAE Framework Derivation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Access to company’s shared data allows generation of CAE load cases with AI to validate any design update
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Results Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Automatically documents key highlights from simulation results after completion 
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Design Optimizations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Interpret CAE results to recommend design changes for mass and cost reduction opportunities
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Engineer In The Loop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Customer has full visibility of CAE workflow and ability to make changes at any step  
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Simulation Debugging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Automatically debugs failed simulations and requeue until it passes
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Streamlined Workflow Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2x2 mx-auto">
              Our four-step process goes from a CAD input to a CAE output without any manual input 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">1. Pull CAD from PDM</h3>
              {/* <p className="text-muted-foreground">
                Design engineer inputs comments when checking in updated part to PDM
              </p> */}
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">2. Setup CAE config using AI</h3>
              {/* <p className="text-muted-foreground">
                Automated data ingestion, validation, and preprocessing to ensure simulation accuracy and reliability.
              </p> */}
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">3. Run & Monitor Simulation</h3>
              {/* <p className="text-muted-foreground">
                Generate comprehensive reports with visualizations, insights, and actionable recommendations.
              </p> */}
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">4. Document Key Results</h3>
              {/* <p className="text-muted-foreground">
                Generate comprehensive reports with visualizations, insights, and actionable recommendations.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Picture Section
        <section id="workflow-image" className="py-2 bg-white">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <img
                src="/flowchart-workflow-2.png" // replace with your image path
                alt="Workflow Diagram"
                className="max-w-6xl h-auto"
              />
            </div>
          </div>
        </section> */}


      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Capable of all CAE analyses integrated within ANSYS products 
            </h2>
            <p className="text-muted-foreground text-lg max-w-2x2 mx-auto">
              Our platform supports multiple types of simulation workflows across diverse engineering applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Structural</h3>
                  <p className="text-muted-foreground">
                    Analyze stresses, deformations, vibrations, and failures in solid components under loads.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Fluids</h3>
                  <p className="text-muted-foreground">
                    Simulate fluid flow, turbulence, and pressure or velocity distribution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Thermal</h3>
                  <p className="text-muted-foreground">
                    Predict temperature distribution and heat flow in materials and systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Electromagnetics</h3>
                  <p className="text-muted-foreground">
                    Model electric and magnetic fields for devices, circuits, and RF systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Multiphysics</h3>
                  <p className="text-muted-foreground">
                    Combine interactions between multiple physical phenomena in a single setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/engineering-simulation-dashboard-3.png"
                alt="Simulation workflow dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl mb-4">
              OUR TEAM IS FROM:
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <Card className="p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <img
                  src="/ansys.png" // image in public/images/
                  alt="Card image"
                  className="object-contain"
                />
              </CardContent>
            </Card>

            <Card className="p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <img
                  src="/mercedesf1.png" // image in public/images/
                  alt="Card image"
                  className="object-contain"
                />
              </CardContent>
            </Card>

            <Card className="p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <img
                  src="/tesla.png" // image in public/images/
                  alt="Card image"
                  className="object-contain"
                />
              </CardContent>
            </Card>

            <Card className="p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <img
                  src="/formlabs.png" // image in public/images/
                  alt="Card image"
                  className="object-contain"
                />
              </CardContent>
            </Card>

            {/* <Card className="p-0 bg-transparent shadow-none border-none">
              <CardContent className="p-0">
                <img
                  src="/antora.png" // image in public/images/
                  alt="Card image"
                  className="object-contain"
                />
              </CardContent>
            </Card> */}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold sm:text-4xl mb-4">Ready to Transform Your Workflows?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of engineers and researchers who have revolutionized their simulation processes with Axial.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Cog className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Axial</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Empowering engineers and researchers with intelligent simulation workflow automation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Axial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
