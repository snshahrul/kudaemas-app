"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export function QRCode({ value, size = 120, className = "" }: QRCodeProps) {
  return (
    <div className={`inline-block ${className}`}>
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="#ffffff"
        fgColor="#1a2e1a"
        level="M"
        includeMargin={true}
        imageSettings={{
          src: "/icons/icon-192.png", // Your logo in the center
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
    </div>
  );
}