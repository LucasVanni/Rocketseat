// Produto que será disponibilizado na plataforma.

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

ProductSchema.plugin(mongoosePaginate);

// Registra um model na aplicação
mongoose.model('Product', ProductSchema);