"use client";

import styles from "./footer.module.css";
import { Footer } from "@trussworks/react-uswds";
import { ReactNode  } from "react";
import Link from "next/link";

const primaryContent = {
    mainLinks: [
        {
            name: "home",
            href: "/"
        },
        {
            name: "cbv-flow-invitations",
            href: "/cbv-flow-invitations",
        }
    ]
}
const primaryNode: ReactNode =  (
    <div className={styles.primaryWrapper}>
        {primaryContent.mainLinks && (
            primaryContent.mainLinks.map((link, linkIndex) => (
                    <Link href={link.href} key={linkIndex} className={`${styles.primaryLinkWrapper} bg-primary`}>{link.name}  </Link>
            ))
        )}
    </div>
);

const secondaryNode: ReactNode = (
    <div className={styles.secondaryWrapper}>IVAAS</div>
)

export default function FooterWrapper() {
    return (
        <div className={styles.wrapper}>
            <Footer size="medium" primary={primaryNode} secondary={secondaryNode}/>
        </div>
    )
}