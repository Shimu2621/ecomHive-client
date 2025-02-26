"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useSelector } from "react-redux";

function CartComp() {
  const cart = useSelector(
    (state: { cart: { items: any[] } }) => state.cart.items
  );
  console.log(cart);

  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/shopping-cart.png"
          alt="Crat Icon"
          width={30}
          height={30}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {cart?.map((item: any, index: number) => (
              <div key={item._id} className="flex justify-between items-center">
                <span>{index + 1}</span>
                <Image
                  src={item.thumbnail || "/logo/logo.png"}
                  alt="Product Photo"
                  height={64}
                  width={64}
                  className="mx-auto"
                />
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CartComp;
