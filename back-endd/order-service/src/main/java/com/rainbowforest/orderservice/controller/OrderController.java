package com.rainbowforest.orderservice.controller;

import com.rainbowforest.orderservice.domain.Item;
import com.rainbowforest.orderservice.domain.Order;
import com.rainbowforest.orderservice.domain.User;
import com.rainbowforest.orderservice.feignclient.UserClient;
import com.rainbowforest.orderservice.http.header.HeaderGenerator;
import com.rainbowforest.orderservice.service.CartService;
import com.rainbowforest.orderservice.service.OrderService;
import com.rainbowforest.orderservice.utilities.OrderUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

@RestController
public class OrderController {

    @Autowired
    private UserClient userClient;

    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;

    @Autowired
    private HeaderGenerator headerGenerator;
    
    @PostMapping(value = "/order/{userId}")
public ResponseEntity<Order> saveOrder(
        @PathVariable("userId") Long userId,
        @RequestParam(value = "cartId", required = false) String cartId, // ✅ Get cartId from request parameter
        HttpServletRequest request) {

    if (cartId == null) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // If no cartId, return 400
    }

    List<Item> cart = cartService.getAllItemsFromCart(cartId);
    User user = userClient.getUserById(userId);

    if (cart != null && !cart.isEmpty() && user != null) {
        Order order = this.createOrder(cart, user);
        try {
            orderService.saveOrder(order);
            cartService.deleteCart(cartId);
            return new ResponseEntity<>(
                    order, 
                    headerGenerator.getHeadersForSuccessPostMethodForOrder(request, order.getId()),
                    HttpStatus.CREATED);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(headerGenerator.getHeadersForError(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    return new ResponseEntity<>(headerGenerator.getHeadersForError(), HttpStatus.NOT_FOUND);
}


    
    private Order createOrder(List<Item> cart, User user) {
        Order order = new Order();
        order.setItems(cart);
        order.setUser(user);
        order.setTotal(OrderUtilities.countTotalPrice(cart));
        order.setOrderedDate(LocalDate.now());
        order.setStatus("PAYMENT_EXPECTED");
        return order;
    }
}
