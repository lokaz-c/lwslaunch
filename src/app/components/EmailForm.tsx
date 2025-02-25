'use client';

import { FormEvent, useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement actual email submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl mb-4">Be the first to know when we launch</h3>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Notify Me'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-green-400">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
      )}
    </div>
  );
} 