import { TabsId } from '~/routes/($lang)/store/$storeHandle'

export const salonServices = [
  {
    name: 'Cut & Style',
    desc: 'Our cutting service includes a shampoo, condition and either a blow dry or diffuse for women and styling for men.',
    items: [
      {
        name: 'Women’s Cut & Blow Dry',
        priceKey: 'custrecord_sto_ser_cs_wcbd',
      },
      {
        name: 'Women’s Cut & Finish',
        priceKey: 'custrecord_sto_ser_cs_wcf',
      },
      {
        name: 'Men’s Cut & Style',
        priceKey: 'custrecord_sto_ser_cs_mcs',
      },
    ],
  },
  {
    name: 'Styling',
    desc: 'From smooth, sleek styles to big, beautiful blow-outs our Salon services are perfectly personalised to you.',
    items: [
      {
        name: 'Blow Dry',
        priceKey: 'custrecord_sto_ser_s_bd',
      },
      {
        title: 'Express Styling:',
        name: 'Curling, Waving, Smoothing',
        priceKey: 'custrecord_sto_ser_s_cws',
      },
      {
        name: 'Hair Up',
        priceKey: 'custrecord_sto_ser_s_hu',
      },
      {
        name: 'Braiding',
        priceKey: 'custrecord_sto_ser_s_b',
      },
    ],
  },
  {
    name: 'Colour',
    desc: 'From natural tones through to vivid and trendy colours, our professional colour partner is Matrix for healthy, shiny hair.',
    items: [
      {
        name: 'All Over Colour',
        priceKey: 'custrecord_sto_ser_c_aoc',
      },
      {
        name: 'Camo Colour For Men',
        priceKey: 'custrecord_sto_ser_c_ccfm',
      },
      {
        name: 'Colour Transformation',
        priceKey: 'custrecord_sto_ser_c_ct',
      },
      {
        name: '1/4 Highlights',
        priceKey: 'custrecord_sto_ser_c_ch',
      },
      {
        name: 'Half Head of Highlights',
        priceKey: 'custrecord_sto_ser_c_hhoh',
      },
      {
        name: 'Full Head of Highlights',
        priceKey: 'custrecord_sto_ser_c_fhoh',
      },
      {
        name: 'Balayage',
        priceKey: 'custrecord_sto_ser_c_b',
      },
    ],
  },
]

export const piercingService = [
  {
    name: 'Ear Piercing',
    items: [
      {
        name: 'Lobe Cartridge',
        qty: 'single',
        priceKey: 'custrecord_sto_ser_ep_lcs',
      },
      {
        name: 'Lobes Cartridge',
        qty: 'double',
        priceKey: 'custrecord_sto_ser_ep_lcd',
      },
      {
        name: 'Lobe Needle',
        qty: 'single',
        priceKey: 'custrecord_sto_ser_ep_lns',
      },
      {
        name: 'Lobes Needle',
        qty: 'double',
        priceKey: 'custrecord_sto_ser_ep_lnd',
      },
      {
        name: 'Single Ear',
        qty: 'various position',
        priceKey: 'custrecord_sto_ser_ep_se',
      },
    ],
  },
  {
    name: 'Face & Nose Piercing',
    desc: '',
    items: [
      {
        name: 'Eyebrow',
        priceKey: 'custrecord_sto_ser_fnp_e',
      },
      {
        name: 'Nose',
        priceKey: 'custrecord_sto_ser_fnp_n',
      },
      {
        name: 'High Nose',
        priceKey: 'custrecord_sto_ser_fnp_hn',
      },
      {
        name: 'Septum',
        priceKey: 'custrecord_sto_ser_fnp_s',
      },
    ],
  },
  {
    name: 'Oral Piercing',
    desc: '',
    items: [
      {
        name: 'Lip',
        qty: 'various position',
        priceKey: 'custrecord_sto_ser_op_l',
      },
      {
        name: 'Labret',
        priceKey: 'custrecord_sto_ser_op_la',
      },
      {
        name: 'Tongue',
        priceKey: 'custrecord_sto_ser_op_t',
      },
      {
        name: 'Medusa',
        qty: 'Oral',
        priceKey: 'custrecord_sto_ser_op_m',
      },
      {
        name: 'Jestrum',
        priceKey: 'custrecord_sto_ser_op_j',
      },
    ],
  },
  {
    name: 'Body Piercing',
    desc: '',
    items: [
      {
        name: 'Dermal Implant',
        priceKey: 'custrecord_sto_ser_bp_di',
      },
      {
        name: 'Nape',
        priceKey: 'custrecord_sto_ser_bp_nap',
      },
      {
        name: 'Navel',
        priceKey: 'custrecord_sto_ser_bp_nav',
      },
      {
        name: 'Nipple',
        priceKey: 'custrecord_sto_ser_bp_nip',
      },
    ],
  },
]

export const tabs = [
  {
    id: TabsId.Salon,
    name: 'salon services',
    content: salonServices,
    availability: ['available_for_salon'],
    ctaAvailability: ['salon_bookable'],
  },
  {
    id: TabsId.Piercing,
    name: 'piercing services',
    content: piercingService,
    availability: ['available_for_piercing'],
    ctaAvailability: ['piercing_bookable'],
  },
]

export const options = {
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 32,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    } as ScrollOptions,
    768: {
      slidesPerView: 2.4,
      spaceBetween: 60,
      slidesOffsetBefore: 32,
      slidesOffsetAfter: 32,
    } as ScrollOptions,
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    } as ScrollOptions,
  },
}
