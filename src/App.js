import React, { useState } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Rating from '@mui/material/Rating';
import RankingTab from './tabs/RankingTab';
import TeaTab from './tabs/TeaTab';
import ToppingTab from './tabs/ToppingTab';
import AboutTab from './tabs/AboutTab';

const shops = [
  {
    name: 'Camellia Rd Tea Bar',
    location: '8199 Clairemont Mesa Blvd, San Diego, CA 92111',
    summary: 'A modern tea bar with a focus on high-quality loose leaf teas and house-made boba. Minimalist decor and a calm, welcoming vibe.',
    details: 'Camellia Rd Tea Bar is known for its premium loose leaf teas, house-made boba, and creative seasonal drinks. The shop also sells tea accessories and ingredients for home brewing. There are several tables and a long bar, making it a great spot for studying or catching up with friends. The staff is knowledgeable and happy to recommend drinks based on your preferences. Free Wi-Fi and outlets are available, and the shop is usually quiet even during busy hours.',
    stars: 4.8,
    yelpImage: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np-owhidIPuO_3Qvo3itMSKK-fZHhrCZbGVhkxZKxzQN6lG-NwXQnR0xsoPPxtG5UzKS3uoJqXtSNQtXRgjZneaV9QrUH4JF4MQwYFbG0eicTIhWdQNGgxQYmHsMVOFxAUJoA-ZRg=s680-w680-h510',
    menuImages: [
      'https://cdn.shopify.com/s/files/1/0266/7590/4567/files/menu.png?v=1596577138'
    ],
    logo: require('./Logos/CamilliaRd_Logo.png'),
    bestDrinks: [
      { name: 'Hojicha', review: 'All time favorite! Very strong smokey tea. Can be inconsistent; sometimes tea is a lot weaker.', image: 'https://www.camelliard.com/cdn/shop/files/Hojicha_Milk_Tea_Cropped_0f2ec1f7-1763-4306-9ec1-74b41e720b17_1024x.png?v=1614932971' },
      { name: 'Chrysanthemum', review: 'Floral, and Herbal. Made with gojiberry to give a light sweetness.', image: 'https://www.camelliard.com/cdn/shop/files/Chrysanthemum_Milk_Tea_Cropped_2_1024x.png?v=1614932971' },
      { name: 'BlueBerry Cacao Fresca', review: 'Seasonal Drink. Try it if you see it! Fruity taste with robust chocolate after-notes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCPPBF6JMFYTWCywhlo31LmnW-ZzMTc879g&s' }
    ]
  },
  {
    name: 'Omomo',
    location: '3435 Del Mar Heights Rd, San Diego, CA 92130',
    summary: 'Trendy spot for creative boba drinks and desserts. Known for their fresh ingredients and unique flavors.',
    details: 'Omomo is a popular boba shop offering a wide variety of creative drinks and desserts. The shop is modern and always bustling with customers. Their signature drinks feature fresh fruit, house-made boba, and unique toppings. The staff is friendly and the atmosphere is lively. Seating is limited, so expect a short wait during peak hours.',
    stars: 4.7,
    yelpImage: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqbXdPuDQqChER33KExxR-uTFw-VKB9haZRakSo4Mg1f6G-dQIzVgCp5IpXTHQUC7avNAxUn-kuw967xu6ZIhFZeYYajmZsACpVQ-60zvkha-WEMRk-h6izk8-zwwTf5x-CHQwMa5MR1TRD=s680-w680-h510',
    menuImages: [
      'https://www.omomoteashoppe.com/wp-content/uploads/2025/04/download-menu.webp'
    ],
    logo: require('./Logos/Omomo_logo.png'),
    bestDrinks: [
      { name: 'Gyokuro Fresh Tea', review: 'Strong Grean Tea with hints of Seaweed? It works, trust me.', image: 'https://www.omomoteashoppe.com/wp-content/uploads/2024/07/GYOKURO-GREEN-TEA.jpg' },
      { name: 'Super Lemon Tea', review: 'Super refreshing and citrusy. Carries Oolong flavor well', image: 'https://www.omomoteashoppe.com/wp-content/uploads/2024/07/SUPER-LEMON-BLACK-TEA.jpg' },
    ]
  },
  {
    name: 'Bopomofo Cafe',
    location: '7951 Othello Ave, San Diego, CA 92111',
    summary: 'Modern Asian American cafe by YouTubers Wong Fu Productions. Creative drinks and food.',
    details: 'Bopomofo Cafe offers a unique blend of Asian American flavors in both their drinks and food. The cafe is stylish and always busy, with a loyal following. Their boba drinks are inventive and pair well with their food menu. The staff is welcoming and the space is great for groups.',
    stars: 4.6,
    yelpImage: 'https://s3-media0.fl.yelpcdn.com/bphoto/j-CkvraAX7pg-7gSix06Gw/o.jpg',
    menuImages: [
      'https://i.pinimg.com/736x/6d/bf/1d/6dbf1d1067662cfcd01afaf4976720db.jpg'
    ],
    logo: require('./Logos/Bopomofo_Logo.png'),
    bestDrinks: [
      { name: 'BOG', review: 'Blueberry, Orange, GreenTea. Very refreshing and cool to look at. Orange flavor is almost missing, but blueberry stands out well', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/GERFRXMUrCwLeAc0hZtKyA/o.jpg' },
      { name: 'Summer Blossom', review: 'Lychee, house-pressed made with green tea and pears. Lychee flavor takes over. This one is seasonal, so try it if you see it!', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/5JhJnRo5gQzkL2fXE_FCyw/o.jpg' }   ]
  },
  {
    name: 'Yun Teahouse',
    location: '4344 Convoy St, San Diego, CA 92111',
    summary: 'Overrated, but still highly rated.',
    details: 'Yun Teahouse is known for its elegant decor and milky teas. Their teas are not brewed but "expresso-ed". The drinks are beautifully presented and the boba is always fresh. The shop is a great place to unwind or catch up with friends. Friendly staff and a peaceful atmosphere.',
    stars: 4.5,
    yelpImage: 'https://s3-media0.fl.yelpcdn.com/bphoto/hNQnLt8WgkDG4JrKZG0VmA/o.jpg',
    menuImages: [
      'https://cdn.res-menu.com/yun-tea-house/photo-7.jpg'
    ],
    logo: require('./Logos/Yun_Teahouse_logo.png'),
    bestDrinks: [
      { name: 'DragonWell', review: 'Simple green tea. Nothing special, but done very well.', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/OmGV1ELPBQ9cMNZHR4e61Q/o.jpg' },
      { name: 'Duck Shit', review: 'Very smooth and milky. Tea flavor comes out a little bit if you try to notice it. Usually too sweet like most of their drinks; I adjust the sugar everytime.', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/V2aLAa0W9PIWnqTo6RADbg/o.jpg' },    ]
  },
  {
    name: 'Matcha Maiko',
    location: '8072 Clairemont Mesa Blvd, San Diego, CA 92111',
    summary: 'Specialty matcha drinks and desserts. Minimalist and calming space.',
    details: 'Matcha Meiko specializes in high-quality matcha drinks and Japanese-inspired desserts. The shop is bright and minimalist, perfect for matcha lovers. Friendly staff and a relaxing environment.',
    stars: 4.4,
    yelpImage: 'https://s3-media0.fl.yelpcdn.com/bphoto/Q4ZMHvGCiKvRWNel7Oqbzw/o.jpg',
    menuImages: [
      'https://s3-media0.fl.yelpcdn.com/bphoto/ROt8CtymaeE3yEzfa0WyNw/o.jpg'
    ],
    logo: require('./Logos/Matcha_Meiko_logo.jpg'),
    bestDrinks: [
      { name: 'Matcha Latte', review: 'Earthy and creamy. Enjoy the premium matcha.', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/JqeW8IQngFxyNFHDQU05Cw/o.jpg' }]
  },
  {
    name: 'Daboba',
    location: '4411 Mercury St, San Diego, CA 92111',
    summary: 'Famous for their roasted brown sugar boba and creamy milk teas. Modern, cozy atmosphere.',
    details: 'Daboba is known for its signature roasted brown sugar boba drinks and creamy milk teas. The shop features a modern, cozy interior and friendly staff. Their drinks are visually stunning and delicious, with a focus on quality ingredients. It can get busy during peak hours, but the drinks are worth the wait.',
    stars: 4.3,
    yelpImage: 'https://s3-media0.fl.yelpcdn.com/bphoto/cq1ImU69N7yefBKo3a_TqQ/o.jpg',
    menuImages: [
      'https://www.dabobakearnymesa.com/gallery_gen/cb0c64e4bffe5740c5e95ef992123094_1546x868_fit.png?ts=1705637902',
      'https://www.dabobakearnymesa.com/gallery_gen/739d200994c961684c6ee4ec9a378b90_2102x1180_fit.png?ts=1705637902'
    ],
    logo: require('./Logos/Daboba_logo.png'),
    bestDrinks: [
      { name: 'Mango Frappe', review: 'Real diced mangoes with cream on top. I normally don\'t get this type of drink but this one was dense and had great flavor', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/47XlSBieBHrz4ypzgJzceg/o.jpg' },
      { name: 'Brown Sugar Milk Tea', review: 'Classic milk tea with a rich, smooth flavor.', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/SI80x4GMc6s7fVVYi88Qvw/o.jpg' },
    ]
  },
  {
    name: '3cat',
    location: '4917 Convoy St, San Diego, CA 92111',
    summary: 'Charming boba shop with playful cat-themed decor and a cozy vibe.',
    details: '3cat is a fun, cat-themed boba shop with a variety of creative drinks and snacks. The staff is friendly and the shop is a great place to relax or study. Try their signature cat paw boba!',
    stars: 4.1,
    yelpImage: 'https://s3-media0.fl.yelpcdn.com/bphoto/1mWL33U5fzt12mhVPDEoFw/o.jpg',
    menuImages: [
      'https://static.wixstatic.com/media/d239e1_f638568e2fd4487d9c3951a3b1f9d162~mv2.png/v1/fill/w_979,h_1306,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/top%206.png'],
    logo: require('./Logos/3cat_logo.png'),
    bestDrinks: [
      { name: 'Tea&Mousse', review: 'Cute cups, amazing toppings. Tea flavor is pretty good but not as floral as I\'m used to. The mousse gives a nice finisher', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/-FtTcH2LPEH4fNBJdXdGUQ/o.jpg' },
]
  },
];

const cardColors = [
  '#fafaf0',
  '#f5f5dc',
  '#f0f0e0',
  '#fafaf0',
  '#f5f5dc',
  '#f0f0e0'
];

function MenuDropdown({ menuImages }) {
  const [showFull, setShowFull] = React.useState(false);
  if (!menuImages || menuImages.length === 0) return null;
  return (
    <div>
      {!showFull ? (
        <>
          <img
            src={menuImages[0]}
            alt="Menu Preview"
            className="menu-image"
            style={{ cursor: 'pointer' }}
            onClick={() => setShowFull(true)}
          />
          <br />
          <button
            style={{ marginTop: 8, background: '#f8f3e6', color: '#8b7355', border: '1px solid #e2d3c0', borderRadius: 8, padding: '6px 18px', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => setShowFull(true)}
          >
            Show Full Menu
          </button>
        </>
      ) : (
        <div style={{ maxWidth: 700, maxHeight: 600, overflow: 'auto', margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #e3e6ee', padding: 12 }}>
          {menuImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Full Menu ${i + 1}`}
              style={{ width: '100%', height: 'auto', maxWidth: 680, display: 'block', margin: '0 auto 16px auto' }}
            />
          ))}
          <button
            style={{ marginTop: 12, background: '#f8f3e6', color: '#8b7355', border: '1px solid #e2d3c0', borderRadius: 8, padding: '6px 18px', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => setShowFull(false)}
          >
            Hide Full Menu
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [activeTab, setActiveTab] = useState('ranking');

  const toggleDropdown = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  const teaList = [
    {
      name: "Assam Black Tea",
      origin: "Assam, India",
      description: "A robust, malty black tea with a rich, full-bodied flavor and coppery color. Known for its strong character and ability to stand up to milk and sweeteners.",
      taste: "Bold, malty, and full-bodied with notes of caramel and a slight astringency. Has a warming, rich mouthfeel that pairs perfectly with milk and sweeteners.",
      process: "Assam tea is made from the Camellia sinensis var. assamica plant. The leaves are withered, rolled, oxidized (fermented), and fired to create the characteristic black tea.",
      brewing: "Use 1 tsp per 8 oz water at 200-212°F (95-100°C). Steep for 3-5 minutes. For boba, brew stronger (2-3 tsp per 8 oz) and longer (5-7 minutes) to compensate for dilution from ice and toppings.",
      image: "https://cdn11.bigcommerce.com/s-gbio3rgsga/images/stencil/1280x1280/products/237/895/1_Assam__11732.1681500562.jpg?c=2"
    },
    {
      name: "Ceylon Black Tea",
      origin: "Sri Lanka",
      description: "A bright, brisk black tea with citrusy notes and a golden-amber color. Offers a clean, refreshing taste that works beautifully in milk teas.",
      taste: "Bright and brisk with citrusy undertones and a clean finish. Has a medium body with subtle floral notes and a refreshing aftertaste that's perfect for hot weather.",
      process: "Grown in the highlands of Sri Lanka, Ceylon tea undergoes withering, rolling, oxidation, and firing. The altitude and climate contribute to its distinctive bright character.",
      brewing: "Use 1 tsp per 8 oz water at 200-212°F (95-100°C). Steep for 3-4 minutes. For boba applications, increase strength and steeping time for bold flavor.",
      image: "https://cdn11.bigcommerce.com/s-gbio3rgsga/images/stencil/1280x1280/products/197/926/1_Ceylon__01009.1681503185.jpg?c=2"
    },
    {
      name: "Jasmine Green Tea",
      origin: "Fujian Province, China",
      description: "A delicate green tea scented with jasmine flowers, offering floral aromas and a smooth, slightly sweet taste. Popular in lighter boba drinks.",
      taste: "Delicate and floral with the sweet, intoxicating aroma of jasmine blossoms. Has a smooth, slightly sweet taste with a gentle green tea base and lingering floral finish.",
      process: "Green tea leaves are harvested, withered, and pan-fired to prevent oxidation. Jasmine flowers are layered with the tea leaves multiple times to infuse the floral scent.",
      brewing: "Use 1 tsp per 8 oz water at 175-185°F (80-85°C). Steep for 2-3 minutes. Avoid over-steeping to prevent bitterness. For boba, slightly increase strength.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJEI0T77PPmQNypyBfZvoArqdrz_cqvbzvw&s"
    },
    {
      name: "Oolong Tea",
      origin: "Taiwan and Fujian, China",
      description: "A semi-oxidized tea with complex flavors ranging from light and floral to dark and toasty. Offers a perfect balance between black and green tea characteristics.",
      taste: "Complex and layered with notes that can range from light and floral to dark and toasty. Often has hints of honey, orchid, or roasted nuts depending on oxidation level.",
      process: "Oolong undergoes partial oxidation (10-80%) through controlled withering, bruising, and oxidation. The leaves are then fired to stop the oxidation process.",
      brewing: "Use 1 tsp per 8 oz water at 185-205°F (85-96°C). Steep for 3-5 minutes. Multiple infusions are possible. For boba, use longer steeping times for stronger flavor.",
      image: "https://cdn.shopify.com/s/files/1/0251/0722/files/Alishan_High_Mountain_Oolong_-_3-4_Dry_Leaves_-_1080px_1024x1024.jpg?v=1547094446"
    },
    {
      name: "Earl Grey",
      origin: "Various regions (traditionally China)",
      description: "A black tea flavored with bergamot oil, offering citrusy, floral notes with a distinctive aroma. Adds complexity to milk teas and fruit-based boba drinks.",
      taste: "Bold black tea base with bright, citrusy bergamot notes and a distinctive floral aroma. The bergamot adds complexity and a refreshing finish that cuts through milk and cream.",
      process: "High-quality black tea leaves are sprayed with bergamot essential oil, allowing the citrus essence to infuse naturally. The oil comes from bergamot oranges grown in Italy.",
      brewing: "Use 1 tsp per 8 oz water at 200-212°F (95-100°C). Steep for 3-5 minutes. The bergamot flavor intensifies with longer steeping. Perfect for London Fog-style boba drinks.",
      image: "https://www.uncommongrounds.com/wp-content/uploads/2015/04/EarlGrey.jpg"
    },
    {
      name: "Matcha Green Tea",
      origin: "Japan (primarily Uji region)",
      description: "A finely ground green tea powder with vibrant color and rich, umami flavor. Provides intense tea flavor and natural green color to drinks.",
      taste: "Rich, creamy, and intensely green with a strong umami flavor and slight natural sweetness. Has a smooth, velvety texture and a lingering, satisfying finish.",
      process: "Shade-grown tea leaves are steamed, dried, and stone-ground into a fine powder. The shading process increases chlorophyll and amino acid content.",
      brewing: "Use 1/2-1 tsp per 8 oz water at 175°F (80°C). Whisk vigorously to prevent clumping. For boba, blend with hot water first, then add to cold ingredients.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd6rIwDJ3DtT060WhW7o2t8S-VORAIFVoog&s"
    },
    {
      name: "Green Tea",
      origin: "Various regions (China, Japan, Korea)",
      description: "A light, fresh tea with delicate flavors and natural antioxidants. The foundation of many traditional tea cultures and modern boba drinks.",
      taste: "Fresh, grassy, and slightly astringent with subtle sweetness and a clean finish. Can have notes of seaweed, nuts, or flowers depending on the variety.",
      process: "Tea leaves are harvested, withered, and quickly heated (steamed or pan-fired) to prevent oxidation, preserving the natural green color and fresh flavors.",
      brewing: "Use 1 tsp per 8 oz water at 160-180°F (70-82°C). Steep for 1-3 minutes. For boba, use slightly higher temperature and longer steeping for stronger flavor.",
      image: "https://www.stashtea.com/cdn/shop/products/PremiumGreen_da5d7fe0-e231-4bbf-9e59-0aac91bea795.jpg?v=1533668331"
    },
    {
      name: "Pu-erh Tea",
      origin: "Yunnan Province, China",
      description: "A fermented tea that develops complex, earthy flavors over time. Available in both raw (sheng) and ripe (shou) varieties with distinct characteristics.",
      taste: "Earthy, woody, and complex with notes of forest floor, leather, and sometimes fruit. Aged pu-erh develops deeper, smoother flavors with less astringency.",
      process: "Made from large-leaf tea trees, pu-erh undergoes microbial fermentation. Raw pu-erh ages naturally, while ripe pu-erh is accelerated through controlled fermentation.",
      brewing: "Use 1 tsp per 8 oz water at 200-212°F (95-100°C). Steep for 3-5 minutes. Multiple infusions are common. For boba, use longer steeping for bold, earthy notes.",
      image: "https://www.davidsonstea.com/images/products/detail/Puerh_Black_Web.jpg"
    },
    {
      name: "Hojicha",
      origin: "Japan",
      description: "A roasted green tea with a distinctive reddish-brown color and toasty, nutty flavor. Lower in caffeine and perfect for evening boba drinks.",
      taste: "Toasty, nutty, and slightly sweet with notes of roasted chestnuts and caramel. Has a warm, comforting flavor with minimal astringency and a smooth finish.",
      process: "Green tea leaves are roasted at high temperatures, which changes the color from green to reddish-brown and creates the characteristic toasty flavor profile.",
      brewing: "Use 1 tsp per 8 oz water at 175-185°F (80-85°C). Steep for 2-3 minutes. The roasting process makes it less sensitive to over-steeping. Perfect for milk-based boba.",
      image: "https://hojicha.co/cdn/shop/products/hojicha_co_-_hojicha_classic_01.jpg?v=1674764645&width=533"
    },
    {
      name: "Genmaicha",
      origin: "Japan",
      description: "A green tea blended with roasted brown rice, creating a unique nutty, popcorn-like flavor. Popular for its comforting, toasty character.",
      taste: "Nutty and toasty with the fresh grassiness of green tea balanced by the warm, popcorn-like flavor of roasted rice. Has a comforting, homey quality.",
      process: "Green tea leaves are mixed with roasted brown rice (genmai) and sometimes popped rice kernels. The rice adds body and a distinctive toasty aroma.",
      brewing: "Use 1 tsp per 8 oz water at 175-185°F (80-85°C). Steep for 2-3 minutes. The rice adds natural sweetness, making it perfect for those who prefer less sugar in boba.",
      image: "https://www.davidsonstea.com/images/products/detail/Genmaicha_Web.jpg"
    },
    {
      name: "Gyokuro",
      origin: "Japan (primarily Uji, Yame, and Asahina)",
      description: "A premium shade-grown green tea with intense umami flavor and sweet, complex notes. Considered one of Japan's finest teas.",
      taste: "Intensely umami with sweet, complex flavors and minimal astringency. Has a rich, creamy mouthfeel with notes of seaweed, spinach, and natural sweetness.",
      process: "Tea bushes are shaded for 20-30 days before harvest, which increases chlorophyll and amino acid content while reducing bitterness and astringency.",
      brewing: "Use 1 tsp per 8 oz water at 140-160°F (60-71°C). Steep for 2-3 minutes. Lower temperature and shorter steeping preserve the delicate flavors. For boba, use carefully to maintain complexity.",
      image: "https://mizubatea.com/cdn/shop/products/DSCF7324.jpg?v=1580324858"
    }
  ];

  const toppingList = [
    {
      name: "Tapioca Pearls",
      origin: "Traditional boba topping",
      description: "The classic black boba pearls made from tapioca starch. These chewy, gummy-textured balls are the signature topping of bubble tea.",
      taste: "Neutral, slightly sweet with a satisfying chewy texture. The pearls themselves have minimal flavor but absorb the sweetness of the drink.",
      process: "Made from tapioca starch extracted from cassava root, mixed with water and brown sugar, then shaped into small balls and cooked until translucent with a dark center.",
      brewing: "Store-bought pearls are boiled for 20-30 minutes, then soaked in sugar syrup. Fresh pearls should be cooked until they float and become translucent with a slight chewiness.",
      image: "https://ricelifefoodie.com/wp-content/uploads/2024/09/boba-balls-boba-pearls-on-spoon-500x500.jpg?crop=1/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      name: "Popping Boba",
      origin: "Modern boba innovation",
      description: "Colorful, juice-filled spheres that burst with flavor when bitten. Available in various fruit flavors and colors.",
      taste: "Juicy and flavorful with a thin, delicate skin that pops to release concentrated fruit juice. Each pop provides an intense burst of flavor.",
      process: "Made using spherification techniques where fruit juice is mixed with sodium alginate and dropped into calcium chloride solution, creating a thin gel membrane around the liquid center.",
      brewing: "Ready to use from the package, no cooking required. Store in refrigerator and add to drinks just before serving to maintain freshness and pop-ability.",
      image: "https://cdn.ready-market.com.tw/22522d3e/Templates/pic/m/green-apple.jpg?v=cfe95d05"
    },
    {
      name: "Grass Jelly",
      origin: "Traditional Chinese dessert",
      description: "A dark, herbal jelly made from Chinese mesona herb. Has a mild, slightly bitter taste and smooth, firm texture.",
      taste: "Mildly herbal and slightly bitter with a cooling effect. The texture is smooth and firm, similar to agar jelly but with more body.",
      process: "Made by boiling Chinese mesona herb (xiancao) to extract its essence, then mixing with starch and cooling to form a firm, dark jelly that's cut into cubes.",
      brewing: "Store-bought grass jelly comes pre-made and ready to use. Can be cut into cubes or strips. Fresh versions require boiling the herb and setting with starch.",
      image: "https://onolicioushawaii.com/wp-content/uploads/2022/02/grass-jelly-2-735x735.jpg"
    },
    {
      name: "Coconut Jelly",
      origin: "Southeast Asian dessert",
      description: "Soft, translucent jelly made from coconut water or coconut milk. Adds a tropical, refreshing element to drinks.",
      taste: "Mildly sweet with a subtle coconut flavor and soft, slippery texture. Provides a cooling, refreshing sensation in drinks.",
      process: "Made by mixing coconut water or coconut milk with agar-agar or gelatin, then setting to form a soft, translucent jelly that's cut into small cubes.",
      brewing: "Ready to use from the package. Can be made fresh by mixing coconut liquid with agar powder, heating, and setting in molds before cutting.",
      image: "https://hungryinthailand.com/wp-content/uploads/2025/01/coconut-jelly-cubes.webp"
    },
    {
      name: "Pudding",
      origin: "Western dessert adaptation",
      description: "Smooth, creamy custard pudding that adds richness and sweetness to boba drinks. Often flavored with vanilla, chocolate, or matcha.",
      taste: "Creamy, sweet, and smooth with a rich custard flavor. The texture is soft and melts in the mouth, providing a luxurious contrast to chewy pearls.",
      process: "Made from milk, eggs, sugar, and flavorings, cooked until thickened and set. Can be made with gelatin or egg-based custard methods.",
      brewing: "Store-bought pudding is ready to use. Homemade versions require cooking milk with eggs and sugar, then setting in molds before cutting into cubes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19pYEHl7Tb9hLZTM0nPKu_Eos6iQWGSzoRQ&s"
    },
    {
      name: "Red Bean",
      origin: "Traditional Asian dessert",
      description: "Sweetened adzuki beans that add a nutty, earthy sweetness to drinks. Popular in traditional Asian desserts and modern boba.",
      taste: "Sweet, nutty, and slightly earthy with a soft, creamy texture when cooked properly. Provides a natural sweetness and protein content.",
      process: "Adzuki beans are soaked, boiled until soft, then sweetened with sugar or honey. The beans are cooked until they're tender but still hold their shape.",
      brewing: "Store-bought sweetened red beans are ready to use. Fresh preparation requires soaking beans overnight, then cooking with sugar until tender.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1WNWshAbrmSHTF5bqfQpWpJ63Wc9ZEY4MA&s"
    },
    {
      name: "Aloe Vera",
      origin: "Health-focused topping",
      description: "Clear, gel-like pieces of aloe vera that add a refreshing, slightly bitter note and purported health benefits.",
      taste: "Mildly bitter with a refreshing, cooling sensation and a slippery, gel-like texture. Has a subtle herbal flavor that pairs well with fruit drinks.",
      process: "Aloe vera gel is extracted from the plant's leaves, cleaned, and cut into small cubes. Often sweetened slightly to reduce bitterness.",
      brewing: "Store-bought aloe vera is ready to use. Fresh preparation requires harvesting aloe leaves, extracting the gel, and cutting into pieces.",
      image: "https://fullofplants.com/wp-content/uploads/2019/12/how-to-prepare-aloe-vera-jelly-for-tea-topping-healthy-skin-drink-20-1.jpg"
    },
    {
      name: "Lychee Jelly",
      origin: "Asian fruit dessert",
      description: "Translucent jelly flavored with lychee fruit, offering a sweet, floral taste and delicate texture.",
      taste: "Sweet and floral with the distinctive lychee flavor, featuring a soft, slippery texture that's lighter than traditional jelly.",
      process: "Made by mixing lychee juice or extract with agar-agar or gelatin, then setting to form a translucent jelly that's cut into small cubes.",
      brewing: "Ready to use from the package. Can be made fresh by mixing lychee juice with agar powder, heating, and setting in molds.",
      image: "https://www.siftandsimmer.com/wp-content/uploads/2023/02/lychee-jelly4.jpg"
    },
    {
      name: "Coffee Jelly",
      origin: "Coffee dessert adaptation",
      description: "Coffee-flavored jelly that adds caffeine and coffee notes to drinks. Popular in coffee-based boba beverages.",
      taste: "Bold coffee flavor with a smooth, firm texture. Provides both caffeine content and coffee taste without the liquid volume.",
      process: "Made by mixing strong coffee with sugar and gelatin or agar-agar, then setting to form a firm, coffee-flavored jelly cut into cubes.",
      brewing: "Store-bought coffee jelly is ready to use. Homemade versions require brewing strong coffee, mixing with gelatin, and setting before cutting.",
      image: "https://honestlyyum.com/wp-content/uploads/2018/08/Coffee-jelly-3.jpg"
    },
    {
      name: "Rainbow Jelly",
      origin: "Modern boba innovation",
      description: "Colorful, multi-layered jelly that adds visual appeal and variety to drinks. Each layer can have different flavors.",
      taste: "Varies by layer but typically sweet with different fruit flavors. The texture is smooth and firm, with each layer potentially offering a different taste experience.",
      process: "Made by creating multiple layers of flavored jelly, each with different colors and flavors, then cutting into cubes to reveal the rainbow pattern.",
      brewing: "Ready to use from the package. Homemade versions require making multiple batches of colored jelly and layering them before setting.",
      image: "https://www.webstaurantstore.com/images/products/large/569857/2081934.jpg"
    }
  ];

  return (
    <div className="App">
      {/* Large logo at the top */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2.5rem', marginBottom: '1.2rem' }}>
        <img src="/WebPageLogo.png" alt="Boba Blog Logo" style={{ width: 140, height: 140, objectFit: 'contain', marginBottom: 8, background: '#f5e9da', borderRadius: 24, boxShadow: '0 2px 12px rgba(44,62,80,0.08)' }} />
      </div>
      {/* Tab buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: '0' }}>
        <button
          className={`tab-btn${activeTab === 'ranking' ? ' active' : ''}`}
          onClick={() => setActiveTab('ranking')}
        >
          Ranking
        </button>
        <button
          className={`tab-btn${activeTab === 'tea' ? ' active' : ''}`}
          onClick={() => setActiveTab('tea')}
        >
          Tea
        </button>
        <button
          className={`tab-btn${activeTab === 'topping' ? ' active' : ''}`}
          onClick={() => setActiveTab('topping')}
        >
          Topping
        </button>
        <button
          className={`tab-btn${activeTab === 'about' ? ' active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
      </div>
      {/* Tab content */}

      {activeTab === 'ranking' && (
        <RankingTab
          shops={shops}
          openIndexes={openIndexes}
          toggleDropdown={toggleDropdown}
          cardColors={cardColors}
          MenuDropdown={MenuDropdown}
        />
      )}
      {activeTab === 'tea' && (
        <TeaTab teaList={teaList} />
      )}
      {activeTab === 'topping' && (
        <ToppingTab toppingList={toppingList} />
      )}
      {activeTab === 'about' && (
        <AboutTab />
      )}
    </div>
  );
}

export default App;
