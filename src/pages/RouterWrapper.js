import { Outlet } from "react-router-dom";
import Header from "../components/Header/"
import Footer from "../components/Footer/"
import CartDrawer from '../components/CartDrawer';
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/authSlice";



function RouterWrapper() {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(!authUser) return dispatch(updateUser(null));
            dispatch(updateUser({
                ...authUser?.providerData[0]
            }));
        })
        return () => {
            unsubscribe()
        }
    }, [dispatch]);


    return (
        <>
            <Header />
                <Outlet />

            <Footer />
            <CartDrawer />

        </>
    )
}

export default RouterWrapper