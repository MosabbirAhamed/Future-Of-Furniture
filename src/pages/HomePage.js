import Hero from '../components/Hero';
import Fast from '../components/Fast';
import Shop from '../components/Shop'
import Discover  from '../components/Discover';
import Words from '../components/Words';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

function HomePage() {
  return (
    <>
      <Hero />
      <Fast />
      <Shop  
        title='The Coffee Table'
        dec='The perfect companion for your sofa, Sturdy, power coated steel legs attach seconds to a surface sized to fit everything you need close at hand. High-grade plywood is finished with timeless birch or FSC certified walnut veneer. Available in oval or round.'
        img='https://cdn.pixabay.com/photo/2020/02/22/09/22/table-4869993_960_720.png'
      />
      <Shop  
        title='The Shelving System'
        dec='Probably the world most modular shelving system. When it comes to modularity, the limit does nt exist.Start with one Shelf snd add expansion units and add-ons to build a shelving system that works perfectly in your space-either now in the future.'
        img='https://rashadstack-parabot.netlify.app/static/media/imgbin_furniture-wood-wardrobe-garderob-png.ab06d37fa443a97e88bb.png'
      />
      <Products />
      <Discover />
      <Words />
      <Newsletter />
    </>

  )
}

export default HomePage;