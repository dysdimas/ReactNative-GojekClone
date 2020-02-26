import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail, ScanQRCode } from '../../containers/pages';


const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const OrdersStack = createStackNavigator(
    {
        Orders,
        OrderDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Orders'
    }
)

const ScanStack = createStackNavigator(
    {
        ScanQRCode,
    },
    {
        headerMode: 'none',
        initialRouteName: 'ScanQRCode'
    }
)


const Router = createSwitchNavigator(
    {
        HomeStack,
        OrdersStack,
        ScanStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
);

export default createAppContainer(Router);