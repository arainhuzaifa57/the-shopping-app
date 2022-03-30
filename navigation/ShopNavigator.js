import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, View, SafeAreaView, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// Contants
import Colors from '../constants/Colors';
// Screens
import ProductsOverViewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';

// Screen Options
import { screenOptions as ProductsOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import { screenOptions as ProductDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import { screenOptions as OrdersScreenOptions } from '../screens/shop/OrdersScreen';
import { screenOptions as CartScreenOptions } from '../screens/shop/CartScreen';
import { screenOptions as UserProductOptions } from '../screens/user/UserProductsScreen';
import { screenOptions as EditProductOptions } from '../screens/user/EditProductScreen';
import { screenOptions as AuthScreenOptions } from '../screens/user/AuthScreen';

const ProductsStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const ProductsNavigator = () => (
  <ProductsStack.Navigator screenOptions={defaultNavStyle}>
    <ProductsStack.Screen
      name='All Products'
      component={ProductsOverViewScreen}
      options={ProductsOverviewScreenOptions}
    />
    <ProductsStack.Screen
      name='ProductsDetail'
      component={ProductDetailScreen}
      options={ProductDetailScreenOptions}
    />
    <ProductsStack.Screen name='Cart' component={CartScreen} options={CartScreenOptions} />
  </ProductsStack.Navigator>
);

const OrdersNavigator = () => (
  <OrdersStack.Navigator screenOptions={defaultNavStyle}>
    <OrdersStack.Screen name='Your Orders' component={OrdersScreen} options={OrdersScreenOptions} />
  </OrdersStack.Navigator>
);

const AdminNavigator = () => (
  <AdminStack.Navigator screenOptions={defaultNavStyle}>
    <AdminStack.Screen
      name='Your Products'
      component={UserProductsScreen}
      options={UserProductOptions}
    />
    <AdminStack.Screen name='Edit' component={EditProductScreen} options={EditProductOptions} />
  </AdminStack.Navigator>
);

const AuthNavigator = () => (
  <NavigationContainer>
    <AuthStack.Navigator screenOptions={defaultNavStyle}>
      <AdminStack.Screen name='Auth' component={AuthScreen} options={AuthScreenOptions} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

const ShopNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      // drawerContent={props =>{
      //   return (
      //     <View>
      //       <SafeAreaView>
      //         <DrawerItem {...props} />
      //         <Button title='Logout'  />
      //       </SafeAreaView>
      //     </View>
      //   )
      // }}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.primary,
        
      }}
    >
      <Drawer.Screen
        name='Products'
        component={ProductsNavigator}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={focused ? Colors.primary : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Orders'
        component={OrdersNavigator}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={focused ? Colors.primary : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Admin'
        component={AdminNavigator}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={focused ? Colors.primary : 'black'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default ShopNavigator;
