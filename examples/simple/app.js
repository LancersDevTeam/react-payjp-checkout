// @flow
import React, { Component } from 'react';
import PayjpCheckout from '../../src/payjp_checkout';

class App extends Component {

    render() {
        const payjpCheckoutProps = {
            // dataKey は各自の公開鍵に置き換えて下さい
            dataKey: 'pk_test_0383a1b8f91e8a6e3ea0e2a9',
            dataText: 'クレジットカードで支払う',
            dataPartial: 'true',
            onCreatedHandler: () => { console.log('onCreatedHandler'); },
            onFailedHandler: (payload) => { console.log('onFailedHandler', payload && payload.message) },
        }
        return (
            <PayjpCheckout {...payjpCheckoutProps} />
        )
    }
}

export default App;
