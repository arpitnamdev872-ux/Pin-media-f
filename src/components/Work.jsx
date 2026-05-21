import boat from "../assets/work/boat.jpg";
import nykaa from "../assets/work/nykaa.jpg";
import mpl from "../assets/work/mpl.jpg";
import zomato from "../assets/work/zomato.jpg";

const projects = [
  // boat gets previous Nykaa avatar
  {title: 'boAt', subtitle: 'Audio Launch Campaign', image: boat, avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop'},
  // Nykaa receives Zomato's previous avatar
  {title: 'Nykaa', subtitle: 'Social Media Campaign', image: nykaa, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'},
  // MPL keeps a professional avatar
  {title: 'MPL', subtitle: 'Influencer Campaign', image: mpl, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop'},
  // Zomato gets a girl portrait avatar
  {title: 'Zomato', subtitle: 'OOH Campaign', image: zomato, avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop'},
]

export default function Work(){
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h3 className="text-white text-xl font-semibold mb-6">Work That Speaks For Itself</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden glass-panel p-4 shadow-sm">
              <div className="h-60 bg-transparent rounded-lg overflow-hidden mb-4 border border-white/5 relative">
                <img src={p.image} alt={p.title} className="w-full h-60 object-cover rounded-xl hover:scale-105 transition-transform duration-300" />
                <img src={p.avatar} alt={`${p.title}-avatar`} className="w-10 h-10 rounded-full object-cover border-2 border-white/20 absolute top-3 left-3 shadow-md" />
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
