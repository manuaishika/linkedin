'use client';

import { useState } from 'react';

export default function ConnectPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const peers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Frontend Developer',
      experience: '5 years',
      skills: ['React', 'TypeScript', 'Next.js'],
      available: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Backend Engineer',
      experience: '3 years',
      skills: ['Node.js', 'Python', 'AWS'],
      available: true,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'AI Research Engineer',
      experience: '4 years',
      skills: ['TensorFlow', 'PyTorch', 'NLP'],
      available: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white dark:text-white light:text-[#202A44] mb-4">
            Connect with Peers
          </h1>
          <p className="text-gray-300 dark:text-gray-300 light:text-[#202A44] max-w-2xl mx-auto">
            Build meaningful professional relationships and expand your network. Connect with like-minded professionals, share experiences, and grow together in your career journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-white dark:text-white light:text-[#202A44]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Peer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {peers.map((peer) => (
            <div key={peer.id} className="card">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-white/10"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-[#202A44]">
                    {peer.name}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-[#202A44]">{peer.role}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Experience: {peer.experience}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {peer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button
                      className={`flex-1 py-2 rounded-lg ${
                        peer.available
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-white cursor-not-allowed'
                      }`}
                      disabled={!peer.available}
                    >
                      {peer.available ? 'Request Interview' : 'Unavailable'}
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-blue-600 text-blue-600">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interview Request Modal Placeholder */}
        <div className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-skillora-deep-blue mb-4">
              Request Interview
            </h3>
            <p className="text-skillora-blue mb-6">
              Send a personalized message to request a mock interview.
            </p>
            <textarea
              className="w-full h-32 p-3 border rounded-lg mb-4"
              placeholder="Write your message here..."
            ></textarea>
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 text-gray-600">Cancel</button>
              <button className="btn-primary">Send Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 