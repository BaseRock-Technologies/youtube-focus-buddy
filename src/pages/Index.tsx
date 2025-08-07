import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Focus, Clock, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold text-text-heading">Make Me Productive</span>
            </div>
            <Link to="/privacy">
              <Button variant="ghost" size="sm">
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
            <Focus className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-text-heading mb-6 max-w-4xl mx-auto">
            Stay Focused on <span className="text-primary">YouTube</span>
          </h1>
          <p className="text-xl text-text-body max-w-2xl mx-auto mb-8">
            Chrome extension that helps you focus by hiding distracting elements like sidebars, comments, and recommendations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Download Extension
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center border-0 bg-card/60 backdrop-blur-sm shadow-[var(--shadow-soft)]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Youtube className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">Hide Distractions</h3>
            <p className="text-text-body">Remove sidebars, comments, and recommendations that pull your attention away from learning.</p>
          </Card>

          <Card className="p-6 text-center border-0 bg-card/60 backdrop-blur-sm shadow-[var(--shadow-soft)]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Focus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">Stay Focused</h3>
            <p className="text-text-body">Maintain your concentration on educational content without algorithmic distractions.</p>
          </Card>

          <Card className="p-6 text-center border-0 bg-card/60 backdrop-blur-sm shadow-[var(--shadow-soft)]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">Save Time</h3>
            <p className="text-text-body">Spend less time being distracted and more time learning from quality educational videos.</p>
          </Card>
        </div>

        {/* Privacy Notice */}
        <div className="text-center mt-16">
          <Card className="p-6 max-w-2xl mx-auto border-0 bg-muted/30 backdrop-blur-sm">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-text-heading mb-2">Privacy First</h3>
            <p className="text-text-body mb-4">
              Your data stays on your device. We don't collect, store, or share any personal information.
            </p>
            <Link to="/privacy">
              <Button variant="outline" size="sm">
                Read Full Privacy Policy
              </Button>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
