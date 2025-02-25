import Image from "next/image";
import EmailForm from './components/EmailForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            The LWS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            AI-Powered Website Building Platform
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Create stunning websites instantly with the power of AI. Simply describe your vision, and watch as we transform it into a beautiful, functional website.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">Instant website previews</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">AI-powered design suggestions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">Customizable templates</span>
              </div>
            </div>
          </div>
          
          <EmailForm />
        </div>
      </div>
    </main>
  );
}
