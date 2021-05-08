import mongoose from 'mongoose'


const orderSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  email: {
    type: String,
    required: true,
    ref: 'User'
  },

  orderItems: [
    {
      name:{type: String, required: true},
      qty:{type: Number, required: true},
      image:{type: String, required: true},
      price:{type: Number, required: true},
      product:{type: mongoose.Schema.Type.ObjectId},
      required: true,
      ref: 'Product',
    }
  ],
  paymentResult:{
    id:{type: String},
    status:{type: String},
    update_Time: {type: String},
    email_adress: {type: String}
  },

  taxPrice:{
    type: number,
    required: true,
    default: 0.0
  },

  isPaid:{
    type: Boolean,
    required: true,
    default: false
  },

  PaidAt:{
    type: Date,
  },
  
  isDelivered:{
    type: boolean,
    required: true,
    default: false
  },
  ShippingPrice:{
    type: number,
    required: true,
    default: 0.0
  },
  
  totalPrice:{
    type: number,
    required: true,
    default: 0.0
  },
  paymentmethod:{
    type: String,
    required: true
  }
  ,paymentmethod:{
    type: String,
    required: true
  },
  paymentmethod:{
    type: String,
    required: true
  },
  shippingAdress:{
    address:{type:String, required:true},
    city:{type:String, required: true}
  },


  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
},
{
  timestamps: true
}
)


const Order = mongoose.model('Order', orderSchema)

export default Order;