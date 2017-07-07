import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson,  mountToJson} from 'enzyme-to-json';
import PayjpCheckout from '../src/payjp_checkout';

describe('PayjpCheckout', ()=>{
    test('renders correctly', ()=>{
        const payjpCheckoutProps = {
            // dataKey は各自の公開鍵に置き換えて下さい
            dataKey: 'pk_test_0383a1b8f91e8a6e3ea0e2a9',
            dataText: 'クレジットカードで支払う',
            dataPartial: 'true',
            onCreatedHandler: () => { console.log('onCreatedHandler'); },
            onFailedHandler: () => { console.log('onFailedHandler'); },
        }
        const tree = mountToJson(mount(
            <PayjpCheckout {...payjpCheckoutProps} />
        ));
        expect(tree).toMatchSnapshot();
    });
});
