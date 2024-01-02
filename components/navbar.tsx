import WalletMultiButton from "./wallet-multi-button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import SolanaLogo from "../public/solanaLogo.svg";

import SignIn from "@/app/oauth/components/signin";
import SignOut from "@/app/oauth/components/signout";
import Login from "@/app/oauth/components/login";

export function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image src={SolanaLogo} alt="Solana Logo" width={100} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <Tooltip placeholder="bottom" content="Devnet Only">
          <NavbarItem>
            <WalletMultiButton />
          </NavbarItem>
        </Tooltip>
        <NavbarItem>
          {/* <SignIn />
          <SignOut /> */}
          <Login />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
