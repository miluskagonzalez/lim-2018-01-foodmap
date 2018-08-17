const restaurants = [
  {
    id: 'llsc',
    name: 'La Lucha Sangucheria Criolla',
    picture: '../assets/images/llsc-pic.png',
    description: 'Sánguches y jugos',
    local: { 
      address: 'Av. Malecón de la Reserva 610 Interior 231, 2do Piso, Miraflores',
      map: '../assets/images/llsc-map.png'
    },
    tags: [ 
      'sandwiches', 'sánguches', 'sanguches', 'sanguich', 'sangüich', 'jugos', 'café', 'cafe', 'asado de res', 
      'chicharrón', 'chicharron', 'jamón del pais', 'jamon del pais', 'jamon y huevos', 'jamón y huevos', 
      'pavo a la leña', 'pollo a la leña', 'jamon serrano', 'jamón serrano', 'pollo con piña', 'hamburguesas', 
      'lomo fino', 'club sandwich', 'chicha', 'papas fritas huayro', 'comida rápida', 'fast food', 'comida local', 
      'comida para llevar', 'desayuno', 'almuerzo', 'cena', 'brunch'
    ]
  },
  {
    id: 'bigdb',
    name: 'BLUE: il gelato del barrio',
    picture: '../assets/images/bigdb-pic.jpg',
    description: 'Helados artesanales',
    local: { 
      address: 'Jiron 28 de julio 202, Barranco', 
      map: '../assets/images/bigdb-map.png'
    },
    tags: [ 
      'gelato artesanal', 'gelatos artesanales', 'helado artesanal', 'helados artesanales', 'helado vegano', 
      'helados veganos', 'helado vegetariano', 'helados vegetarianos', 'opciones veganas', 'heladería', 'postres', 
      'vegan ice cream', 'opciones vegetarianas', 'café', 'cafe', 'expresso', 'frutas'
    ]
  },
  {
    id: 'ayhsc',
    name: 'Ayahuasca Resto Bar',
    picture: '../assets/images/ayhsc-pic.jpg',
    description: 'Dinner & drinks',
    local: { 
      address: 'Pronlongación San Martin 130, Barranco', 
      map: '../assets/images/ayhsc-map.png'
    },
    tags: [
      'chancho al cilindro', 'brochetas', 'pollo a la parrilla', 'pancita', 'choncholi', 'picarones', 'lomo', 'cerdo',
      'champiñones', 'piqueos', 'pisco sour', 'tequeños', 'langostinos', 'portobellos', 'pastel de choclo', 'cangrejo',
      'conchas a la parmesana', 'chicharrón', 'chicharrón', 'sánguches', 'sanguches', 'sandwiches', 'sangüich', 'makis',
      'carpaccio', 'tiradito', 'alitas', 'butifarra', 'hamburguesas', 'salchipapas', 'pizzeta', 'pulpo', 'pulpito', 
      'sushi', 'causa', 'peruana', 'latina', 'bar', 'pub', 'sudamericana', 'comida marina', 'mariscos'
    ]
  },
  {
    id: 'lstpg',
    name: 'La 73 Paradero Gourmet',
    picture: '../assets/images/lstpg-pic.jpg',
    description: 'Comida local y fusión',
    local: { 
      address: 'Av. El Sol Oeste 175, Barranco', 
      map: '../assets/images/lstpg-map.png'
    },
    tags: [ 
      'comida peruana', 'comida latina', 'comida contemporánea', 'opciones veganas', 'opciones sin gluten', 'cafe',
      'café', 'bar','comida vegana', 'apto para vegetarianos', 'comida fusión', 'comida fusion', 'almuerzo', 'cena', 
      'brunch', 'comida para llevar', 'pie de limón', 'huatia de carrilleras', 'carne de res', 'creme brulee', 'atún',
      'atun', 'tartar', 'alitas capón', 'salsa oriental', 'yakitori', 'salmón emparillado en salsa nikkei', 'chaufa',
      'comida nikkei', 'chifa', 'langostinos', 'cerdo', 'chicha', 'chilcanos','tartar de salmón', 'pisco sour' 
    ]
  },
  {
    id: 'cntrn',
    name: 'Canta Rana',
    picture: '../assets/images/cntrn-pic.jpg',
    description: 'Comida peruana',
    local: { 
      address: 'Calle Genova 101, Barranco', 
      map: '../assets/images/cntrn-map.png'
    },
    tags: [ 
      'comida peruana', 'comida latina', 'mariscos', 'sopas', 'opciones sin gluten', 'pescados', 'pulpito', 'pulpo',
      'cevichería', 'ceviche mixto', 'comida marina', 'caldo de gallina', 'causa', 'arroz con mariscos', 'milanesa',
      'conchas a la parmesana', 'ceviche de pescado', 'champiñones', 'chicharrón de pescado', 'langostinos', 'conchas',
      'pulpo al olivo', 'conchas a la chorrillana', 'gnnochis', 'arroz chaufa', 'tiradito'
    ]
  },
  {
    id: 'brrtb',
    name: 'Burrito Bar',
    picture: '../assets/images/brrtb-pic.jpg',
    description: 'Comida peruana',
    local: { 
      address: 'Av. Miguel Grau 113, Barranco', 
      map: '../assets/images/brrtb-map.png'
    },
    tags: [ 
      'burritos', 'almuerzo', 'cena', 'comida rápida', 'comida centroamericana', 'comida mexicana', 'comida latina',
      'comida vegana', 'apto para vegetarianos', 'opciones veganas', 'comida vegetariana', 'bebidas', 'quesadillas',
      'margaritas', 'nachos con guacamole', 'bloody mary', 'frejol', 'tacos', 'ensaldas', 'pollo', 'carne'
    ]
  },
]
  