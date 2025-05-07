import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Products, loader as productsLoader} from './views/Products'
import { action as newProductAction, NewProduct} from './views/NewProduct'



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products/>,
                loader: productsLoader
            },
            {
                path: 'products/new',
                element: <NewProduct/>,
                action: newProductAction
            }
        ]
    }
])