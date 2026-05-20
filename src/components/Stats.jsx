

const items = [
  {title: '150+', subtitle: 'Brands Empowered'},
  {title: '12M+', subtitle: 'People Reached'},
  {title: '500+', subtitle: 'Successful Campaigns'},
  {title: '98%', subtitle: 'Client Satisfaction'},
]

export default function Stats(){
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{it.title}</div>
              <div className="text-slate-300">{it.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
