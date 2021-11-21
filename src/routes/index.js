
const BeltRouter = require('./Belt');
const ClotheRouter = require('./Clothe');
const ShoeRouter = require('./Shoe');
const BoyRouter = require('./Boy');
const GirlRouter = require('./Girl');
const BaloRouter = require('./Balo');
const PerfumeRouter = require('./Perfume');
const hatRouter = require('./Hat');
const siteRouter = require('./Site')

function route(app) {

    app.use('/Belt', BeltRouter);
    app.use('/Clothe', ClotheRouter);
    app.use('/Shoe', ShoeRouter);
    app.use('/Boy', BoyRouter);
    app.use('/Girl', GirlRouter);
    app.use('/Balo', BaloRouter);
    app.use('/Perfume', PerfumeRouter);
    app.use('/hat', hatRouter);
    app.use('/', siteRouter);

}
module.exports = route;

