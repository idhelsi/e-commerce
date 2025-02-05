import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {
    return (
         <Sheet> {/* sidebar */}
             <SheetTrigger> {/*Trigger funcionalidade de click */}
                <Button>
                    <RocketIcon className="mr-2" />
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                    <div className="flex flex-col gap-5 my-3">
                        ...
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between item-center text-sm">
                        <div className="">Subtotal:</div>
                        <div className="">...</div>
                    </div>

                    <Separator />

                    <div className="text-center">
                        <Button>Finalizar Compra</Button>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}