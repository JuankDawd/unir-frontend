import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  IonIcon,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSearchbar,
  IonButton,

} from '@ionic/react';
import { pencilOutline } from 'ionicons/icons';
import { customerApi } from '../../Constants/customers';
import './Component.scss';


const CustomerList = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      filterData();
    }, [searchTerm, data]);
  
    const fetchData = async () => {
      try {
        const customers = await customerApi.getCustomers();
        setData(customers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const filterData = () => {
      const filtered = data.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    };
  
    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const goToNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    return (
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar
                value={searchTerm}
                onIonChange={(e) => setSearchTerm(e.detail.value)}
                placeholder="Buscar"
              ></IonSearchbar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo Electronico</th>
                    <th>Pedidos</th>
                    <th>Valor</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.totalOrders}</td>
                      <td>{customer.totalAmountSpent}</td>
                      <td>
                        <IonButton className="edit-button">
                          <IonIcon icon={pencilOutline} />
                        </IonButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                disabled={currentPage === 1}
                onClick={goToPreviousPage}
                className="pagination-button"
              >
                Previous
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                disabled={indexOfLastItem >= filteredData.length}
                onClick={goToNextPage}
                className="pagination-button"
              >
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  };
  export default CustomerList;