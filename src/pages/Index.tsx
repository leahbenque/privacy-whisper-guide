
import { useState } from 'react';
import { Shield, Eye, Lock, FileText, Users, Globe, ChevronRight, Menu, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'rights', title: 'Your Rights', icon: FileText },
    { id: 'protection', title: 'Protection Tips', icon: Lock },
    { id: 'laws', title: 'Privacy Laws', icon: Globe },
    { id: 'monitoring', title: 'Data Monitoring', icon: Eye },
    { id: 'companies', title: 'Company Practices', icon: Users },
  ];

  const privacyTopics = [
    {
      title: "What is Data Privacy?",
      description: "Understanding the fundamental concepts of personal data protection",
      content: "Data privacy refers to the proper handling of personal information including how data is collected, processed, stored, and shared. It encompasses your right to control what information about you is collected and how it's used by organizations.",
      tips: [
        "Personal data includes any information that can identify you",
        "Companies must have legitimate reasons to collect your data",
        "You have the right to know what data is collected about you",
        "Privacy policies explain how your data is handled"
      ]
    },
    {
      title: "Your Privacy Rights",
      description: "Learn about your fundamental rights regarding personal data",
      content: "Under various privacy laws like GDPR and CCPA, you have specific rights over your personal data that companies must respect.",
      tips: [
        "Right to access your personal data",
        "Right to correct inaccurate information",
        "Right to delete your data (right to be forgotten)",
        "Right to data portability",
        "Right to object to processing",
        "Right to restrict processing"
      ]
    },
    {
      title: "Data Protection Best Practices",
      description: "Practical steps to protect your personal information online",
      content: "Taking proactive steps to protect your data is essential in today's digital world. Here are key practices to safeguard your privacy.",
      tips: [
        "Use strong, unique passwords for each account",
        "Enable two-factor authentication",
        "Review privacy settings on social media",
        "Be cautious with public Wi-Fi",
        "Regularly update software and apps",
        "Use privacy-focused browsers and search engines"
      ]
    }
  ];

  const privacyLaws = [
    {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      year: "2018",
      description: "Comprehensive data protection law giving individuals control over their personal data."
    },
    {
      name: "CCPA",
      fullName: "California Consumer Privacy Act",
      region: "California, USA",
      year: "2020",
      description: "Gives California residents rights over their personal information."
    },
    {
      name: "PIPEDA",
      fullName: "Personal Information Protection and Electronic Documents Act",
      region: "Canada",
      year: "2000",
      description: "Federal privacy law governing how private sector organizations collect and use personal information."
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Data Privacy</h2>
              <p className="text-lg text-gray-600 mb-8">
                Learn about your digital rights, how to protect your personal information, and understand the laws that safeguard your privacy online.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privacyTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{topic.content}</p>
                    <div className="space-y-2">
                      {topic.tips.slice(0, 3).map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'rights':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understanding your fundamental rights regarding personal data collection and processing.
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  right: "Right to Access",
                  description: "You can request a copy of all personal data an organization holds about you.",
                  icon: Eye
                },
                {
                  right: "Right to Rectification",
                  description: "You can request corrections to inaccurate or incomplete personal data.",
                  icon: FileText
                },
                {
                  right: "Right to Erasure",
                  description: "Also known as 'right to be forgotten' - you can request deletion of your data.",
                  icon: X
                },
                {
                  right: "Right to Data Portability",
                  description: "You can request your data in a machine-readable format to transfer elsewhere.",
                  icon: Globe
                },
                {
                  right: "Right to Object",
                  description: "You can object to certain types of data processing, especially for marketing.",
                  icon: Shield
                },
                {
                  right: "Right to Restrict Processing",
                  description: "You can limit how your data is processed in certain circumstances.",
                  icon: Lock
                }
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.right}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'protection':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Protect Your Data</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Practical steps you can take today to enhance your digital privacy and security.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Essential Steps</h3>
                {[
                  "Use strong, unique passwords for every account",
                  "Enable two-factor authentication whenever possible",
                  "Regularly review and update privacy settings",
                  "Keep software and apps updated",
                  "Use reputable antivirus software",
                  "Be cautious on public Wi-Fi networks"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Advanced Protection</h3>
                {[
                  "Use a VPN for additional encryption",
                  "Consider privacy-focused browsers like Firefox or Brave",
                  "Use search engines that don't track you",
                  "Regularly audit app permissions on your devices",
                  "Use encrypted messaging apps",
                  "Be selective about what you share on social media"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'laws':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Laws Worldwide</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Overview of major data protection regulations that govern how organizations handle personal data.
              </p>
            </div>
            
            <div className="grid gap-6">
              {privacyLaws.map((law, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">{law.name}</h3>
                      <p className="text-lg text-gray-700">{law.fullName}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">{law.region}</Badge>
                      <p className="text-sm text-gray-500">Enacted {law.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{law.description}</p>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'monitoring':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitor Your Digital Footprint</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn how to track and manage your online presence and data exposure.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Regular Audits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1" />
                    <span>Review your social media privacy settings quarterly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1" />
                    <span>Check what data Google has collected about you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1" />
                    <span>Monitor your credit reports for unusual activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1" />
                    <span>Use tools to see what information is publicly available</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Warning Signs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-red-600 mt-1" />
                    <span>Unexpected emails about account changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-red-600 mt-1" />
                    <span>Unknown devices logged into your accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-red-600 mt-1" />
                    <span>Unusual activity on financial statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-red-600 mt-1" />
                    <span>Targeted ads that seem too specific</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case 'companies':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Companies Handle Your Data</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understanding corporate data practices and what to look for in privacy policies.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">What Companies Collect</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Name and contact details</li>
                      <li>• Date of birth</li>
                      <li>• Payment information</li>
                      <li>• Government IDs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Behavioral Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Website visits</li>
                      <li>• Click patterns</li>
                      <li>• Purchase history</li>
                      <li>• Search queries</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• IP addresses</li>
                      <li>• Device information</li>
                      <li>• Browser data</li>
                      <li>• Location data</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Reading Privacy Policies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Look For</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Clear explanation of data collection</li>
                      <li>• Specific purposes for data use</li>
                      <li>• Data retention periods</li>
                      <li>• Third-party sharing policies</li>
                      <li>• Your rights and how to exercise them</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Red Flags</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Vague language about data use</li>
                      <li>• Broad data sharing permissions</li>
                      <li>• No clear opt-out options</li>
                      <li>• Unlimited data retention</li>
                      <li>• Difficult contact information</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PrivacyGuard</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    onClick={() => setActiveSection(section.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {section.title}
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {section.title}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-semibold">PrivacyGuard</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering you with knowledge to protect your digital privacy
            </p>
            <p className="text-sm text-gray-500">
              © 2024 PrivacyGuard. This is an educational resource for learning about data privacy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
