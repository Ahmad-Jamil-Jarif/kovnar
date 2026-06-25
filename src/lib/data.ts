/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Heirloom Lounge',
    category: 'Seating',
    material: 'Linen & Sculpted Oak',
    price: 2840,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHoidWN3CPN_swoSo5Cns4AhWOxh-z6in8a9IzUZWfUSygP1wShNc56lamgaz61CRrt0OAO2pCU-IXl3LIoOeLQ8RX2AL5jt6JV8GoXsN12rV2HUI-zvJYUgtIgp_jqLMEMvABA3eeKZOdUQEsiZe8S05fBGdGgZihRhaZH0k1E6GPL3yXtVr0rnLEfIHD6s1cu8b-0xuLeqbZjbDAYvSyLd8vDoJWnCHlpa_bWZb8keYCaPGlcxCuWE72oVYuPVUudKH1c8fLeTvw',
    description: 'Minimalist living room with soft beige linen sofa, organic shaped wooden coffee table, and warm afternoon light filtering through sheer curtains',
    featured: true,
  },
  {
    id: '2',
    name: 'Solstice Vase',
    category: 'Decor',
    material: 'Hand-thrown stoneware',
    price: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlfuYwYERy3Ox3czWi23mc4PmBdfR8BTvTVAgJG2Sf_O-o21ChbdvEZ7s1VxypnLBnD3t4WrLSNQei8v_k3ckBiSJKjsoqf_DRN_HMcaJ6LP0C8pQXiLUWbx21UUEH0avVfJoAi5SK50nK9H_RDB7sB8Ow_oqtOHn0QdwMni0-RbWW2jfPKdMGjSXoK_MvZPjJHhgOlqzTU5imr6KJ8y_ygLBfTNC2rdesTV9IcPnZfKChGVBJewBy3WLEqZW1sUYqM0pe3HUFTyyl',
    description: 'Handcrafted ceramic vase with a matte beige texture holding a single dried botanical branch against a warm neutral wall',
  },
  {
    id: '3',
    name: 'Alpine Throw',
    category: 'Decor',
    material: 'Raw Merino Wool',
    price: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwqFF4zl2cqwa3kpI272P0g_XjW-R5ZH4FYIwF_mffyJ1wQbtlgbBvvrC2Tu0vUboBWfM2LKt3DNYa9VdDFW06EOw7AvEM4LoYylNRVr50cFxVdSJuoXHD0myUvFUHfWnNBaf-M_GUaPWgQ_aq_U6O-CNoCdXP3HV5YtVZSHKvFv_MJeJ8CaIbkRrp7CU_Le6w5sFjefeo6iu82j-dQ5ruiF-XzhJrRtiomnZ58elAMjvYqafjstMQtmc0vYGHopSJS0PrXZomRo_t',
    description: 'Close up of a stack of thick cream-colored wool blankets with visible woven texture on a wooden bench',
  },
  {
    id: '4',
    name: 'Archi Dining Set',
    category: 'Tables',
    material: 'Sustainable teak',
    price: 4100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx7pcJQrdHH3IR9gJKwfZSDN91yB0rck0DA44Ws7H2ovEfwzEdmKzvhUJxeXY6E4ezOFvPHlqJxI7x2orRIVjLSVaViopfGQqRsG6kVKGkiUKJ6VELXDdozQqAV1N1YzjuzgMLIa04v92yFO2mPZ6V_POFXkB5Q5INLDy1lXA7rT3bZm7E8gNdIxlinrXJRU1_Sq5JYiMfB6R-O6_oh5eQNEnP31VXfWTOyEuzsoLr7O7_m6HFxTJbwgy1qYZZ-11Aj1ZPbIKUQBqZ',
    description: 'Danish modern dining table set with minimalist chairs and a warm wooden pendant light illuminating the scene',
  },
  {
    id: '5',
    name: 'Erosion Study 04',
    category: 'Decor',
    material: 'Archival Giclée Print',
    price: 180,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFW1dQbOMtvTGNxR6o8cgiXjid4tvM0nTaeTx-EMLH3a6-CVI1Q_W2a3evmLASK_TCRVN0VEXtKQnt-jSkSXDuJP3k343IOlOCAUMkxIQNpEMd0L2-h7XwvInfw41kSL0Bk7y0giJaLcEkrMe4MQlKCbf6eI18i9tKxac-YegUn95t63yoljAK6Z1t0gjcEow9lAG6C6ngRKilKC0xGTa8JHowTDN_ugzNxD_RIYLAgkH6vTIIgdrrbSEONq4vi5N7OXtNXhCqAmvL',
    description: 'Minimalist abstract wall art with organic lines in terracotta and cream colors framed in thin light wood',
  },
  {
    id: '6',
    name: 'Cinder & Saffron',
    category: 'Decor',
    material: 'Slow-burn Soy Wax',
    price: 65,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjX9a_0t1NE5Q4d10ziNULVxZZjK6Kl19xeTqGEjLod78ttwF59Dd7ByjCd-FMTDYbigJt34PTZQmWNpYwSaIYyNxLTfE9gfjfWcnKemJeDTQcZQJu24k_C0N6SsrgjVeCA1aPNIWNdYtZVlBVsjXBnnmZ_MTGI5cB9hKn71dto1784jeOBc04tAaHAGYvzp8Swz77zDalEL2Wn2J88iAgsXZLqny_qvfd3TcNSuVfNAY6ipdlfG_5nWbQqvrQ3r69pdK8A3nVULxi',
    description: 'Luxury scented candle in a heavy amber glass jar on a dark marble surface with soft glowing highlights',
  },
  {
    id: '7',
    name: 'Aura Brass Pendant',
    category: 'Lighting',
    material: 'Brushed Brass',
    price: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuGBBkNhReEFWIrKvbZJJgiUDH6lRjyI6hHwfvi82VTGbXpucNBUuH1QZSw9FTAFvsHVeudpvB-ybxIgg7w0as2YZ-Oh5BFP-LFGrQ-lEObOwceqhuqUb6Yh5Sgn-8ySrChSroRXPBYtYiCFpqO5zNDQsdHE9FfKiAZKZEnQ3fYVR_BARw0lGJBRtPId315GlImDa83v0pU3LvL1EBk-gZporKp7NmEFew_8Zdzx_3ASwdaUggY9Y7D0zeN4Y6xXcRPaff5uU9qjYl',
    description: 'Minimalist modern pendant light in brushed brass hanging against a soft bone-white wall, soft natural lighting',
  },
  {
    id: '8',
    name: 'Monolith Side Table',
    category: 'Tables',
    material: 'Travertine Stone',
    price: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFZgE2VNyz4KxPJ-ONybqpD5V_0xfKiNsayG0j6rslMjzKcuoYpMZpg9ZoW_4qOM2yTgPHDUgPo7Rfv4GggcODCBy_PjfgjdlcWacn0N7Biy2E02Dgmcxj3aJygnneb0Li20d6lsG6g1NU_92SkuW05ZhxVpXlE8-PBo1_paEwTLQKPArgKS0npQJA1Pqsd4q_4h817kMQOvkIQHIg751636sxy3gRFMYseP3XmaQlgZTmcWxwrMJWa_MSi0Rbz_Qz6VGTZS4YbSRo',
    description: 'Sculptural travertine stone side table with organic curves, placed on a textured linen rug in a sunlit room',
  },
  {
    id: '9',
    name: 'Oasis Lounge Chair',
    category: 'Seating',
    material: 'Linen Bouclé',
    price: 2450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYmbpwb62O2FU136EfKxz5DgwCKP2JETEm8MqKTIhuOfcYCuJvBEErntR0u3RVYbdAlyWtHslcWjYe6ZZPj7-8QF4vASVD7vrWA13wXBTNF_B2Y11_xDbjUoF6cLpjnWZ9V2H_F2dmSupAgLH7bj82v06Eu0WH7TTieH4ILnFbuUhp3IOgQ38tlmp_f9EmQCc6E1YnX81ufeQA2A9S2iyMqsgtLkyDFeEudg_ZA8acTuJ67oJPCWIwZStA8ABmeIXdclC_2j_dc6LI',
    description: 'Low profile modern lounge chair upholstered in cream bouclé fabric with dark walnut legs, minimalist setting',
  }
];
