

const items = [
  {img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop', name: 'Arik', title: 'Co-Founder, boat', text: 'PIN MEDIA helped us grow 4x on social media within 3 months.'},
  {img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', name: 'Neha B', title: 'Marketing Head, Nykaa', text: 'Their PR campaigns gave our brand massive visibility.'},
  {img: 'https://images.unsplash.com/photo-1545996124-1b7d7b6b5b2c?q=80&w=400&auto=format&fit=crop', name: 'Growth Lead', title: 'MPL', text: 'Professional, creative and result-driven.'},
  {img: 'https://images.unsplash.com/photo-1545996124-1b7d7b6b5b2c?q=80&w=400&auto=format&fit=crop', name: 'CMO', title: 'CRED', text: 'Excellent communication and outstanding results.'},
]

export default function Testimonials(){
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h3 className="text-white text-2xl font-bold mb-6">Results That Build Trust</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 glass-panel rounded-xl text-white flex flex-col items-start shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4 text-white">
                <img src={it.img} alt={it.name} className="w-14 h-14 rounded-full object-cover border border-white/10" />
                <div>
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-slate-400 text-sm">{it.title}</div>
                </div>
              </div>
              <div className="text-slate-300 text-sm">"{it.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
