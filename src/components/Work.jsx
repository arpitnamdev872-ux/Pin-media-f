

const projects = [
  {title: 'boat', subtitle: 'Audio Launch Campaign', image: 'https://images.unsplash.com/photo-1518444020433-1b6d7a8b7a5d'},
  {title: 'Nykaa', subtitle: 'Social Media Campaign', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6'},
  {title: 'MPL', subtitle: 'Influencer Campaign', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'},
  {title: 'zomato', subtitle: 'OOH Campaign', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d'},
]

export default function Work(){
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h3 className="text-white text-xl font-semibold mb-6">Work That Speaks For Itself</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden glass-panel p-4 shadow-sm">
              <div className="h-48 bg-transparent rounded-lg overflow-hidden mb-4 border border-white/5">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="text-white font-bold text-lg">{p.title}</div>
              <div className="text-slate-300 text-sm">{p.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
