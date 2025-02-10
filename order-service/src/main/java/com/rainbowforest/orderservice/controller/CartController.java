package com.rainbowforest.orderservice.controller;

import com.rainbowforest.orderservice.http.header.HeaderGenerator;
import com.rainbowforest.orderservice.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

// @RestController
// public class CartController {

//     @Autowired
//     CartService cartService;
    
//     @Autowired
//     private HeaderGenerator headerGenerator;

//     @GetMapping (value = "/cart")
//     public ResponseEntity<List<Object>> getCart(@RequestHeader(value = "Cookie") String cartId){
//         List<Object> cart = cartService.getCart(cartId);
//         if(!cart.isEmpty()) {
//         	return new ResponseEntity<List<Object>>(
//         			cart,
//         			headerGenerator.getHeadersForSuccessGetMethod(),
//         			HttpStatus.OK);
//         }
//     	return new ResponseEntity<List<Object>>(
//     			headerGenerator.getHeadersForError(),
//     			HttpStatus.NOT_FOUND);  
//     }
// 	@PostMapping(value = "/cart", params = { "productId", "quantity" })
// 	public ResponseEntity<List<Object>> addItemToCart(
// 			@RequestParam("productId") Long productId,
// 			@RequestParam("quantity") Integer quantity,
// 			@RequestHeader(value = "Cookie") String cartId,
// 			HttpServletRequest request) {
// 		try {
// 			// Lấy giỏ hàng dựa trên cartId (String)
// 			List<Object> cart = cartService.getCart(cartId);
// 			if (cart != null) {
// 				if (cart.isEmpty()) {
// 					cartService.addItemToCart(cartId, productId, quantity);
// 				} else {
// 					if (cartService.checkIfItemIsExist(cartId, productId)) {
// 						cartService.changeItemQuantity(cartId, productId, quantity);
// 					} else {
// 						cartService.addItemToCart(cartId, productId, quantity);
// 					}
// 				}
// 				return new ResponseEntity<>(
// 						cart,
// 						headerGenerator.getHeadersForSuccessPostMethod(request, cartId),
// 						HttpStatus.CREATED);
// 			}
// 			return new ResponseEntity<>(
// 					headerGenerator.getHeadersForError(),
// 					HttpStatus.BAD_REQUEST);
// 		} catch (Exception ex) {
// 			return new ResponseEntity<>(
// 					headerGenerator.getHeadersForError(),
// 					HttpStatus.INTERNAL_SERVER_ERROR);
// 		}
// 	}
//     @DeleteMapping(value = "/cart", params = "productId")
//     public ResponseEntity<Void> removeItemFromCart(
//             @RequestParam("productId") Long productId,
//             @RequestHeader(value = "Cookie") String cartId){
//     	List<Object> cart = cartService.getCart(cartId);
//     	if(cart != null) {
//     		cartService.deleteItemFromCart(cartId, productId);
//             return new ResponseEntity<Void>(
//             		headerGenerator.getHeadersForSuccessGetMethod(),
//             		HttpStatus.OK);
//     	}
//         return new ResponseEntity<Void>(
//         		headerGenerator.getHeadersForError(),
//         		HttpStatus.NOT_FOUND);
//     }
// }
// @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true") // ✅ Allow frontend requests with credentials
@RestController
@RequestMapping("/cart") // ✅ Group all cart endpoints under `/cart`
public class CartController {

    @Autowired
    CartService cartService;
    
    @Autowired
    private HeaderGenerator headerGenerator;

    // ✅ Get Cart Using cartId as a Query Parameter
    @GetMapping
    public ResponseEntity<List<Object>> getCart(@RequestParam(value = "cartId", required = false) String cartId) {
        if (cartId == null || cartId.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // If no cartId, return 400
        }

        List<Object> cart = cartService.getCart(cartId);
        if (!cart.isEmpty()) {
            return new ResponseEntity<>(cart, headerGenerator.getHeadersForSuccessGetMethod(), HttpStatus.OK);
        }
        return new ResponseEntity<>(headerGenerator.getHeadersForError(), HttpStatus.NOT_FOUND);
    }

    @PostMapping(params = { "cartId", "productId", "quantity" })
    public ResponseEntity<List<Object>> addItemToCart(
            @RequestParam("cartId") String cartId, // ✅ Extract cartId from query
            @RequestParam("productId") Long productId,
            @RequestParam("quantity") Integer quantity,
            HttpServletRequest request) {
        try {
            List<Object> cart = cartService.getCart(cartId);
            if (cart != null) {
                if (cart.isEmpty()) {
                    cartService.addItemToCart(cartId, productId, quantity);
                } else {
                    if (cartService.checkIfItemIsExist(cartId, productId)) {
                        cartService.changeItemQuantity(cartId, productId, quantity);
                    } else {
                        cartService.addItemToCart(cartId, productId, quantity);
                    }
                }
                return new ResponseEntity<>(cart, headerGenerator.getHeadersForSuccessPostMethod(request, cartId), HttpStatus.CREATED);
            }
            return new ResponseEntity<>(headerGenerator.getHeadersForError(), HttpStatus.BAD_REQUEST);
        } catch (Exception ex) {
            return new ResponseEntity<>(headerGenerator.getHeadersForError(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ✅ Remove Item from Cart with cartId as Query Parameter
    @DeleteMapping(params = { "cartId", "productId" })
    public ResponseEntity<Void> removeItemFromCart(
            @RequestParam("cartId") String cartId, // ✅ Extract cartId from query
            @RequestParam("productId") Long productId) {
        if (cartId == null || cartId.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Object> cart = cartService.getCart(cartId);
        if (cart != null) {
            cartService.deleteItemFromCart(cartId, productId);
            return new ResponseEntity<>(headerGenerator.getHeadersForSuccessGetMethod(), HttpStatus.OK);
        }
        return new ResponseEntity<>(headerGenerator.getHeadersForError(), HttpStatus.NOT_FOUND);
    }
	@DeleteMapping(value = "/cart")
public ResponseEntity<Void> clearCart(@RequestParam("cartId") String cartId) {
    if (cartId == null || cartId.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    cartService.deleteCart(cartId); // ✅ Remove all items from Redis or Database
    return new ResponseEntity<>(HttpStatus.OK);
}

}
