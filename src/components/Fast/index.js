
import FastItem from './FastItem/'
function Fast() {
  return (
    <>
      <div className='container mx-auto py-12'>
        <div className="flex justify-between items-center flex-col md:flex-row">
        <FastItem 
            title='Fast & free shipping'
            dec='Every single order ships for free. No minimums,no tiers, No fine print whatsoever.'
            img='https://rashadstack-parabot.netlify.app/static/media/delivery-truck.7787463dafa90e84ea5b.png'
           />
             <FastItem 
            title='Modular easy-to-move design'
            dec='Our innovative modular design is driven by the belief that furniture should fit this home.'
            img='https://rashadstack-parabot.netlify.app/static/media/logistic.c482e9541d26d7433176.png'
           />
              <FastItem 
            title='Durable. premium materials'
            dec='We use material like sustainably-forested wood, strengthened steel hardware, and top-grain.'
            img='https://rashadstack-parabot.netlify.app/static/media/wood.eae81c2e6dd88b6babca.png'
           />

        </div>
      </div>
    </>
  )
}

export default Fast;