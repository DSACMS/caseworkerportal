"use client";

import { useState, ReactNode, useEffect } from "react";
import styles from "./HeaderWrapper.module.css";
import {
  GovBanner,
  Header,
  Title,
  NavMenuButton,
  NavDropDownButton,
  PrimaryNav,
  Menu,
} from "@trussworks/react-uswds";
import Link from "next/link";

export default function HeaderWrapper() {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean[]>([false]);

  const onClick = (): void => setExpanded((prev) => !prev);

  const onToggle = (index: number): void => {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  const testMenuItems: ReactNode[] = [
    <Link href="/cbv-flow-invitations" key="cbv-invitations">CBV Invitations</Link>,
    <Link href="#linkTwo" key="simple-link-2">Simple link Two</Link>,
    <Link href="#linkOne" key="current-link">Current link</Link>,
    <Link href="#linkFour" key="simple-link-4">Another link</Link>,
  ];

  const testItemsMenu: ReactNode[] = [
    <Link href="/" key="home-link" className="usa-nav__link"><span>Home</span></Link>,
    <div key="dropdown-1">
      <NavDropDownButton
        menuId="testDropDownOne"
        label="Dropdown"
        isOpen={isOpen[0]}
        onToggle={() => onToggle(0)}
        isCurrent={true}
      />
      <Menu
        items={testMenuItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </div>,
  ];

  useEffect(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`) as HTMLElement | null;
    if (wrapper) {
      const defaultHeight = wrapper.offsetHeight;
      document.documentElement.style.setProperty("--default-wrapper-height", `${defaultHeight}px`);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <GovBanner />
      <Header basic={true} showMobileOverlay={expanded}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>IVAAS</Title>
            <NavMenuButton label="Menu" onClick={onClick} />
          </div>
          <PrimaryNav
            items={testItemsMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
          />
        </div>
      </Header>
    </div>
  );
}
