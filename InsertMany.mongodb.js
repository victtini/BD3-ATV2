const database = 'BD3-avt2';
const collection = 'BD3_atv_produtos';

use(database); 

db[collection].insertMany([
    {
        "nome": "Camiseta Estampada",
        "valor": 29.90,
        "quantidade_em_estoque": 100,
        "fabricante": "Moda Brasil",
        "categoria": "Vestuário",
        "descricao": "Camiseta de algodão com estampa exclusiva."
    },
    {
        "nome": "Tênis Esportivo",
        "valor": 199.90,
        "quantidade_em_estoque": 50,
        "fabricante": "Nike",
        "categoria": "Calçados",
        "descricao": "Tênis ideal para corrida e atividades físicas."
    },
    {
        "nome": "Relógio Digital",
        "valor": 89.90,
        "quantidade_em_estoque": 30,
        "fabricante": "TimeTech",
        "categoria": "Acessórios",
        "descricao": "Relógio digital à prova d'água com cronômetro."
    },
    {
        "nome": "Mochila Escolar",
        "valor": 79.90,
        "quantidade_em_estoque": 75,
        "fabricante": "Estilo Jovem",
        "categoria": "Acessórios",
        "descricao": "Mochila com compartimentos para laptop e material escolar."
    },
    {
        "nome": "Fone de Ouvido Bluetooth",
        "valor": 149.90,
        "quantidade_em_estoque": 60,
        "fabricante": "SoundMax",
        "categoria": "Eletrônicos",
        "descricao": "Fone de ouvido sem fio com cancelamento de ruído."
    },
    {
        "nome": "Smartphone Android",
        "valor": 999.90,
        "quantidade_em_estoque": 20,
        "fabricante": "TechCorp",
        "categoria": "Eletrônicos",
        "descricao": "Smartphone com câmera de alta resolução e 128GB de armazenamento."
    },
    {
        "nome": "Cadeira Gamer",
        "valor": 499.90,
        "quantidade_em_estoque": 25,
        "fabricante": "GameZone",
        "categoria": "Móveis",
        "descricao": "Cadeira ergonômica para gamers, ajustável e confortável."
    },
    {
        "nome": "Mouse Gamer RGB",
        "valor": 129.90,
        "quantidade_em_estoque": 40,
        "fabricante": "HyperX",
        "categoria": "Acessórios",
        "descricao": "Mouse gamer com iluminação RGB e alta precisão."
    },
    {
        "nome": "Teclado Mecânico",
        "valor": 299.90,
        "quantidade_em_estoque": 35,
        "fabricante": "Logitech",
        "categoria": "Acessórios",
        "descricao": "Teclado mecânico com switches personalizáveis."
    },
    {
        "nome": "Cafeteira Elétrica",
        "valor": 199.90,
        "quantidade_em_estoque": 15,
        "fabricante": "Café Rápido",
        "categoria": "Eletrodomésticos",
        "descricao": "Cafeteira elétrica com capacidade para 12 xícaras."
    },
    {
        "nome": "Liquidificador",
        "valor": 159.90,
        "quantidade_em_estoque": 20,
        "fabricante": "Philips",
        "categoria": "Eletrodomésticos",
        "descricao": "Liquidificador potente com jarra de vidro."
    },
    {
        "nome": "Batedeira",
        "valor": 249.90,
        "quantidade_em_estoque": 10,
        "fabricante": "Arno",
        "categoria": "Eletrodomésticos",
        "descricao": "Batedeira com potência de 400W e tigela de inox."
    },
    {
        "nome": "Ferro de Passar",
        "valor": 89.90,
        "quantidade_em_estoque": 50,
        "fabricante": "Casa Fácil",
        "categoria": "Eletrodomésticos",
        "descricao": "Ferro a vapor com base antiaderente."
    },
    {
        "nome": "Ventilador de Mesa",
        "valor": 99.90,
        "quantidade_em_estoque": 30,
        "fabricante": "VentilAir",
        "categoria": "Eletrodomésticos",
        "descricao": "Ventilador portátil com três velocidades."
    },
    {
        "nome": "Aspirador de Pó",
        "valor": 299.90,
        "quantidade_em_estoque": 15,
        "fabricante": "CleanMaster",
        "categoria": "Eletrodomésticos",
        "descricao": "Aspirador de pó com filtro HEPA."
    },
    {
        "nome": "Secador de Cabelo",
        "valor": 129.90,
        "quantidade_em_estoque": 40,
        "fabricante": "GHD",
        "categoria": "Beleza",
        "descricao": "Secador potente com tecnologia iônica."
    },
    {
        "nome": "Chapinha",
        "valor": 199.90,
        "quantidade_em_estoque": 25,
        "fabricante": "Babyliss",
        "categoria": "Beleza",
        "descricao": "Chapinha profissional com placas de cerâmica."
    },
    {
        "nome": "Perfume Masculino",
        "valor": 89.90,
        "quantidade_em_estoque": 60,
        "fabricante": "Fragrance Co.",
        "categoria": "Beleza",
        "descricao": "Perfume masculino com fragrância amadeirada."
    },
    {
        "nome": "Perfume Feminino",
        "valor": 99.90,
        "quantidade_em_estoque": 55,
        "fabricante": "Flora Essence",
        "categoria": "Beleza",
        "descricao": "Perfume feminino com notas florais."
    },
    {
        "nome": "Creme Hidratante",
        "valor": 29.90,
        "quantidade_em_estoque": 100,
        "fabricante": "Nivea",
        "categoria": "Beleza",
        "descricao": "Creme hidratante para pele seca."
    },
    {
        "nome": "Sabonete Líquido",
        "valor": 19.90,
        "quantidade_em_estoque": 150,
        "fabricante": "Dove",
        "categoria": "Beleza",
        "descricao": "Sabonete líquido suave para todos os tipos de pele."
    },
    {
        "nome": "Máscara Facial",
        "valor": 49.90,
        "quantidade_em_estoque": 80,
        "fabricante": "L’Oréal",
        "categoria": "Beleza",
        "descricao": "Máscara facial hidratante e revitalizante."
    },
    {
        "nome": "Shampoo Anticaspa",
        "valor": 39.90,
        "quantidade_em_estoque": 70,
        "fabricante": "Head & Shoulders",
        "categoria": "Beleza",
        "descricao": "Shampoo anticaspa que combate a oleosidade."
    },
    {
        "nome": "Condicionador Hidratante",
        "valor": 39.90,
        "quantidade_em_estoque": 70,
        "fabricante": "Pantene",
        "categoria": "Beleza",
        "descricao": "Condicionador hidratante para cabelos secos."
    },
    {
        "nome": "Batom Líquido",
        "valor": 29.90,
        "quantidade_em_estoque": 100,
        "fabricante": "MakeUp Brand",
        "categoria": "Beleza",
        "descricao": "Batom líquido matte disponível em várias cores."
    },
    {
        "nome": "Notebook Gamer",
        "valor": 4999.00,
        "quantidade_em_estoque": 10,
        "fabricante": "Dell",
        "categoria": "Eletrônicos",
        "descricao": "Notebook gamer com placa gráfica dedicada."
    },
    {
        "nome": "Monitor LED",
        "valor": 1299.00,
        "quantidade_em_estoque": 15,
        "fabricante": "Samsung",
        "categoria": "Eletrônicos",
        "descricao": "Monitor LED Full HD de 24 polegadas."
    },
    {
        "nome": "Impressora Multifuncional",
        "valor": 899.00,
        "quantidade_em_estoque": 20,
        "fabricante": "HP",
        "categoria": "Eletrônicos",
        "descricao": "Impressora que imprime, copia e digitaliza."
    },
    {
        "nome": "Câmera Digital",
        "valor": 1499.00,
        "quantidade_em_estoque": 5,
        "fabricante": "Canon",
        "categoria": "Eletrônicos",
        "descricao": "Câmera digital com lente intercambiável."
    },
    {
        "nome": "Tablet Android",
        "valor": 799.00,
        "quantidade_em_estoque": 30,
        "fabricante": "Samsung",
        "categoria": "Eletrônicos",
        "descricao": "Tablet com tela de 10 polegadas e 64GB de armazenamento."
    },
    {
        "nome": "Smartwatch",
        "valor": 399.00,
        "quantidade_em_estoque": 50,
        "fabricante": "Xiaomi",
        "categoria": "Eletrônicos",
        "descricao": "Smartwatch com monitoramento de atividades físicas."
    },
    {
        "nome": "Kindle",
        "valor": 499.00,
        "quantidade_em_estoque": 20,
        "fabricante": "Amazon",
        "categoria": "Eletrônicos",
        "descricao": "Leitor de livros digitais com tela e-ink."
    },
    {
        "nome": "Smart TV 4K",
        "valor": 3499.00,
        "quantidade_em_estoque": 10,
        "fabricante": "LG",
        "categoria": "Eletrônicos",
        "descricao": "Smart TV 4K com sistema operacional webOS."
    },
    {
        "nome": "Geladeira Frost Free",
        "valor": 2999.00,
        "quantidade_em_estoque": 5,
        "fabricante": "Brastemp",
        "categoria": "Eletrodomésticos",
        "descricao": "Geladeira frost free com 450 litros de capacidade."
    },
    {
        "nome": "Máquina de Lavar",
        "valor": 2499.00,
        "quantidade_em_estoque": 7,
        "fabricante": "Electrolux",
        "categoria": "Eletrodomésticos",
        "descricao": "Máquina de lavar com capacidade para 10 kg de roupas."
    },
    {
        "nome": "Fogão 4 Bocas",
        "valor": 1099.00,
        "quantidade_em_estoque": 12,
        "fabricante": "Consul",
        "categoria": "Eletrodomésticos",
        "descricao": "Fogão 4 bocas com acendimento automático."
    },
    {
        "nome": "Forno Micro-ondas",
        "valor": 599.00,
        "quantidade_em_estoque": 30,
        "fabricante": "LG",
        "categoria": "Eletrodomésticos",
        "descricao": "Forno micro-ondas com 20 litros de capacidade."
    },
    {
        "nome": "Purificador de Água",
        "valor": 399.00,
        "quantidade_em_estoque": 20,
        "fabricante": "Esmeralda",
        "categoria": "Eletrodomésticos",
        "descricao": "Purificador de água com filtros de carvão ativado."
    },
    {
        "nome": "Torradeira",
        "valor": 149.00,
        "quantidade_em_estoque": 25,
        "fabricante": "Black+Decker",
        "categoria": "Eletrodomésticos",
        "descricao": "Torradeira para até duas fatias com controle de temperatura."
    },
    {
        "nome": "Ar Condicionado Split",
        "valor": 1999.00,
        "quantidade_em_estoque": 8,
        "fabricante": "Springer",
        "categoria": "Eletrodomésticos",
        "descricao": "Ar condicionado split com 12.000 BTUs."
    },
    {
        "nome": "Máquina de Café Espresso",
        "valor": 599.00,
        "quantidade_em_estoque": 15,
        "fabricante": "Nespresso",
        "categoria": "Eletrodomésticos",
        "descricao": "Máquina de café espresso automática com cápsulas."
    },
    {
        "nome": "Fritadeira Sem Óleo",
        "valor": 499.00,
        "quantidade_em_estoque": 20,
        "fabricante": "Philco",
        "categoria": "Eletrodomésticos",
        "descricao": "Fritadeira sem óleo com capacidade de 4 litros."
    },
    {
        "nome": "Panela de Pressão Elétrica",
        "valor": 349.00,
        "quantidade_em_estoque": 25,
        "fabricante": "Mondial",
        "categoria": "Eletrodomésticos",
        "descricao": "Panela de pressão elétrica com controle digital de temperatura."
    },
    {
        "nome": "Churrasqueira Elétrica",
        "valor": 299.00,
        "quantidade_em_estoque": 18,
        "fabricante": "Cadence",
        "categoria": "Eletrodomésticos",
        "descricao": "Churrasqueira elétrica portátil com grelha antiaderente."
    },
    {
        "nome": "Bicicleta Aro 29",
        "valor": 1499.00,
        "quantidade_em_estoque": 12,
        "fabricante": "Caloi",
        "categoria": "Esportes",
        "descricao": "Bicicleta aro 29 com suspensão dianteira e 21 marchas."
    },
    {
        "nome": "Smart Speaker",
        "valor": 249.90,
        "quantidade_em_estoque": 30,
        "fabricante": "Google",
        "categoria": "Eletrônicos",
        "descricao": "Assistente virtual com comando de voz e integração com outros dispositivos inteligentes."
    },
    {
        "nome": "Caixa de Som Bluetooth",
        "valor": 199.90,
        "quantidade_em_estoque": 40,
        "fabricante": "JBL",
        "categoria": "Eletrônicos",
        "descricao": "Caixa de som portátil à prova d'água com conexão Bluetooth."
    },
    {
        "nome": "Air Fryer",
        "valor": 499.00,
        "quantidade_em_estoque": 15,
        "fabricante": "Philco",
        "categoria": "Eletrodomésticos",
        "descricao": "Fritadeira elétrica sem óleo com capacidade de 5 litros."
    },
    {
        "nome": "Suporte de Celular para Carro",
        "valor": 39.90,
        "quantidade_em_estoque": 100,
        "fabricante": "TechGear",
        "categoria": "Acessórios",
        "descricao": "Suporte ajustável para smartphones, compatível com vários tamanhos."
    },
    {
        "nome": "Lâmpada Inteligente",
        "valor": 79.90,
        "quantidade_em_estoque": 50,
        "fabricante": "Xiaomi",
        "categoria": "Eletrônicos",
        "descricao": "Lâmpada inteligente com controle remoto via aplicativo e ajuste de cor."
    }    
]);
