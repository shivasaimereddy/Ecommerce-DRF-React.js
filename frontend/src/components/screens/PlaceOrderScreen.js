import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../FormContainer";
import Message from "../Message";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from '../../actions/orderActions'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'

function PlaceOrderScreen({ history }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(1)
    cart.shippingPrice = (cart.itemsPrice > 5000 ? 0 : 100).toFixed(1)
    cart.taxPrice = ((0.18) * cart.itemsPrice).toFixed(1)

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(1)

    if (!cart.paymentMethod) {
        history.push('/payment')
    }

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
        console.log("Place Order")
    }


    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <Message variant='info'> This Functionality has bugs to be fixed </Message>
        </div>
    )
}

export default PlaceOrderScreen
