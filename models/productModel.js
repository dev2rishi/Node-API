import { Schema, model } from 'mongoose'

const productSchema = Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter a product name"]
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        default: 0
      },
      price: {
        type: Number,
        required: [true,"Price must be provided"]
      },
      image: {
        type: String,
        required: [true, "Image of product is required"]
      }
    },
    {
        timestamps: true
    }
)

const Product = model('Product', productSchema)

export default Product
