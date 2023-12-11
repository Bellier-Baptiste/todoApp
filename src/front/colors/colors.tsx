import { useState } from "react";

const Colors = () => {
    const [isDarkMode] = useState(true);

    // Navabr
    const navbarBackgroundColor = isDarkMode ? 'rgba(66, 66, 66, 1)' : 'transparent';
    const userLogoBackgroundColor = 'rgba(50, 50, 50, 1)';
    const inputBackgroundColor = 'white';
    const inputColor = 'black';

    // List Page
    const ticketColor = 'rgba(224, 224, 224, 0.72)';

    return { navbarBackgroundColor, userLogoBackgroundColor, inputBackgroundColor, inputColor, ticketColor};
};

export default Colors;
