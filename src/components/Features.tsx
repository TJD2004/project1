import { Zap, Shield, Layers, BarChart, Cloud, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance that scales with your needs. Experience blazing fast load times.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.',
  },
  {
    icon: Layers,
    title: 'Easy Integration',
    description: 'Connect with your favorite tools seamlessly. 50+ pre-built integrations available.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Get actionable insights with real-time data visualization and custom reports.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for the cloud with automatic scaling and global distribution.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together effortlessly with real-time collaboration and shared workspaces.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that help you build better, faster, and smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
