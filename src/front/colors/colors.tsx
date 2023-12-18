const Colors = () => {

    // DARK MODE
    const dark = 'black';
    // Navabr
    const darkNavbarBackgroundColor = 'rgba(51, 51, 51, 1)';
    const darkUserLogoBackgroundColor = 'rgba(50, 50, 50, 1)';
    const darkInputBackgroundColor = 'rgba(106, 104, 104, 1)';
    const darkInputColor = 'black';
    const darkModeLogo = 'white';

    // List Page
    const darkTicketColor = 'rgba(224, 224, 224, 0.72)';
    const darkDisplayModeSpan = 'rgba(75, 75, 75, 1)';
    const darkAddButtonColor = 'black';


    /*
    Dark Mode Colors:
    Background: #1E1E1E (Dark Gray), Text: #FFFFFF (White)
    Background: rgba(30, 30, 30, 1), Text: rgba(255, 255, 255, 1)
    Background: #2D2D2D (Slightly Darker Gray), Text: #E0E0E0 (Light Gray)
    Background: rgba(45, 45, 45, 1), Text: rgba(224, 224, 224, 1)
    Background: #121212 (Black), Text: #F5F5F5 (Light Gray)
    Background: rgba(18, 18, 18, 1), Text: rgba(245, 245, 245, 1)
    Background: #303030 (Dark Charcoal), Text: #CCCCCC (Silver)
    Background: rgba(48, 48, 48, 1), Text: rgba(204, 204, 204, 1)
    Background: #262626 (Dark Slate Gray), Text: #D9D9D9 (Light Gray)
    Background: rgba(38, 38, 38, 1), Text: rgba(217, 217, 217, 1)
    */


    // LIGHT MODE
    const light = 'white';
    // Navbar
    const lightNavbarBackgroundColor = 'white';
    const lightInputBackgroundColor = 'rgba(216, 216, 216, 1)';
    const lightModeLogo = 'black';

    // List Page


    /*
    Light Mode Colors:
    Background: #FFFFFF (White), Text: #333333 (Dark Gray)
    Background: rgba(255, 255, 255, 1), Text: rgba(51, 51, 51, 1)
    Background: #F0F0F0 (Light Gray), Text: #333333 (Dark Gray)
    Background: rgba(240, 240, 240, 1), Text: rgba(51, 51, 51, 1)
    Background: #F8F8F8 (Lighter Gray), Text: #555555 (Gray)
    Background: rgba(248, 248, 248, 1), Text: rgba(85, 85, 85, 1)
    Background: #EFEFEF (Off-White), Text: #333333 (Dark Gray)
    Background: rgba(239, 239, 239, 1), Text: rgba(51, 51, 51, 1)
    Background: #CCCCCC (Silver), Text: #333333 (Dark Gray)
    Background: rgba(204, 204, 204, 1), Text: rgba(51, 51, 51, 1)
    */

    return { dark, darkNavbarBackgroundColor, darkUserLogoBackgroundColor, darkInputBackgroundColor, darkInputColor, darkModeLogo,
        darkTicketColor, darkDisplayModeSpan, darkAddButtonColor,
        light, lightNavbarBackgroundColor, lightInputBackgroundColor, lightModeLogo};
};

export default Colors;
