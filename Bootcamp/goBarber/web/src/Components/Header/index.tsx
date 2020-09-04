import React from 'react';

interface HeaderDTO {
    headerText: string;
}

const Header: React.FC<HeaderDTO> = ({ headerText }: HeaderDTO) => (
    <h1>{headerText}</h1>
);

export default Header;
