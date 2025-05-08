import {useNavigate } from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsProps = {
    product: Product
}

export const ProductDetails = ({product}: ProductDetailsProps) => {

    const navigate = useNavigate()

    const isAvailable = product.availability

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Disponible' : 'No disponible'}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`/products/${product.id}/edit`)}
                        className="bg-indigo-600 text-white w-full p-2 font-bold uppercase text-xs text-center rounded-lg"
                    >
                        Editar</button>
                </div>
            </td>
        </tr>
    )
}
