import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Eye, Focus, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/cb864109-59fe-487b-abe1-ea198715f97a.png" 
              alt="Make Me Productive Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-text-heading">Make Me Productive</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy">
              <Button variant="ghost">Privacy Policy</Button>
            </Link>
            <Button className="bg-gradient-primary text-white hover:opacity-90">
              Add to Chrome
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            YouTube Focus Filter
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-text-heading mb-6 leading-tight">
            Reclaim Your Focus on 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> YouTube</span>
          </h1>
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto leading-relaxed">
            Hide distracting sections like sidebars, comments, and home recommendations. 
            Stay focused on what matters with our privacy-first Chrome extension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-elegant">
              <Zap className="w-5 h-5 mr-2" />
              Install Extension
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Eye className="w-5 h-5 mr-2" />
              See Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-text-muted">Privacy First</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-text-muted">Data Collected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1-Click</div>
              <div className="text-sm text-text-muted">Setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Everything you need to maintain focus while browsing YouTube
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Hide Distractions</CardTitle>
              <CardDescription>
                Remove sidebars, comments, and recommendations that pull your attention away from your content.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Focus className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Custom Controls</CardTitle>
              <CardDescription>
                Choose exactly which sections to hide. Customize your YouTube experience to match your focus needs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                No data collection, no tracking, no external servers. Your preferences stay on your device.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Instant Setup</CardTitle>
              <CardDescription>
                One-click installation with immediate effect. No configuration required to get started.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Lightweight</CardTitle>
              <CardDescription>
                Minimal resource usage that won't slow down your browser or YouTube experience.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Always Updated</CardTitle>
              <CardDescription>
                Regular updates ensure compatibility with YouTube's latest changes and improvements.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Get focused in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Install Extension</h3>
              <p className="text-text-body">Add Make Me Productive to Chrome with one click from the Chrome Web Store.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Visit YouTube</h3>
              <p className="text-text-body">Navigate to YouTube and see distracting elements automatically hidden.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Stay Focused</h3>
              <p className="text-text-body">Enjoy distraction-free YouTube with customizable focus settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg text-text-body mb-8">
            Join thousands of users who have reclaimed their focus on YouTube with our privacy-first extension.
          </p>
          <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-elegant">
            <Zap className="w-5 h-5 mr-2" />
            Add to Chrome - It's Free
          </Button>
          <p className="text-sm text-text-muted mt-4">
            No registration required • Works immediately • 100% private
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/cb864109-59fe-487b-abe1-ea198715f97a.png" 
                alt="Make Me Productive Logo" 
                className="w-6 h-6"
              />
              <span className="text-text-heading font-medium">Make Me Productive</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>© 2024 Make Me Productive</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;