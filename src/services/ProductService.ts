import { number, parse, pipe, safeParse, string, transform } from "valibot"
import axios from "axios"
import { DraftProductSchema, ProductSchema, ProductsSchema, type Product } from "../types"
import { toBoolean } from "../utils"

type ProductData = {
    [k: string]: FormDataEntryValue
}

export const addProduct = async(data: ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        }else {
            throw new Error('Datos no válidos')
        }
    } catch (error) {
        console.log(error);
    }
}

export const getProducts = async() => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/products`
      const {data} = await axios(url)
      const result = safeParse(ProductsSchema, data.data)
      if(result.success) {
        return result.output
      }
    } catch (error) {
        throw new Error('Hubo un error')
    }
}

export const getProductById = async(id : Product['id']) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
      const {data} = await axios(url)
      const result = safeParse(ProductSchema, data.data)
      if(result.success) {
        return result.output
      }
    } catch (error) {
        throw new Error('Hubo un error')
    }
}

export const updateProduct = async(data : ProductData, id: Product['id']) => {
    try {
        
        const NumberScheme = pipe(string(), transform(Number), number() );

        const result = safeParse(ProductSchema, {
            id ,
            name: data.name,
            price: parse(NumberScheme, data.price),
            availability: toBoolean(data.availability.toString())
        })

        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, result.output)
        }
    } catch (error) {
        console.log(error);
    }
}