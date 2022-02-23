// material-ui
import logoDark from 'assets/images/logo-dark.svg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        <img src={logoDark} alt="SM" width="100" />
    );
};

export default Logo;
