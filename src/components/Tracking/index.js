import React, {memo, useState} from 'react';
import {useEndpoint} from '../../hooks/useEndpoint';
import {Table} from 'react-bootstrap';
import styles from './styles.module.scss';
import Select from 'react-select';
import {states} from '../../helper/states';


export default memo(()=>{ 

    const [stateCode, setStateCode] = useState("ca")
    const {data, isLoading} = useEndpoint(stateCode);

    return( 
   <div className={styles.TestTable}> 
    <h3>Imperial College - School of Public Health :: Job Test</h3>

    {<Select options ={states} placeholder="Search states" onChange ={ e=> setStateCode(e.value) }/>}

    {isLoading ? "Loading ..." : ""}
  <Table striped bordered hover size ="sm">
  <thead>
  <tr>
  <th>Date</th>
  <th>Total cases</th>
  <th>New cases</th>
  <th>Total deaths</th>
  <th>New deaths</th>
  <th>Total recovered</th>
  <th>Recovered</th>
  <th>Total tests</th>
  </tr> 
  </thead>
  <tbody>
  
  { data.map((covid,key) =>
  <tr key ={key}>
  <td> {covid.date} </td>
  <td>{covid.positive} </td>
  <td> {covid.positiveIncrease} </td>
  <td> {covid.death} </td>
  <td> {covid.deathIncrease} </td>
  <td>{covid.negative}</td>
  <td>{covid.negativeIncrease}</td>
  <td>{covid.totalTestResults}</td>
  </tr> 
   )}

  </tbody>
  </Table>
   </div>
)})