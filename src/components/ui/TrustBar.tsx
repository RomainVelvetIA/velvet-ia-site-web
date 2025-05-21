"use client";

import React from "react";
import Image from "next/image";

export function TrustBar() {
  return (
    <div className="py-16 md:py-24 bg-black">
      <div className="flex items-center justify-center rounded-full border border-border bg-background p-1 shadow shadow-black/5 max-w-md mx-auto">
        <div className="flex -space-x-1.5">
          <Image
            className="rounded-full ring-1 ring-background"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=80"
            width={20}
            height={20}
            alt="Avatar 01"
          />
          <Image
            className="rounded-full ring-1 ring-background"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format&q=80"
            width={20}
            height={20}
            alt="Avatar 02"
          />
          <Image
            className="rounded-full ring-1 ring-background"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&auto=format&q=80"
            width={20}
            height={20}
            alt="Avatar 03"
          />
          <Image
            className="rounded-full ring-1 ring-background"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=faces&auto=format&q=80"
            width={20}
            height={20}
            alt="Avatar 04"
          />
        </div>
        <p className="px-2 text-xs text-muted-foreground">
          <strong className="font-medium text-foreground">+20</strong> agents vocaux fonctionnels
        </p>
      </div>
    </div>
  );
} 