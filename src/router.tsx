import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { action as updateAvailabilityAction, Products, loader as productsLoader} from './views/Products'
import { action as newProductAction, NewProduct} from './views/NewProduct'
import { EditProduct , loader as EditProductLoader, action as ediProductAction} from './views/EditProduct'
import { action as deleteProductACtion} from './components/ProductDetails'



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products/>,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'products/new',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'products/:id/edit', // ROA Pattern -- investirgar
                element: <EditProduct/>,
                loader: EditProductLoader,
                action: ediProductAction
            },
            {
                path: 'products/:id/eliminar',
                action: deleteProductACtion
            }
        ]
    }
])