import { useCheckoutStore } from "@/store/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
import { generateMessage } from "@/lib/generate-message"

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state)

    const message = generateMessage();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso whatsApp para comcluir Nosso atendimento irá te guiar sobre o atendimento do pedido.</p>
            <Button>
                <Link target="_black" href={linkZap}>Envia para o WhatsApp</Link>
            </Button>
        </div>
    )
}