import React from "react";
import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CreditCardIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Logo from "assets/logo_text_1.png";
import Button1 from "components/Buttons/Button1/index";
import Web3Context from "contexts/Web3Context";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { Link } from "react-router-dom";
import NftKey from "assets/nftkey.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ transparent }) {
  const { onClickMetamask, account } = useContext(Web3Context);

  return (
    <Disclosure
      as="nav"
      style={{
        backgroundColor: transparent ? "rgba(0,0,0,0.45)" : "rgba(2,69,133,1)",
      }}
      className=" shadow font-bold "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex justify-between items-center h-24 mb-32">
              <h1 className="text-4xl text-white font-bold">EZ-Tools</h1>
              <div className="sm:ml-6 w-full sm:w-max justify-evenly flex sm:block items-center">
                {/* Profile dropdown */}
                <Button1
                  onClick={() => onClickMetamask()}
                  Icon={CreditCardIcon}
                >
                  <div className="text-sm">
                    {account
                      ? `${account?.slice(0, 3)}...${account.slice(-3)}`
                      : "Connect Wallet"}
                  </div>
                </Button1>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
