"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  const cart = [
    {
      id: 1,
      totalQuantities: 3, // Example quantity, replace with actual cart data
    },
    
  ]

  return (
    <Link href="/cart" className="relative mr-[14px] p-1">
      <Image
        priority
        src="/icons/cart.svg"
        height={100}
        width={100}
        alt="cart"
        className="max-w-[22px] max-h-[22px]"
      />
      {cart && cart.totalQuantities > 0 && (
        <span className="border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
