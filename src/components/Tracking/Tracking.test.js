import React from 'react'
import { render, screen, wait, cleanup } from '@testing-library/react';
import { Tracking } from '../index';
import {useEndpoint} from '../../hooks/useEndpoint';



test('test if data is loading', () =>{
    const {getByText} = render(<Tracking/>);
    expect(screen.getByText("Loading ...")).toBeTruthy();

});

test('Tracking page should include table headers and text heading', ()=>{
    const {getByText} = render(<Tracking/>);
    expect(getByText('Imperial College - School of Public Health :: Job Test')).toBeInTheDocument();

    expect(screen.getByText("Date")).toBeTruthy();
    expect(screen.getByText("Total cases")).toBeTruthy();
    expect(screen.getByText("New cases")).toBeTruthy();
    expect(screen.getByText("Total deaths")).toBeTruthy();
    expect(screen.getByText("New deaths")).toBeTruthy();
    expect(screen.getByText("Total recovered")).toBeTruthy();
    expect(screen.getByText("Recovered")).toBeTruthy();
    expect(screen.getByText("Total tests")).toBeTruthy();
    
})





