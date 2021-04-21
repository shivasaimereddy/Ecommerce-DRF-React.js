import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import Loader from '../Loader'
import { getOrderDetails } from '../../actions/orderActions'


function OrderScreen({ match, history }) {
    const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(1)
    }

    useEffect(() => {

        if (!userInfo) {
            history.push('/login')
        }

        if (!order || order._id !== Number(orderId)) {

            dispatch(getOrderDetails(orderId))
        } else {
            console.log('error')
        }
    }, [dispatch, order, orderId, userInfo, history])


    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Message variant='info'>This functionality is under Development</Message>
    )
}

export default OrderScreen