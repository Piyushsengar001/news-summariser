import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, Globe, Brain, Settings, Rocket, Code, Database, Shield, Loader2, ExternalLink, TrendingUp, Eye, Zap, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [url, setUrl] = useState("");
  const [analysis, setAnalysis] = useState<{summary: string, bias: string} | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const analyzeArticle = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL");
      return;
    }
    
    setLoading(true);
    setError("");
    setAnalysis(null);
    
    try {
      const response = await fetch('/api/analyze-news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze article');
      }
      
      const result = await response.json();
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI analyzes articles for bias and provides summaries"
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "Bias Detection", 
      description: "Identifies political leanings and explains the reasoning"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Instant Results",
      description: "Get comprehensive analysis in seconds"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Reliable Sources",
      description: "Works with major news outlets and publications"
    }
  ];

  const stats = [
    { label: "Articles Analyzed", value: "50K+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Accuracy Rate", value: "94%", icon: <Star className="w-5 h-5" /> },
    { label: "Active Users", value: "12K+", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                Powered by Google Gemini AI
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                News Bias
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Analyzer</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Instantly analyze news articles for political bias and get AI-powered summaries.
                Understand the full picture behind the headlines.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-6 sm:py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-blue-600">{stat.icon}</div>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold text-gray-900 transition-all duration-1000 ${animateStats ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Demo Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <Brain className="w-6 h-6 text-blue-600" />
                    Try It Now
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Paste any news article URL and get instant bias analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Input
                      placeholder="Paste news article URL here..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && analyzeArticle()}
                      className="flex-1 h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all px-4"
                    />
                    <Button
                      onClick={analyzeArticle}
                      disabled={loading || !url.trim()}
                      className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Brain className="w-5 h-5 mr-2" />
                          Analyze
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg animate-fadeIn">
                      <p className="text-red-700 font-medium">{error}</p>
                    </div>
                  )}
                  
                  {analysis && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                        <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          Article Summary
                        </h3>
                        <p className="text-green-700 leading-relaxed">{analysis.summary}</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          Bias Analysis
                        </h3>
                        <p className="text-blue-700 leading-relaxed">{analysis.bias}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Analyzer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets intuitive design for comprehensive news analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive news analysis in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Paste URL</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply paste any news article URL from major publications and websites
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI processes the content and identifies bias patterns
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Get Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive detailed summary and bias analysis with explanations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Analyze News Articles?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our AI-powered analysis for unbiased news understanding
          </p>
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg rounded-xl transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Try It Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">News Bias Analyzer</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering informed decisions through AI-powered news analysis
            </p>
            <div className="flex justify-center space-x-6">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Real-time Analysis
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Bias Detection
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
