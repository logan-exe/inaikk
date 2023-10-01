import Image from "next/image";
import React from "react";
import LogoImage from "../app/Logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={LogoImage} width={150} height={50} alt="Logo img" />
    </Link>
  );
}

export default Logo;
