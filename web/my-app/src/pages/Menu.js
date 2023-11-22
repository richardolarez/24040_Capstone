import React from 'react';

const Menu = () => {
    return (
        <div>
            <body>
            {/* <h1>Home / Electrical Diagram View</h1> */}
            <h2 class="banner">
                Home / Electrical Diagram View
            </h2>
            <div>
                <img src='png_1.png' alt= "Electrical Diagram" width="500" height="500"/>
            </div>
                <input class="button" type="submit" value="Logout" onclick="window.location.href='index.html'"/>
            </body>
        </div>
    );
};

export default Menu;
