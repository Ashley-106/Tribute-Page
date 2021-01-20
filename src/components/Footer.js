import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
    }

    returnToTop() {
        window.scrollTo(0,0);
    }

    render() {
        return <footer>
                    <div className="r-top" onClick={this.returnToTop}>
                    <h4>Return<br></br>Top</h4>
                    </div>
                </footer>;
    }
    
};

export default Footer;