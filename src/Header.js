import React from "react";
import {
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLinks,
    EuiHeaderLogo,
    EuiHeaderSectionItem,
} from "@elastic/eui";
import PropTypes from "prop-types";

import Logo from "./images/JA-logo.ico";

const HeaderLink = ({ title }) => {
    const titleHref = () => {
        return "#" + title.toLowerCase().split(" ").join("-");
    };

    return <EuiHeaderLink href={titleHref()}>{title}</EuiHeaderLink>;
};

HeaderLink.propTypes = {
    title: PropTypes.string.isRequired,
};

const Header = ({ sections, className }) => {
    return (
        <EuiHeader className={className}>
            <EuiHeaderSectionItem border="right">
                <EuiHeaderLogo iconType={Logo} href="#">
                    Josiel Aponte
        </EuiHeaderLogo>
            </EuiHeaderSectionItem>

            <EuiHeaderLinks>
                {sections.map((section) => (
                    <HeaderLink title={section} key={section} />
                ))}
            </EuiHeaderLinks>
        </EuiHeader>
    );
};

Header.propTypes = {
    sections: PropTypes.array,
};

Header.defaultProps = {
    sections: [],
};

export default Header;