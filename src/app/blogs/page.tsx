"use client";

import React, { useState, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, X, Clock, User, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUs from "../pages/ContactUs";

const BlogPage = () => {
  const categories = [
    { name: "All Articles", count: 14 },
    { name: "Travel Guides", count: 4 },
    { name: "Cab Services", count: 3 },
    { name: "Holiday Destinations", count: 2 },
    { name: "City Tours", count: 2 },
    { name: "Travel Tips", count: 2 },
    { name: "Cultural Experiences", count: 1 },
  ];

  const contactFormRef = useRef(null);

  const blogs = [
    {
      id: 1,
      category: "Travel Guides",
      readTime: "12 min read",
      title: "Golden Triangle: Delhi, Agra & Jaipur Complete Guide",
      description:
        "Discover India's most iconic tourist circuit with our comprehensive guide covering the best attractions, local cuisine, and travel tips for the Golden Triangle.",
      fullContent: `The Golden Triangle is India's most popular tourist circuit, connecting three magnificent cities: Delhi, Agra, and Jaipur. This 720-kilometer circuit offers a perfect introduction to India's rich history, stunning architecture, and vibrant culture.

Starting in Delhi, the bustling capital city, you'll encounter a fascinating blend of ancient monuments and modern infrastructure. Don't miss the Red Fort, India Gate, Lotus Temple, and the bustling streets of Chandni Chowk. The city's diverse food scene ranges from street food in Old Delhi to fine dining restaurants in Connaught Place.

Agra, home to the world-famous Taj Mahal, is just 200 kilometers from Delhi. This UNESCO World Heritage site is best visited at sunrise or sunset when the white marble monument changes colors. Also explore Agra Fort and Fatehpur Sikri, both showcasing Mughal architectural brilliance.

Jaipur, the Pink City and capital of Rajasthan, completes the triangle. Visit the majestic Amber Fort, City Palace, and Hawa Mahal. The city's bazaars are perfect for shopping traditional textiles, jewelry, and handicrafts.

Transportation between cities is convenient with regular trains, buses, and taxi services. The entire circuit can be completed in 5-7 days, making it perfect for first-time visitors to India.`,
      author: "Rajesh Sharma",
      date: "March 20, 2024",
    },
    {
      id: 2,
      category: "Cab Services",
      readTime: "8 min read",
      title: "Best Cab Services for Outstation Travel in India",
      description:
        "Compare top cab booking platforms for intercity travel. From Uber Intercity to Ola Outstation, find the perfect ride for your next Indian adventure.",
      fullContent: `Traveling between cities in India has become incredibly convenient with various cab services offering outstation packages. Here's a comprehensive guide to help you choose the best option for your needs.

Ola Outstation leads the market with competitive pricing and wide coverage across 100+ cities. Their packages include fuel, driver allowances, and toll charges. Round trips offer better value, and their clean, well-maintained vehicles come with experienced drivers familiar with long routes.

Uber Intercity provides premium comfort with upfront pricing and no hidden costs. Their fleet includes sedans and SUVs, perfect for family trips. Real-time tracking and 24/7 customer support ensure a hassle-free journey.

Local operators like RedBus and Goibibo have partnered with regional cab providers, offering extensive options in smaller cities. These platforms often provide the most competitive rates for less popular routes.

For luxury travel, consider Savaari and Carzonrent, which specialize in premium vehicles and professional chauffeurs. They're ideal for business trips or special occasions.

Safety tips: Always verify driver details, share trip information with family, keep emergency contacts handy, and choose daytime travel when possible. Most services offer GPS tracking and SOS features for added security.

Booking in advance often results in better rates and vehicle availability, especially during peak tourist seasons and festivals.`,
      author: "Priya Mehta",
      date: "March 18, 2024",
    },
    {
      id: 3,
      category: "Holiday Destinations",
      readTime: "15 min read",
      title: "Goa Beyond Beaches: Hidden Gems & Local Experiences",
      description:
        "Explore Goa's lesser-known attractions, from spice plantations to Portuguese heritage sites. Discover authentic local experiences beyond the popular beaches.",
      fullContent: `While Goa's beaches attract millions of visitors, the state offers much more than sun, sand, and sea. Discover the authentic side of Goa through these hidden gems and unique experiences.

Start your cultural journey in Old Goa, the former Portuguese capital. Visit the Basilica of Bom Jesus, housing St. Francis Xavier's remains, and Se Cathedral, one of Asia's largest churches. The Museum of Christian Art showcases centuries of Indo-Portuguese artistic heritage.

Venture into the spice plantations of Ponda district, where you can walk through aromatic gardens of cardamom, pepper, cinnamon, and nutmeg. Many plantations offer traditional Goan meals cooked with fresh spices, providing an authentic culinary experience.

The Dudhsagar Falls, India's fifth-highest waterfall, is accessible via a thrilling jeep safari through Mollem National Park. The four-tiered waterfall creates a milky white cascade, especially spectacular during monsoons.

Explore the Latin Quarter of Fontainhas in Panaji, with its narrow winding streets, colorful Portuguese-era houses, and art galleries. The area comes alive during the annual Fontainhas Festival of Arts.

For adventure seekers, try river rafting on the Mhadei River or kayaking through the mangroves of Cumbarjua Canal. Night markets in Arpora and Anjuna offer everything from handmade crafts to live music performances.

Don't miss the traditional Goan villages where you can witness coconut palm climbing, cashew feni distillation, and pottery making. These experiences provide insight into Goa's rural life and ancient traditions.`,
      author: "Carlos Fernandes",
      date: "March 16, 2024",
    },
    {
      id: 4,
      category: "City Tours",
      readTime: "10 min read",
      title: "Mumbai in 48 Hours: The Ultimate Local's Itinerary",
      description:
        "Experience Mumbai like a local with this packed 2-day itinerary covering street food, iconic landmarks, hidden gems, and the city's vibrant nightlife.",
      fullContent: `Mumbai, the city that never sleeps, offers endless experiences packed into every corner. Here's how to make the most of 48 hours in India's financial capital.

Day 1 Morning: Start at the Gateway of India, Mumbai's most iconic landmark. Take a boat ride to Elephanta Caves to see ancient rock-cut sculptures. Return for lunch at Leopold Cafe, a historic establishment popular with locals and tourists alike.

Afternoon: Explore the bustling Crawford Market (now Mahatma Jyotiba Phule Market) for spices, fruits, and souvenirs. Walk through the heritage precinct of Fort district, admiring colonial architecture including the High Court and University of Mumbai.

Evening: Experience Mumbai's street food culture at Mohammed Ali Road or Chowpatty Beach. Try pav bhaji, bhel puri, and vada pav while watching the sunset over the Arabian Sea.

Day 2 Morning: Visit Dharavi, Asia's largest slum, with a responsible tour operator to understand Mumbai's urban challenges and community resilience. The experience offers insights into small-scale industries and local entrepreneurship.

Afternoon: Explore Bandra-Worli Sea Link and Bandstand Promenade. Visit the trendy Linking Road for shopping and cafe hopping. Don't miss the colorful street art in the Bandra suburb.

Evening: End your trip with a ride on Mumbai's suburban railway system, experiencing the city's lifeline. Visit Marine Drive for a perfect sunset view, followed by dinner at a rooftop restaurant overlooking the city skyline.

Pro tips: Use local trains during off-peak hours, always carry cash for street food, and stay hydrated in the tropical climate.`,
      author: "Arjun Kapoor",
      date: "March 14, 2024",
    },
    {
      id: 5,
      category: "Travel Tips",
      readTime: "7 min read",
      title: "Monsoon Travel in India: Essential Safety and Packing Guide",
      description:
        "Make the most of India's monsoon season with expert tips on safe travel, waterproof packing, and the best destinations to visit during the rains.",
      fullContent: `Monsoon season in India (June to September) transforms the landscape into a lush paradise, but requires careful planning for safe and enjoyable travel.

Packing Essentials: Invest in quality waterproof gear including a rain jacket, waterproof backpack covers, and quick-dry clothing. Pack extra plastic bags to keep electronics and documents dry. Waterproof footwear is crucial – avoid leather shoes that take forever to dry.

Health Precautions: Carry hand sanitizer and avoid street food from unhygienic vendors. Monsoons can increase the risk of waterborne diseases, so stick to bottled water and well-cooked food. Pack basic medications for fever, stomach issues, and mosquito repellent.

Transportation Tips: Book flights and trains in advance as cancellations are common. Road travel can be challenging due to flooding and landslides, especially in hilly areas. Always check weather updates and have backup travel plans.

Best Monsoon Destinations: Kerala's backwaters are spectacular during rains. Rajasthan's desert cities like Udaipur become incredibly beautiful. The Western Ghats, including Lonavala and Munnar, offer breathtaking scenery with misty mountains and waterfalls.

Photography enthusiasts will love the dramatic skies, lush greenery, and powerful waterfalls that only monsoons can provide.

Safety First: Avoid trekking in flood-prone areas, stay away from rivers and beaches during heavy rains, and always inform someone about your travel plans. Many hill stations have landslide risks, so check local advisories.

The monsoon season offers unique experiences like witnessing India's agricultural heartland come alive, enjoying hot chai during rainfall, and seeing the country's most spectacular waterfalls at their peak.`,
      author: "Meera Nair",
      date: "March 12, 2024",
    },
    {
      id: 6,
      category: "Travel Guides",
      readTime: "14 min read",
      title: "Rajasthan Road Trip: Forts, Palaces & Desert Adventures",
      description:
        "Plan the perfect Rajasthan road trip covering majestic forts, luxury palace hotels, camel safaris, and authentic Rajasthani cuisine across the desert state.",
      fullContent: `Rajasthan, the land of kings, offers one of India's most spectacular road trip experiences. This 2000-kilometer journey takes you through centuries of history, magnificent architecture, and diverse landscapes.

Route Planning: Start from Delhi and head to Jaipur (280 km), then Jodhpur (340 km), Jaisalmer (290 km), Udaipur (290 km), and back to Delhi via Pushkar and Ajmer. Allow 10-12 days for a comfortable pace.

Jaipur Highlights: Begin with the Pink City's crown jewel, Amber Fort, accessible by elephant rides or jeep. Visit the astronomical wonder Jantar Mantar and the intricate Hawa Mahal. Stay at heritage hotels like Rambagh Palace for a royal experience.

Jodhpur Experience: The Blue City dominates with Mehrangarh Fort, one of India's largest forts offering panoramic city views. Explore the bustling Sardar Market and try authentic dal baati churma at local restaurants.

Jaisalmer Desert Safari: The Golden City offers magical desert experiences with camel safaris into the Thar Desert. Spend a night in desert camps under starlit skies, enjoying folk music and traditional Rajasthani dance performances.

Udaipur Romance: The City of Lakes enchants with Lake Pichola boat rides and City Palace complex. The floating Lake Palace (now a luxury hotel) epitomizes romantic architecture.

Driving Tips: Roads are generally good between major cities. Carry extra water and snacks for long stretches. Fuel stations are available regularly, but fill up in smaller towns. Avoid night driving in rural areas.

Cultural Immersion: Visit local markets for handicrafts, textiles, and jewelry. Each city specializes in different crafts – Jaipur for gems, Jodhpur for antiques, Jaisalmer for leather goods, and Udaipur for miniature paintings.`,
      author: "Vikram Singh",
      date: "March 10, 2024",
    },
    {
      id: 7,
      category: "Cab Services",
      readTime: "6 min read",
      title: "Airport Transfers in Indian Cities: A Complete Guide",
      description:
        "Navigate airport transfers efficiently in major Indian cities. Compare costs, travel times, and booking options for cabs, metros, and buses.",
      fullContent: `Getting to and from airports in India's major cities has multiple options, each with distinct advantages. Here's your comprehensive guide to smooth airport transfers.

Delhi (IGI Airport): The Airport Express Metro is the fastest option to central Delhi (35-40 minutes to New Delhi Station). Pre-paid taxis from the airport counter ensure fair pricing. Uber and Ola operate from designated pickup points. During peak hours, metro is often faster than road transport.

Mumbai (Chhatrapati Shivaji): The airport is well-connected by taxis, but traffic can be unpredictable. Pre-paid taxi counters offer fixed rates to different city zones. App-based cabs pickup from designated areas on the arrivals level. The planned metro connection will be operational soon.

Bangalore (Kempegowda): Located 40 km from the city center, airport transfers require planning. Uber and Ola are popular choices with surge pricing during peak hours. BMTC Vayu Vajra buses connect to major city areas at economical rates. Book cabs in advance during IT industry peak hours (8-10 AM, 6-8 PM).

Chennai (MAA): Metropolitan Transport Corporation buses connect the airport to major areas. Prepaid taxi counters provide transparent pricing. App-based cabs are readily available, but surge pricing applies during monsoons and late hours.

Money-Saving Tips: Book rides in advance to avoid surge pricing. Share cab options reduce costs significantly. For early morning or late-night flights, pre-book to ensure availability.

Safety Measures: Always verify driver details on the app, share your trip with family, and keep emergency contacts handy. Choose official pickup points and avoid unauthorized taxi operators.

For frequent travelers, consider airport taxi subscription services that offer fixed monthly rates for regular routes.`,
      author: "Suresh Kumar",
      date: "March 8, 2024",
    },
    {
      id: 8,
      category: "Holiday Destinations",
      readTime: "11 min read",
      title: "Kerala Backwaters: Houseboat Holidays & Village Life",
      description:
        "Experience Kerala's serene backwaters through traditional houseboat stays, village walks, and authentic local cuisine in God's Own Country.",
      fullContent: `Kerala's backwaters offer one of India's most tranquil holiday experiences, where you can drift through palm-fringed canals on traditional houseboats while experiencing authentic village life.

Alleppey (Alappuzha) is the backwater capital, offering the widest selection of houseboats ranging from basic to luxury accommodations. These converted rice barges, called 'kettuvallams', feature bedrooms, bathrooms, and kitchens with skilled crew members who double as guides and chefs.

The houseboat journey typically starts from Alleppey and meanders through Vembanad Lake, the largest lake in Kerala. Watch daily life unfold along the waterways – fishermen casting nets, women washing clothes, children playing, and farmers tending rice paddies.

Kumarakom offers a more upscale experience with luxury resorts and bird sanctuary visits. The Kumarakom Bird Sanctuary is home to migratory birds from Siberia and the Himalayas, best visited between November and February.

Village Tourism: Step off your houseboat to explore traditional villages. Visit local homes to learn about coconut harvesting, coir making, and traditional fishing techniques. Many families welcome tourists for authentic homecooked meals featuring fresh fish curry, rice, and seasonal vegetables.

Best Time to Visit: October to March offers pleasant weather and clear skies. Avoid monsoons (June-September) when rough waters make navigation difficult.

Sustainable Tourism: Choose eco-friendly operators who use solar power and proper waste management. Respect local customs and environment by not littering in waterways.

Cultural Experiences: Witness Kathakali performances, traditional art forms, and Ayurvedic treatments. Visit spice gardens to learn about cardamom, pepper, and vanilla cultivation.

The backwaters provide a perfect digital detox with limited connectivity, allowing you to truly unwind and connect with nature's rhythm.`,
      author: "Lakshmi Pillai",
      date: "March 6, 2024",
    },
    {
      id: 9,
      category: "City Tours",
      readTime: "9 min read",
      title: "Kolkata Heritage Walk: Culture, Literature & Street Food",
      description:
        "Discover Kolkata's rich cultural heritage through guided walks covering colonial architecture, literary landmarks, and the city's legendary street food scene.",
      fullContent: `Kolkata, India's cultural capital, offers immersive heritage walks that reveal layers of history, literature, and culinary traditions spanning centuries.

Start at the iconic Victoria Memorial, now a museum showcasing British colonial history. The white marble monument set in manicured gardens provides context for understanding Kolkata's colonial past and its transformation into a modern metropolis.

The literary trail includes Coffee House on College Street, where intellectuals like Rabindranath Tagore and Satyajit Ray once gathered. College Street, with its countless book stalls, remains Asia's largest second-hand book market. Visit the Indian Coffee House to experience adda (intellectual conversations) culture still thriving among students and writers.

Architectural marvels line the heritage route: the Gothic Revival High Court, Indo-Saracenic Indian Museum, and the neoclassical Town Hall. Each building tells stories of British architectural influence adapted to tropical conditions.

The street food journey is legendary. Start with jhalmuri (spiced puffed rice) from Park Street vendors. Try kathi rolls at Nizam's, puchka (pani puri) from roadside stalls, and end with rosogolla from traditional sweet shops in North Kolkata.

Cultural Immersion: Visit Kumartuli, where skilled artisans create clay idols for festivals throughout the year. During Durga Puja season (September-October), the entire city transforms into an open-air art gallery.

Tram rides offer unique perspectives of the city's daily life. Kolkata remains one of the few Indian cities with operational tram networks, providing eco-friendly transport through historic neighborhoods.

The Howrah Bridge at sunset provides spectacular views of the Hooghly River and bustling city life. Evening boat rides offer different perspectives of the city's riverfront ghats and colonial-era buildings.`,
      author: "Amit Chatterjee",
      date: "March 4, 2024",
    },
    {
      id: 10,
      category: "Travel Tips",
      readTime: "8 min read",
      title:
        "Solo Female Travel in India: Safety Tips & Empowering Experiences",
      description:
        "Comprehensive guide for solo female travelers in India, covering safety precautions, recommended destinations, and empowering cultural experiences.",
      fullContent: `Solo female travel in India has become increasingly popular and safer with proper planning and awareness. Here's a comprehensive guide to help you navigate this incredible journey confidently.

Safety Fundamentals: Research your destinations thoroughly and choose accommodations in safe neighborhoods with good reviews from female travelers. Share your itinerary with family and friends, including daily check-ins. Trust your instincts – if a situation feels uncomfortable, remove yourself immediately.

Recommended Destinations: Start with female-friendly destinations like Himachal Pradesh (Manali, Dharamshala), Kerala (Munnar, Kochi), and Rajasthan (Udaipur, Pushkar). These areas have well-established tourist infrastructure and are accustomed to solo female travelers.

Transportation Safety: Use pre-paid taxis or reputable app-based services like Uber and Ola. For trains, book ladies' compartments when available. Sit near families or older women when possible. Avoid traveling alone at night, especially in rural areas.

Accommodation Tips: Choose hostels with female-only dorms or hotels with good security measures. Homestays with families often provide safe, authentic experiences. Read recent reviews and verify contact information before booking.

Cultural Sensitivity: Dress modestly, especially when visiting religious sites. Pack lightweight scarves to cover shoulders and head when required. Learn basic local phrases and customs to show respect for local culture.

Empowering Experiences: Take cooking classes with local families, learn traditional crafts from women artisans, participate in meditation retreats, and visit women's cooperatives that support local communities.

Emergency Preparedness: Keep emergency contacts easily accessible, including local police, your embassy, and trusted contacts. Carry a whistle and learn basic self-defense techniques. Download offline maps and translation apps.

Connect with other female travelers through online communities and travel groups. Many cities have women-only travel groups that organize safe group activities.

Remember: India offers incredible experiences for solo female travelers who plan carefully and stay aware of their surroundings.`,
      author: "Anjali Gupta",
      date: "March 2, 2024",
    },
    {
      id: 11,
      category: "Cultural Experiences",
      readTime: "13 min read",
      title: "Indian Festival Calendar: Celebrating Across the Country",
      description:
        "Experience India's vibrant festival culture throughout the year. From Diwali's lights to Holi's colors, discover the best festivals to witness across different regions.",
      fullContent: `India's festival calendar offers year-round opportunities to experience the country's rich cultural diversity, spiritual traditions, and community celebrations.

Diwali (October/November): The Festival of Lights illuminates entire cities with millions of diyas (oil lamps). Varanasi and Jaipur offer spectacular celebrations with fireworks, traditional sweets, and beautifully decorated temples. Join families for rangoli (colorful floor art) creation and traditional feast preparations.

Holi (March): The Festival of Colors transforms streets into vibrant playgrounds. Mathura and Vrindavan, Krishna's birthplaces, host the most authentic celebrations. Participate in organic color throwing, traditional music, and community dancing. Remember to wear old clothes and bring waterproof gear for cameras.

Durga Puja (September/October): Kolkata becomes the epicenter of this Bengali festival honoring Goddess Durga. Elaborate pandals (temporary structures) showcase artistic creativity competing for prestigious awards. Street food festivals accompany the religious celebrations, creating a complete cultural immersion.

Pushkar Fair (November): Rajasthan's most colorful camel fair combines livestock trading with cultural performances. Witness camel races, folk music concerts, and traditional Rajasthani dance. The fair coincides with the full moon, creating magical desert evening experiences.

Kerala Onam (August/September): The state's harvest festival features elaborate floral carpets (pookalam), snake boat races, and traditional feasts served on banana leaves. Participate in Pulikali (tiger dance) and witness Kathakali performances.

Goa Carnival (February/March): Portuguese colonial influence creates unique celebrations with parades, music, and dance performances. The three-day festival transforms Panaji into a colorful street party with elaborate floats and traditional Goan cuisine.

Planning Tips: Book accommodations well in advance during major festivals as prices increase significantly. Learn basic local customs and greetings to enhance interactions with locals. Carry cash as digital payments may be limited during festival chaos.

Festival participation requires respect for religious customs and local traditions while offering unparalleled insights into India's spiritual and cultural heritage.`,
      author: "Ravi Krishnan",
      date: "February 28, 2024",
    },
    {
      id: 12,
      category: "Travel Guides",
      readTime: "16 min read",
      title: "Himalayan Adventures: Trekking Routes for Every Level",
      description:
        "Explore the Indian Himalayas with our comprehensive trekking guide covering beginner-friendly trails to challenging expeditions across different mountain ranges.",
      fullContent: `The Indian Himalayas offer some of the world's most spectacular trekking experiences, from gentle valley walks to challenging high-altitude expeditions. Here's your complete guide to Himalayan adventures.

Beginner Treks:
Triund Trek (Himachal Pradesh): A perfect starter trek offering panoramic Dhauladhar range views. The 9-kilometer trail from McLeod Ganj takes 4-5 hours with moderate difficulty. Camping under stars with Kangra valley views creates unforgettable memories.

Valley of Flowers (Uttarakhand): UNESCO World Heritage site blooming with alpine flowers from July to August. The 14-kilometer trek requires basic fitness but rewards with meadows of rare Himalayan flora and spectacular mountain vistas.

Intermediate Treks:
Kedarkantha (Uttarakhand): Winter's most popular trek offering summit climbing experience at 12,500 feet. The 20-kilometer trail passes through pine forests, meadows, and snow-covered peaks. Best attempted between December and April.

Hampta Pass (Himachal Pradesh): Cross from Kullu to Lahaul valleys experiencing dramatic landscape changes. The 26-kilometer trek showcases green valleys transitioning to barren moonscapes, perfect for photography enthusiasts.

Advanced Treks:
Chadar Trek (Ladakh): Walk on the frozen Zanskar River during harsh winter months. This extreme adventure requires excellent fitness and cold weather gear. The unique experience of walking on 3-4 feet thick ice formations creates lifetime memories.

Stok Kangri (Ladakh): Attempt this 20,187-foot peak for serious mountaineering experience. Technical climbing skills and high-altitude acclimatization are essential. Professional guides and proper equipment are mandatory.

Essential Preparation: Build endurance through regular cardio exercises and leg strengthening workouts. Practice with loaded backpacks on local hills. Invest in quality trekking gear including waterproof boots, layered clothing, and sleeping systems.

Altitude Considerations: Acclimatize gradually by spending extra days at intermediate altitudes. Recognize altitude sickness symptoms and carry prescribed medications. Descent immediately if severe symptoms develop.

Seasonal Planning: March-May and September-November offer the best weather conditions for most treks. Monsoons (June-August) make trails dangerous due to landslides and leeches.`,
      author: "Captain Arun Thapa",
      date: "February 26, 2024",
    },
    {
      id: 13,
      category: "Cab Services",
      readTime: "5 min read",
      title: "Wedding Transportation in India: Luxury Car Rentals Guide",
      description:
        "Plan perfect wedding transportation with luxury car rental options, decorated vehicles, and professional chauffeurs for Indian weddings and celebrations.",
      fullContent: `Indian weddings demand special transportation arrangements that match the grandeur of the celebration. Here's your guide to luxury car rentals and wedding transportation services.

Luxury Vehicle Options: Mercedes-Benz E-Class and BMW 5 Series remain popular choices for bride and groom transportation. Audi A6 and Jaguar XF offer elegant styling perfect for wedding photography. For traditional touches, decorated vintage cars like Ambassador or Premier Padmini create nostalgic charm.

Decoration Services: Most rental companies provide flower decoration services with fresh marigolds, roses, and regional flowers. Traditional kaleera, bandhanwar, and colorful ribbons transform vehicles into wedding chariots. Discuss decoration themes to match your wedding color scheme.

Multi-City Services: For destination weddings, choose operators offering multi-city packages. Companies like Carzonrent and Savaari specialize in wedding transportation across different cities with consistent service quality. They handle coordination between ceremonies at different venues.

Guest Transportation: Arrange mini-buses or tempo travelers for guest groups. Luxury coaches with air-conditioning ensure comfort during long-distance travel. Provide welcome amenities like water bottles, snacks, and wet wipes for guest convenience.

Professional Chauffeurs: Experienced drivers familiar with wedding protocols understand timing requirements and venue locations. They coordinate with wedding planners and photographers for optimal positioning during ceremonies. Uniformed chauffeurs add professional elegance to your celebration.

Booking Tips: Reserve vehicles 2-3 months in advance during wedding seasons (November-February). Compare packages including decoration, fuel, driver allowances, and overtime charges. Read cancellation policies carefully as wedding dates sometimes change.

Budget Planning: Luxury car rentals range from ₹8,000-25,000 per day depending on vehicle type and decoration level. Factor in additional costs for fuel, tolls, parking, and driver accommodation for outstation weddings.

Photography Coordination: Coordinate with photographers for vehicle positioning during key moments like vidaai (farewell ceremony) and arrival shots.`,
      author: "Deepak Malhotra",
      date: "February 24, 2024",
    },
    {
      id: 14,
      category: "Travel Guides",
      readTime: "12 min read",
      title: "Northeast India Explorer: Seven Sisters State Adventure",
      description:
        "Discover India's unexplored northeast region covering all seven sister states with unique cultures, pristine landscapes, and adventure activities.",
      fullContent: `Northeast India, comprising seven sister states, remains one of India's most unexplored and culturally diverse regions. This comprehensive guide helps you navigate through Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura.

Assam - Gateway to Northeast: Start your journey in Guwahati, then explore Kaziranga National Park for one-horned rhinoceros sightings. Take river cruises on the mighty Brahmaputra River. Visit Majuli, the world's largest river island, experiencing Vaishnavite culture and mask-making traditions.

Meghalaya - Abode of Clouds: Shillong offers pleasant hill station experiences with waterfalls and lakes. Cherrapunji and Mawsynram receive world's highest rainfall, creating spectacular waterfalls and living root bridges. Trek to double-decker root bridges in Nongriat village for unique natural architecture.

Arunachal Pradesh - Land of Rising Sun: Tawang monastery, India's largest Buddhist monastery, offers spiritual experiences with Himalayan backdrops. The state requires Inner Line Permits for visitors. Experience diverse tribal cultures and pristine mountain landscapes.

Nagaland - Land of Festivals: Visit during Hornbill Festival (December) to experience all tribal cultures simultaneously. Kohima War Cemetery commemorates World War II battles. Try authentic Naga cuisine known for its unique preparations and organic ingredients.

Manipur - Jewel of India: Imphal offers historical significance and Manipuri dance performances. Loktak Lake with floating phumdis (vegetation) creates unique ecosystems. The state is famous for handloom textiles and martial arts traditions.

Mizoram and Tripura: These states offer pristine hill station experiences with unique tribal cultures, bamboo crafts, and traditional festivals. Limited tourist infrastructure requires advance planning.

Travel Logistics: Guwahati serves as the main entry point with regular flights from major Indian cities. Inner Line Permits are required for Arunachal Pradesh, Mizoram, and Nagaland. Plan minimum 10-14 days to cover major highlights across states.

Cultural Sensitivity: Respect local customs and traditions. Many areas have restrictions on alcohol and non-vegetarian food. Photography permissions may be required at sensitive locations.`,
      author: "Dr. Maya Borgohain",
      date: "February 22, 2024",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All Articles" || blog.category === activeCategory;

      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="w-full min-h-screen bg-[#FFFBEA]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#FFBF00] via-[#FFD54F] to-[#FFF8E1] py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Journey Beyond the Ride: Insights from Goccar
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Expert driving tips, mindful travel stories, and insights that make
            every journey better – brought to you by Goccar's experienced driver
            network.
          </p>
          <div className="mt-6 relative max-w-lg mx-auto bg-white rounded-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles by title, author, or content..."
              className="w-full rounded-full pl-12 pr-4 py-3 shadow-md border border-gray-300 focus:border-black focus:ring-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.name;
            return (
              <Button
                key={idx}
                variant="outline"
                className={`rounded-full px-5 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-lg"
                    : "border-gray-300 hover:bg-[#FFF2CC]"
                }`}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.name} ({cat.count})
              </Button>
            );
          })}
        </div>

        {/* Featured Section Title */}
        <h2 className="text-3xl font-bold mt-16 mb-8 relative text-center text-black">
          Featured Insights
          <span className="block w-20 h-[3px] bg-[#FFBF00] rounded-full mx-auto mt-2"></span>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden cursor-pointer group"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span className="bg-[#FFF2CC] px-3 py-1 rounded-full group-hover:bg-[#FFBF00] group-hover:text-black transition-colors">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-[#FFBF00] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-700 text-sm mt-3">
                      {blog.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {blog.date}
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-[#FFBF00] text-sm font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full py-10">
              No articles found.
            </p>
          )}
        </div>
        <ContactUs formRef={contactFormRef} />
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#FFBF00] text-black px-3 py-1 rounded-full text-sm">
                    {selectedBlog.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock size={14} />
                    {selectedBlog.readTime}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {selectedBlog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedBlog.date}
                  </span>
                </div>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {selectedBlog.fullContent}
                </p>
              </div>
              <div className="border-t border-gray-100 p-6 bg-[#FFFBEA] flex justify-end">
                <Button
                  onClick={() => setSelectedBlog(null)}
                  className="bg-[#FFBF00] text-black px-6 py-2 rounded-full hover:bg-[#e6ac00] transition"
                >
                  Close Article
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
