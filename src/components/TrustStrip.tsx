import { theme } from '../theme';

export default function TrustStrip() {
  return (
    <div className="bg-gray-50 border-y border-gray-100 py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium text-sm sm:text-base uppercase tracking-wider mb-6">
          Trusted by businesses across India and global markets
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale">
          {/* Placeholder logos for trust strip */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-center h-12 w-32 bg-gray-200 rounded-md animate-pulse">
              <span className="text-gray-400 text-xs font-semibold">PARTNER {i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
