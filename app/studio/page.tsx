import React from 'react';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-(family-name:--font-geist-sans)">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Secure Access Granted
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            Creator Studio
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Welcome to your private workspace. This space is protected by advanced authentication protocols to ensure your creative assets remain yours.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Active Projects', value: '12', trend: '+20%' },
            { label: 'Total Reach', value: '1.2M', trend: '+12%' },
            { label: 'Avg. Engagement', value: '4.8%', trend: '+5%' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group">
              <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
              <div className="mt-2 flex items-baseline gap-4">
                <span className="text-3xl font-semibold">{stat.value}</span>
                <span className="text-emerald-400 text-sm font-medium">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-96 rounded-3xl bg-neutral-900/30 border border-neutral-800 flex items-center justify-center group overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/5 via-transparent to-transparent"></div>
              <div className="text-center space-y-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Initialize New Project</h3>
                  <p className="text-neutral-500 text-sm">Deploy a new environment to start creating.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h3 className="text-lg font-medium">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-neutral-700 mt-2"></div>
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-300">Project "Alpha" synchronized</p>
                      <p className="text-xs text-neutral-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Open Dashboard Settings
            </button>
          </aside>
        </main>
      </div>
    </div>
  );
}
