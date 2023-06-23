import React, { useEffect, useState } from 'react';
import { IonCheckbox, IonAvatar, IonButton, IonIcon, IonText, IonToolbar, IonButtons, IonTitle, IonHeader, IonContent } from '@ionic/react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { getInitials } from '../../Utils/get-initials';
import Scrollbar from '../ScrollBar/ScrollBar';
import { arrowForwardOutline, createOutline, trashOutline } from 'ionicons/icons';

export const CustomerListTable = (props) => {
  const {
    customers,
    customersCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    ...other
  } = props;
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  // Reset selected customers when customers change
  useEffect(() => {
    if (selectedCustomers.length) {
      setSelectedCustomers([]);
    }
  }, [customers]);

  const handleSelectAllCustomers = (event) => {
    setSelectedCustomers(event.target.checked ? customers.map((customer) => customer.id) : []);
  };

  const handleSelectOneCustomer = (event, customerId) => {
    if (!selectedCustomers.includes(customerId)) {
      setSelectedCustomers((prevSelected) => [...prevSelected, customerId]);
    } else {
      setSelectedCustomers((prevSelected) => prevSelected.filter((id) => id !== customerId));
    }
  };

  const enableBulkActions = selectedCustomers.length > 0;
  const selectedSomeCustomers = selectedCustomers.length > 0 && selectedCustomers.length < customers.length;
  const selectedAllCustomers = selectedCustomers.length === customers.length;

  return (
    <IonContent {...other}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonCheckbox
              checked={selectedAllCustomers}
              indeterminate={selectedSomeCustomers}
              onIonChange={handleSelectAllCustomers}
            />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton size="small" fill="clear" style={{ marginLeft: '0.5rem' }}>
              Delete
            </IonButton>
            <IonButton size="small" fill="clear" style={{ marginLeft: '0.5rem' }}>
              Edit
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Scrollbar>
        <table>
          <thead>
            <tr>
              <th>
                <IonCheckbox
                  checked={selectedAllCustomers}
                  indeterminate={selectedSomeCustomers}
                  onIonChange={handleSelectAllCustomers}
                />
              </th>
              <th>Nombre</th>
              <th>Localización</th>
              <th>Pedidos</th>
              <th>Costos</th>
              <th className="ion-text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              const isCustomerSelected = selectedCustomers.includes(customer.id);

              return (
                <tr key={customer.id} className={isCustomerSelected ? 'ion-selected' : ''}>
                  <td>
                    <IonCheckbox
                      checked={isCustomerSelected}
                      onIonChange={(event) => handleSelectOneCustomer(event, customer.id)}
                      value={isCustomerSelected}
                    />
                  </td>
                  <td>
                    <IonAvatar>
                      {getInitials(customer.name)}
                    </IonAvatar>
                    <Link to={`/dashboard/customers/${customer.id}`} className="ion-no-padding">
                      <IonText color="dark">
                        {customer.name}
                      </IonText>
                    </Link>
                    <IonText color="medium">
                      {customer.email}
                    </IonText>
                  </td>
                  <td>
                    {`${customer.city}, ${customer.state}, ${customer.country}`}
                  </td>
                  <td>
                    {customer.totalOrders}
                  </td>
                  <td>
                    <IonText color="success">
                      {numeral(customer.totalAmountSpent).format(`${customer.currency}0,0.00`)}
                    </IonText>
                  </td>
                  <td className="ion-text-end">
                    <Link to={`/dashboard/customers/${customer.id}/edit`}>
                      <IonIcon icon={createOutline} size="small" />
                    </Link>
                    <Link to={`/dashboard/customers/${customer.id}`}>
                      <IonIcon icon={arrowForwardOutline} size="small" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Scrollbar>
      <IonToolbar>
        <IonButtons slot="end">
          <IonTitle size="small" className="ion-padding-end">
            Rows per page:
          </IonTitle>
          <IonButtons>
            <IonButton size="small" fill="clear" disabled>{rowsPerPage}</IonButton>
          </IonButtons>
          <IonButtons>
            <IonButton size="small" fill="clear" onClick={() => onRowsPerPageChange(5)}>5</IonButton>
          </IonButtons>
          <IonButtons>
            <IonButton size="small" fill="clear" onClick={() => onRowsPerPageChange(10)}>10</IonButton>
          </IonButtons>
          <IonButtons>
            <IonButton size="small" fill="clear" onClick={() => onRowsPerPageChange(25)}>25</IonButton>
          </IonButtons>
        </IonButtons>
        <IonButtons slot="end">
          <IonTitle size="small" className="ion-padding-end">
            Page:
          </IonTitle>
          <IonButtons>
            <IonButton size="small" fill="clear" onClick={() => onPageChange(page - 1)} disabled={page === 0}>
              Prev
            </IonButton>
          </IonButtons>
          <IonButtons>
            <IonButton size="small" fill="clear" onClick={() => onPageChange(page + 1)} disabled={page >= Math.ceil(customersCount / rowsPerPage) - 1}>
              Next
            </IonButton>
          </IonButtons>
        </IonButtons>
      </IonToolbar>
    </IonContent>
  );
};

CustomerListTable.propTypes = {
  customers: PropTypes.array.isRequired,
  customersCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};