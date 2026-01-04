import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SuccessPage = ({ onGoHome }) => {
  return (
    <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-black mb-2" style={{ color: '#4A148C' }}>Payment Received!</h2>
      <p className="text-gray-500 mb-8">
        Your job listing is now live. It will be visible to thousands of seekers for the next 30 days.
      </p>

      <button 
        onClick={onGoHome}
        className="w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition"
        style={{ backgroundColor: '#4A148C' }}
      >
        View My Listing <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SuccessPage;
