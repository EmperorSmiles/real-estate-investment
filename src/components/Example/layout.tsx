// import React from "react";

// interface Props {
//     items?: object;
//     selected?: undefined;
//     onSelect?: string;
// }

// const Multiselect = ({ items, selected, onSelect }: Props) => {
//     const [isOpen, setIsOpen] = React.useState(false);

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleSelectItem = (item: object) => {
//         onSelect(item);
//     };

//     return (
//         <div>
//             <div onClick={handleToggle}>
//                 {selected.length > 0 ? selected.join(", ") : "Select items"}
//             </div>
//             {isOpen && (
//                 <div>
//                     {items.map((item) => (
//                         <div key={item.value}>
//                             <input
//                                 type="checkbox"
//                                 id={item.value}
//                                 checked={selected.includes(item.value)}
//                                 onChange={() => handleSelectItem(item.value)}
//                             />
//                             <label htmlFor={item.value}>{item.label}</label>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const Component = () => {
//     const [items, setItems] = React.useState([]);
//     const [selected, setSelected] = React.useState([]);

//     React.useEffect(() => {
//         setItems([
//             { label: "d", value: "d" },
//             { label: "a", value: "a" },
//             { label: "b", value: "b" },
//             { label: "c", value: "c" },
//         ]);
//     }, []);

//     const handleSelect = (value) => {
//         const updatedSelected = selected.includes(value)
//             ? selected.filter((item) => item !== value)
//             : [...selected, value];

//         setSelected(updatedSelected);
//     };

//     return (
//         <div className="container">
//             <Multiselect
//                 items={items}
//                 selected={selected}
//                 onSelect={handleSelect}
//             />
//         </div>
//     );
// };

// ReactDOM.render(<Component />, document.querySelector("#app"));

// export default Multiselect;

// const generateOrderSummary = ({ orders, products, users }) => {
//     const userLookup = users.reduce((acc, user) => {
//         acc[user.id] = user;
//         return acc;
//     }, {});

//     const productLookup = products.reduce((acc, product) => {
//         acc[product.id] = product;
//         return acc;
//     }, {});

//     const orderSummary = orders.map((order) => {
//         const user = userLookup[order.userId];
//         const product = productLookup[order.productId];
//         const total = order.quantity * product.price;

//         return {
//             orderId: order.id,
//             user,
//             product,
//             total,
//         };
//     });

//The time complexity of the provided solution is O(n ^ 2) because for each order, it iterated over the users array and the products array to find the corresponding user and product.

//The optimized solution fixed this to make it O(n). I created a lookup tables for users and products based on their ids. Now, it iterates over the users and products arrays only once to create lookup tables, and then directly accesses the user and product from the tables in O(1) time for each order, resulting in an overall time complexity of O(n).

//     return orderSummary;
// };

.container {
  width: 300px;
}

button {
//   margin: 50px;
//   width: 300px;
//   height: 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-image: linear-gradient(to right,#1D2671,#C33764,#8E2DE2 100%);
  background-size: 200%;
  background-position: left;
  transition: ease-in-out 0.6s background-position;
}

// button:hover {
//   background-position: right;
//   cursor: pointer
// }
