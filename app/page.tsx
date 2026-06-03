export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Product Managers
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Plan feature deprecation<br />
          <span className="text-[#58a6ff]">without breaking users</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          SunsetPlanner tracks feature usage, surfaces deprecation candidates, maps migration paths, and automates user communication — so you can retire legacy features with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Usage Analytics', desc: 'See exactly which features are used, by whom, and how often — in real time.' },
            { title: 'Deprecation Workflows', desc: 'Stage-gate your sunset process with approval steps, timelines, and risk scores.' },
            { title: 'Automated Comms', desc: 'Send targeted in-app and email notices to only the users who rely on a feature.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited features tracked',
              'SDK + REST API access',
              'Automated email & in-app notices',
              'Migration timeline management',
              'Team collaboration (up to 5 seats)',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does SunsetPlanner track feature usage?',
              a: 'You install our lightweight JavaScript SDK (or use the REST API) in your app. It captures feature interaction events and streams them to your SunsetPlanner dashboard with zero impact on performance.',
            },
            {
              q: 'Will my users know I am planning to deprecate a feature?',
              a: 'Only when you choose. You control the timing and messaging of all communications. SunsetPlanner lets you draft, schedule, and target notices to only the users who actively use the feature being sunset.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. There are no long-term contracts. Cancel from your billing portal at any time and you will retain access until the end of your current billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} SunsetPlanner. All rights reserved.
      </footer>
    </main>
  )
}
