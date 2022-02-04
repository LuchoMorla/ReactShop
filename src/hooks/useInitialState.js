import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (productOr_payload) => {
        setState({
            ...state,
            cart: [...state.cart, productOr_payload]
        });
    };

    const removeFromCart = (productOr_payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== productOr_payload.id),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;
