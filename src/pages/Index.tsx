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
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            YouTube Focus Buddy
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-text-heading mb-6 leading-tight animate-fade-in">
            Make Me Productive –
            <span className="bg-gradient-primary bg-clip-text text-transparent"> YouTube Focus Buddy</span>
          </h1>
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Stay focused, reduce distractions, and make your YouTube time intentional. 
            Your personal productivity companion for purposeful YouTube viewing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-elegant hover-scale transition-all duration-300">
              <Zap className="w-5 h-5 mr-2" />
              Install Extension
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 hover-scale transition-all duration-300">
              <Eye className="w-5 h-5 mr-2" />
              See Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in">
            <div className="text-center group cursor-pointer">
              <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-text-muted">Privacy First</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">0</div>
              <div className="text-sm text-text-muted">Data Collected</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">1-Click</div>
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
          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Distraction-Free Mode</CardTitle>
              <CardDescription>
                Hide recommendations, comments, and other tempting content that pulls you off track.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Custom Focus Timer</CardTitle>
              <CardDescription>
                Set time limits for watching videos to prevent overconsumption and maintain productivity.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Channel Whitelisting</CardTitle>
              <CardDescription>
                Allow only specific educational channels or playlists that match your learning goals.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Break Reminders</CardTitle>
              <CardDescription>
                Get gentle nudges to take a break or return to work when your time is up.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Focus className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Minimalist UI</CardTitle>
              <CardDescription>
                Simple, clean interface that integrates smoothly into YouTube without clutter.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                No data collection or storage. All settings are stored locally in your browser.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 animate-fade-in">
              🎯 Perfect For
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto animate-fade-in">
              Whether you're learning, working, or just trying to avoid endless binge-watching
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
                📚
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Students</h3>
              <p className="text-text-body">Use YouTube for study without falling into the "just one more video" loop.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
                💼
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Professionals</h3>
              <p className="text-text-body">Maintain focus during work hours while accessing educational content.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Self-Learners</h3>
              <p className="text-text-body">Track and manage your learning sessions with purposeful YouTube time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 animate-fade-in">
            🚀 How It Works
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto animate-fade-in">
            Get focused in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
              1
            </div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">Install & Pin</h3>
            <p className="text-text-body">Install the extension and pin it to your browser for easy access.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
              2
            </div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">Set Preferences</h3>
            <p className="text-text-body">Configure your focus settings: time limits, whitelist channels, break reminders.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
              3
            </div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">Stay Focused</h3>
            <p className="text-text-body">Use YouTube as usual — distractions filtered, reminders keeping you on track.</p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 animate-fade-in">
              🔒 Privacy First
            </h2>
            <p className="text-lg text-text-body mb-8 animate-fade-in">
              We value your privacy. Make Me Productive does not collect or store your personal data. 
              All settings are stored locally in your browser.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">No Tracking</div>
                <div className="text-sm text-text-muted">Zero data collection</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">Local Storage</div>
                <div className="text-sm text-text-muted">Settings stay on your device</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">Open Source</div>
                <div className="text-sm text-text-muted">Transparent and auditable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 animate-fade-in">
            Ready to Take Control of Your YouTube Time?
          </h2>
          <p className="text-lg text-text-body mb-8 animate-fade-in">
            Join users who have made their YouTube time more intentional and productive.
          </p>
          <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-elegant hover-scale transition-all duration-300 animate-fade-in">
            <Zap className="w-5 h-5 mr-2" />
            Add to Chrome - It's Free
          </Button>
          <p className="text-sm text-text-muted mt-4 animate-fade-in">
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