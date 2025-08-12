import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Eye, Focus, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-funky rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-rainbow rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-glow rounded-full opacity-25 animate-bounce"></div>
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
          <Badge className="mb-6 bg-gradient-rainbow text-white border-0 animate-pulse shadow-rainbow px-6 py-2 text-lg font-bold">
            🚀 YouTube Focus Buddy ✨
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black text-text-heading mb-6 leading-tight animate-fade-in">
            Make Me <span className="bg-gradient-funky bg-clip-text text-transparent animate-pulse">Productive</span> 
            <br />
            <span className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">YouTube Focus Buddy</span>
          </h1>
          <p className="text-2xl md:text-3xl text-text-body mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in font-bold">
            🎯 Stay focused, reduce distractions, and make your YouTube time <span className="bg-gradient-primary bg-clip-text text-transparent">intentional</span>!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-funky text-white hover:scale-110 shadow-rainbow text-xl px-8 py-4 rounded-2xl font-black transition-all duration-500 hover:shadow-2xl animate-bounce">
              <Zap className="w-6 h-6 mr-3 animate-pulse" />
              🚀 Install Extension NOW!
            </Button>
            <Button size="lg" variant="outline" className="border-4 border-primary/50 hover:bg-gradient-glow hover:text-white hover:scale-110 text-xl px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:shadow-funky">
              <Eye className="w-6 h-6 mr-3" />
              👀 See Magic Demo
            </Button>
          </div>
          
          {/* Funky Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-black bg-gradient-funky bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-pulse">💯</div>
              <div className="text-lg font-bold text-primary">Privacy First</div>
              <div className="text-sm text-text-muted">Zero snooping!</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-black bg-gradient-rainbow bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-pulse">0️⃣</div>
              <div className="text-lg font-bold text-primary">Data Stolen</div>
              <div className="text-sm text-text-muted">Nada collected</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-black bg-gradient-primary bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-pulse">⚡</div>
              <div className="text-lg font-bold text-primary">Setup Time</div>
              <div className="text-sm text-text-muted">Lightning fast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-text-heading mb-6 animate-fade-in">
            ✨ <span className="bg-gradient-funky bg-clip-text text-transparent">Powerful Features</span> ✨
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto animate-fade-in font-bold">
            🔥 Everything you need to become a YouTube productivity ninja! 🥷
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 bg-gradient-to-br from-card via-primary/5 to-accent/10 hover:shadow-rainbow hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in rounded-3xl overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-funky rounded-2xl flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300 shadow-funky">
                <Eye className="w-8 h-8 text-white animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-black text-primary">🚫 Distraction-Free Mode</CardTitle>
              <CardDescription className="text-base font-semibold text-text-body">
                Hide recommendations, comments, and other tempting content that pulls you off track! 🎯
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card via-accent/5 to-primary/10 hover:shadow-rainbow hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in rounded-3xl overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-rainbow rounded-2xl flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300 shadow-funky">
                <Clock className="w-8 h-8 text-white animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-black text-primary">⏰ Custom Focus Timer</CardTitle>
              <CardDescription className="text-base font-semibold text-text-body">
                Set time limits for watching videos to prevent overconsumption and maintain productivity! ⚡
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card via-primary/10 to-accent/5 hover:shadow-rainbow hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in rounded-3xl overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-glow rounded-2xl flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300 shadow-funky">
                <CheckCircle className="w-8 h-8 text-white animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-black text-primary">✅ Channel Whitelisting</CardTitle>
              <CardDescription className="text-base font-semibold text-text-body">
                Allow only specific educational channels or playlists that match your learning goals! 🎓
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card via-accent/10 to-primary/5 hover:shadow-rainbow hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in rounded-3xl overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-funky rounded-2xl flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300 shadow-funky">
                <Zap className="w-8 h-8 text-white animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-black text-primary">⚡ Break Reminders</CardTitle>
              <CardDescription className="text-base font-semibold text-text-body">
                Get gentle nudges to take a break or return to work when your time is up! ⏰
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card via-primary/5 to-accent/10 hover:shadow-rainbow hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in rounded-3xl overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-rainbow rounded-2xl flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300 shadow-funky">
                <Focus className="w-8 h-8 text-white animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-black text-primary">🎨 Minimalist UI</CardTitle>
              <CardDescription className="text-base font-semibold text-text-body">
                Simple, clean interface that integrates smoothly into YouTube without clutter! ✨
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card via-accent/5 to-primary/10 hover:shadow-rainbow hover:-translate-y-2 hover:rotate-1 transition-all duration-500 animate-fade-in rounded-3xl overflow-hidden">
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-gradient-glow rounded-2xl flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300 shadow-funky">
                <Shield className="w-8 h-8 text-white animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-black text-primary">🔒 Privacy First</CardTitle>
              <CardDescription className="text-base font-semibold text-text-body">
                No data collection or storage. All settings are stored locally in your browser! 🛡️
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 py-20 relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-funky rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-rainbow rounded-full opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-text-heading mb-6 animate-fade-in">
              🎯 <span className="bg-gradient-rainbow bg-clip-text text-transparent">Perfect For</span> 🎯
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto animate-fade-in font-bold">
              Whether you're learning, working, or just trying to avoid endless binge-watching! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-funky rounded-3xl flex items-center justify-center text-4xl font-black mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce shadow-rainbow">
                📚
              </div>
              <h3 className="text-2xl font-black text-primary mb-3">Students</h3>
              <p className="text-lg font-semibold text-text-body">Use YouTube for study without falling into the "just one more video" loop! 🎓</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-rainbow rounded-3xl flex items-center justify-center text-4xl font-black mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce shadow-rainbow">
                💼
              </div>
              <h3 className="text-2xl font-black text-primary mb-3">Professionals</h3>
              <p className="text-lg font-semibold text-text-body">Maintain focus during work hours while accessing educational content! 💪</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-glow rounded-3xl flex items-center justify-center text-4xl font-black mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce shadow-rainbow">
                🚀
              </div>
              <h3 className="text-2xl font-black text-primary mb-3">Self-Learners</h3>
              <p className="text-lg font-semibold text-text-body">Track and manage your learning sessions with purposeful YouTube time! 🎯</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-text-heading mb-6 animate-fade-in">
            🚀 <span className="bg-gradient-funky bg-clip-text text-transparent">How It Works</span> 🚀
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto animate-fade-in font-bold">
            Get focused in three simple steps! ⚡
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-rainbow animate-bounce">
              1
            </div>
            <h3 className="text-2xl font-black text-primary mb-3">🔌 Install & Pin</h3>
            <p className="text-lg font-semibold text-text-body">Install the extension and pin it to your browser for easy access!</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-rainbow rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-rainbow animate-bounce">
              2
            </div>
            <h3 className="text-2xl font-black text-primary mb-3">⚙️ Set Preferences</h3>
            <p className="text-lg font-semibold text-text-body">Configure your focus settings: time limits, whitelist channels, break reminders!</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-funky rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-rainbow animate-bounce">
              3
            </div>
            <h3 className="text-2xl font-black text-primary mb-3">🎯 Stay Focused</h3>
            <p className="text-lg font-semibold text-text-body">Use YouTube as usual — distractions filtered, reminders keeping you on track!</p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-gradient-to-r from-accent/10 via-primary/20 to-accent/10 py-20 relative overflow-hidden">
        {/* More floating elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-rainbow rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-18 h-18 bg-gradient-funky rounded-full opacity-25 animate-bounce"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-text-heading mb-8 animate-fade-in">
              🔒 <span className="bg-gradient-glow bg-clip-text text-transparent">Privacy First</span> 🔒
            </h2>
            <p className="text-xl text-text-body mb-12 animate-fade-in font-bold">
              We value your privacy! Make Me Productive does NOT collect or store your personal data! 🛡️<br />
              All settings are stored locally in YOUR browser! 💻
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-black bg-gradient-funky bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-pulse">🚫</div>
                <div className="text-xl font-black text-primary mt-2">No Tracking</div>
                <div className="text-base font-semibold text-text-muted">Zero data collection!</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black bg-gradient-rainbow bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-pulse">💾</div>
                <div className="text-xl font-black text-primary mt-2">Local Storage</div>
                <div className="text-base font-semibold text-text-muted">Settings stay on YOUR device!</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black bg-gradient-glow bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-pulse">🔍</div>
                <div className="text-xl font-black text-primary mt-2">Open Source</div>
                <div className="text-base font-semibold text-text-muted">Transparent & auditable!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        {/* Final floating elements */}
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-gradient-funky rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-gradient-rainbow rounded-full opacity-30 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-text-heading mb-8 animate-fade-in">
            🎉 Ready to Take Control of Your YouTube Time? 🎉
          </h2>
          <p className="text-2xl text-text-body mb-12 animate-fade-in font-bold">
            Join users who have made their YouTube time more <span className="bg-gradient-primary bg-clip-text text-transparent">intentional</span> and <span className="bg-gradient-funky bg-clip-text text-transparent">productive</span>! 🚀
          </p>
          <Button size="lg" className="bg-gradient-funky text-white hover:scale-125 shadow-rainbow text-2xl px-12 py-6 rounded-3xl font-black transition-all duration-500 hover:shadow-2xl animate-bounce mb-6">
            <Zap className="w-8 h-8 mr-4 animate-pulse" />
            🔥 Add to Chrome - It's FREE! 🔥
          </Button>
          <p className="text-lg text-text-muted mt-6 animate-fade-in font-bold">
            ✅ No registration required • ⚡ Works immediately • 🔒 100% private
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