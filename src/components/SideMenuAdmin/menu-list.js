import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 1,
        label: 'Listar Produtos',
        link: paths.ListProducts,
        icon: AssignmentIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    }
]

export default listLinks
