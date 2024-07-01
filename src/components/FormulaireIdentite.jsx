// import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import states from "../data/states.json";
import status from "../data/statusEmployee.json";
import { addEmployee } from "../store/employeeSlice";
import DatesPicker from "./DatesPicker";
import Dropdown from "./Dropdown";
import Input from "./Input";
import { NumberInput } from "./NumberInput";

function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const employees = useSelector((state) => state.employees);
  console.log(value);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    zipcode: 0,
    statsSelection: "",
    depSelection: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      ...formData,
      dateOfBirth: formData.dateOfBirth?.format("DD-MM-YYYY"),
      startDate: formData.startDate?.format("DD-MM-YYYY"),
    };
    dispatch(addEmployee(newPerson));
    console.log(employees);
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      zipcode: 0,
      statsSelection: "",
      depSelection: "",
    });
  };

  const handleStatsSelection = (selectedItem) => {
    setFormData({
      ...formData,
      statsSelection: selectedItem,
    });
  };

  const handleDepSelection = (selectedItem) => {
    setFormData({
      ...formData,
      depSelection: selectedItem,
    });
  };

  const handleChangeDate = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-6" noValidate>
        <div className="flex flex-col">
          <Input
            label="FirstName"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <Input
            label="LastName"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <DatesPicker
          func={(value) => handleChangeDate("dateOfBirth", value)}
          formData={formData}
          name="Date Of Birth"
          val="dateOfBirth"
        />
        <DatesPicker
          func={(value) => handleChangeDate("startDate", value)}
          formData={formData}
          name="Start Date"
          val="startDate"
        />

        <div className="flex flex-col border p-5">
          <p>Adresse</p>
          <Input
            label="Street"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <Input
            label="City"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <Dropdown
            buttonLabel="Stats"
            tabData={states.map((state) => ({
              label: state.name,
              value: state.abbreviation,
            }))}
            onSelect={handleStatsSelection}
          />
          <label htmlFor="zipcode">Zip Code</label>
          <NumberInput
            aria-label="Demo number input"
            placeholder="Type a number…"
            value={formData.zipcode}
            name="zipcode"
            onChange={(event, val) => {
              setValue(val);
              setFormData({
                ...formData,
                zipcode: val,
              });
            }}
          />
        </div>

        <Dropdown
          buttonLabel="Dep"
          tabData={status.map((statu) => ({
            label: statu.label,
            value: statu.label,
          }))}
          onSelect={handleDepSelection}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

// // import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
// import * as React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import states from "../data/states.json";
// import status from "../data/statusEmployee.json";
// import { addEmployee } from "../store/employeeSlice";
// import DatesPicker from "./DatesPicker";
// import Dropdown from "./Dropdown";
// import Input from "./Input";
// import { NumberInput } from "./NumberInput";

// function Form() {
//   const dispatch = useDispatch();
//   const [value, setValue] = React.useState(0);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: null,
//     startDate: null,
//     street: "",
//     city: "",
//     zipcode: 0,
//     statsSelection: "",
//     depSelection: "",
//   });

//   //valeur de zipcode
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPerson = {
//       ...formData,
//       //tranformation date pour avoir le format souhaité
//       dateOfBirth: formData.dateOfBirth?.format("DD-MM-YYYY"),
//       startDate: formData.startDate?.format("DD-MM-YYYY"),
//     };
//     dispatch(addEmployee(newPerson));
//     setFormData({
//       firstName: "",
//       lastName: "",
//       dateOfBirth: null,
//       startDate: null,
//       street: "",
//       city: "",
//       zipcode: 0,
//       statsSelection: "",
//       depSelection: "",
//     });
//   };

//   const handleStatsSelection = (selectedItem) => {
//     setFormData({
//       ...formData,
//       statsSelection: selectedItem,
//     });
//   };

//   const handleDepSelection = (selectedItem) => {
//     setFormData({
//       ...formData,
//       depSelection: selectedItem,
//     });
//   };

//   const handleChangeDate = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="flex justify-center">
//       <form onSubmit={handleSubmit} className=" flex flex-col gap-6" noValidate>
//         <div className="flex flex-col">
//           <Input
//             label="FirstName"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <Input
//             label="LastName"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <DatesPicker
//           func={(value) => handleChangeDate("dateOfBirth", value)}
//           formData={formData}
//           name="Date Of Birth"
//           val="dateOfBirth"
//         />
//         <DatesPicker
//           func={(value) => handleChangeDate("startDate", value)}
//           formData={formData}
//           name="Start Date"
//           val="startDate"
//         />

//         <div className="flex flex-col border p-5">
//           <p>Adresse</p>
//           <Input
//             label="Street"
//             id="street"
//             name="street"
//             value={formData.street}
//             onChange={handleChange}
//             required
//           />
//           <Input
//             label="City"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           />

//           <Dropdown
//             buttonLabel="Stats"
//             tabData={states.map((state) => ({
//               label: state.name,
//               value: state.abbreviation,
//             }))}
//             onSelect={handleStatsSelection}
//           />
//           <label htmlFor="zipcod">Zip Code</label>
//           <NumberInput
//             aria-label="Demo number input"
//             placeholder="Type a number…"
//             value={formData.zipcode}
//             name="zipcode"
//             onChange={(event, val) => {
//               setValue(val);
//               setFormData({
//                 ...formData,
//                 zipcode: val,
//               });
//             }}
//           />
//         </div>

//         <Dropdown
//           buttonLabel="Dep"
//           tabData={status.map((statu) => ({
//             label: statu.label,
//             value: statu.label,
//           }))}
//           onSelect={handleDepSelection}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;
