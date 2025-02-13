import { useCartStore } from "@/store/cart-store";
import { useCheckoutStore } from "@/store/checkout-store"

export const generateMessage = () => {
    const { name, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state)

    let orderProducts = []
    for (let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`)
    }
    
    return `**Dadis do cliente:**
Nome: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
--------
**Pedido:**
${orderProducts.join("\n")}`;
}