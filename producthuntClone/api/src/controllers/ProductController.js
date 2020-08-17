const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  // Rota de listagem
  async index(req, res){
    const { page = 1 } = req.query;

    const products = await Product.paginate(
      {}, { page, limit: 10}
    );

    return res.json(products);
  },

  // Rota de detalhes
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product)
  },

  // Rota de criação
  async store(req, res){
    const productInfo = req.body;

    const productCreate = await Product.create(productInfo);

    return res.json(productCreate);
  },

  // Rota de atualização
  async update(req, res) {
    const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, { new : true });


    return res.json(productUpdate);
  },

  // Rota de deletar
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send('Produto removido com sucesso');
  }
};