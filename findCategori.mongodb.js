const database = 'BD3-avt2';
const collection = 'BD3_atv_produtos';

use(database); 
db[collection].find({
    categoria: "Eletrônicos"
})