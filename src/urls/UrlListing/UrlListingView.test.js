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
      wrapper.update();
    });
    expect(wrapper.find('.zero-state')).toHaveLength(0);
    expect(wrapper.find('.url-listing')).toHaveLength(1);
    expect(wrapper.find('.url-listing').text()).toContain('onetwothree');
  });
});