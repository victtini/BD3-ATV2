const database = 'BD3-avt2';
const collection = 'BD3_atv_produtos';

use(database); 
db[collection].find({
    valor: { $gte: 100, $lte: 1000 }
})