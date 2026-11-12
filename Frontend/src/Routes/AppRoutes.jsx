import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
const Home = lazy(() => new Promise(resolve =>
      setTimeout(() => resolve(import("../Pages/Home")), 3000)
))
const Menu = lazy(() => import('../features/menu/pages/Menu'))
const Venu = lazy(() => import('../Pages/Venu'))
const Contact = lazy(() => import('../Pages/Contact'))
const About = lazy(() => import('../Pages/About'))
const Booking = lazy(() => import('../Pages/Booking'))
const Dashboard = lazy(() => import('../Layout/DashboardLayout'))
const Dashboardadmin = lazy(() => import('../admin/Dashboard'))
const ManageMenu = lazy(() => import('../admin/ManageMenu'))
const AddMenu = lazy(() => import('../admin/AddMenu'))
const EditMenu = lazy(() => import('../admin/EditMenu'))
const ReservationTable = lazy(() => import('../admin/Reservation/ReservationTable'))
const AuthenticationLayout = lazy(() => import('../Layout/AuthenticationLayout'))
const Login = lazy(() => import('../Auth/Login'))
const Signup = lazy(() => import('../Auth/Signup'))
import Loader from '../utils/Loader'
import ProtectedRoutes from '../Components/ProtectedRoutes'
const Cart = lazy(() => import('../features/cart/pages/Cart'))
const FoodDetail = lazy(() => import('../features/productDetail/pages/FoodDetail'))
const NotFound = lazy(() => import('../Pages/NotFound'))
const Checkout = lazy(() => import('../features/checkout/pages/Checkout'))
const AppRoutes = () => {
      return (
            <Suspense fallback={<Loader />}>
                  <Routes>
                        <Route element={<ProtectedRoutes />}>
                              <Route path='/checkout' element={<Checkout />} />
                        </Route>
                        <Route element={<MainLayout />}>
                              <Route path='/' element={<Home />} />
                              <Route path='/Menu' element={<Menu />} />
                              <Route path='/Venue' element={<Venu />} />
                              <Route path='/Contact' element={<Contact />} />
                              <Route path='/About' element={<About />} />
                              <Route path='/Booking' element={<Booking />} />
                              <Route path='/menu/product/:itemId' element={<FoodDetail />} />
                              <Route path='/cart' element={<Cart />} />
                        </Route>
                        <Route element={<AuthenticationLayout />}>
                              <Route path='/Login' element={<Login />} />
                              <Route path='/sign-in' element={<Signup />} />
                        </Route>
                        <Route element={<Dashboard />}>
                              <Route path='/admin/dashboard' element={<Dashboardadmin />} />
                              <Route path='/admin/manage-menu' element={<ManageMenu />} />
                              <Route path='/admin/add-item' element={<AddMenu />} />
                              <Route path='/admin/manage-menu/:itemId/edit' element={<EditMenu />} />
                              <Route path='/admin/reservation' element={<ReservationTable />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                  </Routes>

            </Suspense>
      )
}

export default AppRoutes