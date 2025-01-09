import React from 'react';
import { useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'


const CartTab = () => {
    const newLocal = useState([]);
    const [cartItems, setCartItems] = newLocal;

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    return (
        <div>
            <Typography variant="h4">Shopping Cart</Typography>
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.name} secondary={`Price: $${item.price}`} />
                        <Button variant="contained" color="secondary" onClick={() => removeItemFromCart(index)}>
                            Remove
                        </Button>
                    </ListItem>
                ))}
            </List>
            <Button
                variant="contained"
                color="primary"
                onClick={() => addItemToCart({ name: 'Sample Item', price: 10 })}
            >
                Add Sample Item
            </Button>
        </div>
    );
};

export default CartTab;