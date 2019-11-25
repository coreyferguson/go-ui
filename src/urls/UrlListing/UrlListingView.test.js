import { act } from 'react-test-renderer';
import { shallow } from '../../../test/TestUtils';
import React, { useEffect } from 'react';
import urlService from '../urlService';
import View from './UrlListingView.jsx';

jest.mock('../urlService');

describe('UrlListingView', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('attempt to list urls by default', () => {
    jest.spyOn(React, 'useEffect')
      .mockImplementationOnce(f => f())
      .mockImplementationOnce(f => {});
    const listUrls = jest.spyOn(urlService, 'listUrls').mockImplementation(() => Promise.resolve());
    act(() => { shallow(<View />) });
    expect(listUrls).toHaveBeenCalled();
  });

  test('show zero state when no urls have been created', () => {
    jest.spyOn(React, 'useEffect')
      .mockImplementationOnce(f => f())
      .mockImplementationOnce(f => {});
    jest.spyOn(urlService, 'listUrls').mockImplementation(() => Promise.resolve({
      items: [],
      hasNext: false,
      next: undefined
    }));
    let wrapper;
    act(() => { wrapper = shallow(<View />) });
    expect(wrapper.find('.zero-state')).toHaveLength(1);
  });

  test('show url listing when urls have previously been created', async () => {
    jest.spyOn(React, 'useEffect')
      .mockImplementationOnce(f => f())
      .mockImplementationOnce(f => {});
    jest.spyOn(urlService, 'listUrls').mockImplementation(() => Promise.resolve({
      items: ['one', 'two', 'three'],
      hasNext: false,
      next: undefined
    }));
    let wrapper;
    await act(async () => {
      wrapper = shallow(<View />)
    });
    expect(wrapper.find('.zero-state')).toHaveLength(0);
    expect(wrapper.find('.url-listing')).toHaveLength(1);
    expect(wrapper.find('.url-listing').text()).toContain('onetwothree');
  });

  test('submit form', async () => {
    const saveUrl = jest.spyOn(urlService, 'saveUrl');
    jest.spyOn(React, 'useRef')
      .mockImplementationOnce(() => ({ current: { value: 'refVanityValue', focus: () => {} } }))
      .mockImplementationOnce(() => ({ current: { value: 'refUrlValue', focus: () => {} } }));
    let wrapper;
    global.navigator.permissions = { query: jest.fn(() => Promise.resolve({ state: 'granted' })) };
    global.navigator.clipboard = { writeText: jest.fn(() => Promise.resolve()) };
    global.window.alert = jest.fn();
    const formReset = jest.fn();
    await act(async () => {
      wrapper = shallow(<View />);
      wrapper.find('.create-url').simulate('submit', {
        preventDefault: () => {},
        target: { reset: formReset }
      });
    });
    expect(saveUrl).toHaveBeenCalled();
    expect(formReset).toHaveBeenCalled();
    expect(global.navigator.clipboard.writeText).toHaveBeenCalled();
    expect(global.window.alert).toHaveBeenCalled();
    expect(wrapper.find('.url-listing').text()).toBe('refVanityValue');
  });

  test('save a new url', async () => {
    jest.spyOn(React, 'useRef')
      .mockImplementationOnce(() => ({ current: { value: 'refVanityValue', focus: () => {} } }))
      .mockImplementationOnce(() => ({ current: { value: 'refUrlValue', focus: () => {} } }));
    const setUrls = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [ { items: [ 'existingItem' ] }, setUrls ]);
    await act(async () => {
      const wrapper = shallow(<View />);
      wrapper.find('.create-url').simulate('submit', {
        preventDefault: () => {},
        target: { reset: () => {} }
      });
    });
    expect(setUrls).toHaveBeenCalledWith({ items: [ 'refVanityValue', 'existingItem' ] });
  });

  test('save an existing url', async () => {
    jest.spyOn(React, 'useRef')
      .mockImplementationOnce(() => ({ current: { value: 'existingItem', focus: () => {} } }))
      .mockImplementationOnce(() => ({ current: { value: 'refUrlValue', focus: () => {} } }));
    const setUrls = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [ { items: [ 'existingItem' ] }, setUrls ]);
    await act(async () => {
      const wrapper = shallow(<View />);
      wrapper.find('.create-url').simulate('submit', {
        preventDefault: () => {},
        target: { reset: () => {} }
      });
    });
    expect(setUrls).not.toHaveBeenCalled();
  });
});