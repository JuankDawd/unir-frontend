import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  IonIcon,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
  IonSearchbar,
  IonList,
  IonButton,

} from '@ionic/react';
import { pencilOutline } from 'ionicons/icons';
import { customerApi } from '../../Constants/customers';
import { tabs, sortOptions } from '../../Constants/types';
import { CustomerListTable } from './List';
import { useMounted } from '../../Hook/useMounted';
import { searchOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import './Component.scss';

// const applyFilters = (customers, filters) => customers.filter((customer) => {
//   if (filters.query) {
//     let queryMatched = false;
//     const properties = ['email', 'name'];

//     properties.forEach((property) => {
//       if (customer[property].toLowerCase().includes(filters.query.toLowerCase())) {
//         queryMatched = true;
//       }
//     });

//     if (!queryMatched) {
//       return false;
//     }
//   }

//   if (filters.hasAcceptedMarketing && !customer.hasAcceptedMarketing) {
//     return false;
//   }

//   if (filters.isProspect && !customer.isProspect) {
//     return false;
//   }

//   if (filters.isReturning && !customer.isReturning) {
//     return false;
//   }

//   return true;
// });

// const descendingComparator = (a, b, sortBy) => {
//   if (b[sortBy] < a[sortBy]) {
//     return -1;
//   }

//   if (b[sortBy] > a[sortBy]) {
//     return 1;
//   }

//   return 0;
// };

// const getComparator = (sortDir, sortBy) => (sortDir === 'desc'
//   ? (a, b) => descendingComparator(a, b, sortBy)
//   : (a, b) => -descendingComparator(a, b, sortBy));

// const applySort = (customers, sort) => {
//   const [sortBy, sortDir] = sort.split('|');
//   const comparator = getComparator(sortDir, sortBy);
//   const stabilizedThis = customers.map((el, index) => [el, index]);

//   stabilizedThis.sort((a, b) => {
//     const newOrder = comparator(a[0], b[0]);

//     if (newOrder !== 0) {
//       return newOrder;
//     }

//     return a[1] - b[1];
//   });

//   return stabilizedThis.map((el) => el[0]);
// };

// const applyPagination = (customers, page, rowsPerPage) => customers.slice(page * rowsPerPage,
//   page * rowsPerPage + rowsPerPage);

// const CustomerList = () => {
//   const isMounted = useMounted();
//   const queryRef = useRef(null);
//   const [customers, setCustomers] = useState([]);
//   const [currentTab, setCurrentTab] = useState('all');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [sort, setSort] = useState(sortOptions[0].value);
//   const [filters, setFilters] = useState({
//     query: '',
//     hasAcceptedMarketing: undefined,
//     isProspect: undefined,
//     isReturning: undefined
//   });

//   const getCustomers = useCallback(async () => {
//     try {
//       const data = await customerApi.getCustomers();

//       if (isMounted()) {
//         setCustomers(data);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }, [isMounted]);

//   useEffect(() => {
//     getCustomers();
//   }, []);

//   const handleTabsChange = (value) => {
//     const updatedFilters = {
//       ...filters,
//       hasAcceptedMarketing: undefined,
//       isProspect: undefined,
//       isReturning: undefined
//     };

//     if (value !== 'all') {
//       updatedFilters[value] = true;
//     }

//     setFilters(updatedFilters);
//     setCurrentTab(value);
//   };

//   const handleQueryChange = (event) => {
//     event.preventDefault();
//     setFilters((prevState) => ({
//       ...prevState,
//       query: queryRef.current?.value
//     }));
//   };

//   const handleSortChange = (event) => {
//     setSort(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//   };

//   const filteredCustomers = applyFilters(customers, filters);
//   const sortedCustomers = applySort(filteredCustomers, sort);
//   const paginatedCustomers = applyPagination(sortedCustomers, page, rowsPerPage);

//   return (
//     <IonContent>
//         <IonCard>
//           <IonTabs onIonTabsDidChange={({ detail }) => handleTabsChange(detail.tab)}>
//           <IonRouterOutlet>
//           {/* <Redirect exact path="/" to="/tabs/todo" /> */}
//           {/* <Routes>
//             <Route path="/tabs/todo" component={Tab1} />
//             <Route path="/tabs/hasAcceptedMarketing" component={Tab2} />
//             <Route path="/tabs/isProspect" component={Tab3} />
//             <Route path="/tabs/isReturning" component={Tab4} />
//             </Routes> */}
//   </IonRouterOutlet>
            
//             <IonTabBar slot="top">
//               {tabs.map((tab) => (
//                 <IonTabButton key={tab.value} tab={tab.value}>
//                   <IonLabel>{tab.label}</IonLabel>
//                 </IonTabButton>
//               ))}
//             </IonTabBar>

//             <IonGrid>
//               <IonRow>
//                 <IonCol>
//                   <IonItem>
//                     <IonInput
//                       defaultValue=""
//                       placeholder="Buscar clientes"
//                       ref={queryRef}
//                       startAdornment={
//                         <IonLabel position="floating">
//                           <IonIcon icon={searchOutline} size="small" />
//                         </IonLabel>
//                       }
//                     ></IonInput>
//                   </IonItem>
//                 </IonCol>
//                 <IonCol>
//                   <IonItem>
//                     <IonLabel>Sort By</IonLabel>
//                     <IonSelect value={sort} onIonChange={handleSortChange}>
//                       {sortOptions.map((option) => (
//                         <IonSelectOption key={option.value} value={option.value}>
//                           {option.label}
//                         </IonSelectOption>
//                       ))}
//                     </IonSelect>
//                   </IonItem>
//                 </IonCol>
//               </IonRow>
//             </IonGrid>
//           </IonTabs>

//           <CustomerListTable
//             customers={paginatedCustomers}
//             customersCount={filteredCustomers.length}
//             onPageChange={handlePageChange}
//             onRowsPerPageChange={handleRowsPerPageChange}
//             rowsPerPage={rowsPerPage}
//             page={page}
//           />
//         </IonCard>
//     </IonContent>
//   );
// };

// export default CustomerList;

const CustomerList = () => {
    const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const customers = await customerApi.getCustomers();
      setData(customers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Total Orders</th>
                  <th>Total Amount Spent</th>
                  <th>Actions</th>
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
              disabled={indexOfLastItem >= data.length}
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