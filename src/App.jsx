import React, { useState } from 'react';
import { IoMdPerson, IoMdMail, IoMdHome } from "react-icons/io";
import { FaVenusMars, FaBirthdayCake, FaWeight, FaPhoneAlt } from "react-icons/fa";
import { TbRulerMeasure2, TbArrowAutofitRight } from "react-icons/tb";
import { MdStars, MdOutlineStars } from "react-icons/md";
import { FaSignature, FaCheck, FaRunning, FaBell } from "react-icons/fa";
import AlertFail from './components/modal/AlertFail';
import AlertSuccess from './components/modal/AlertSuccess';

const App = () => {
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    email: "",
    address: "",
    phone: "",
    mainActivity: "",
    extend: "autoConfirm",
    notif: false
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "fullName",
      "gender",
      "age",
      "email",
      "phone",
      "mainActivity"
    ];

    const hasEmpty = requiredFields.some(field => {
      return !formData[field] || formData[field].toString().trim() === "";
    });

    if (hasEmpty) {
      setModal("fail");
      return;
    }

    if (isNaN(formData.age)) {
      setModal("fail");
      return;
    }

    if (!formData.email.includes("@")) {
      setModal("fail");
      return;
    }
    setModal("succeed")
    setFormData({
      fullName: "",
      gender: "",
      age: "",
      weight: "",
      height: "",
      email: "",
      address: "",
      phone: "",
      mainActivity: "",
      extend: "autoConfirm",
      notif: false
    });
  };

  const handleChangeSlider = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='flex p-5 w-full items-center justify-center'>
      {modal === "fail" && (
        <AlertFail
          onClose={() => { setModal(null) }} />
      )}
      {modal === "succeed" && (
        <AlertSuccess
          onClose={() => { setModal(null) }} />
      )}
      <form
        onSubmit={handleSubmit}
        className='emboss-surface rounded-xl flex flex-col px-10 py-6 gap-4 w-1/2'>
        <div className='flex items-center gap-10 justify-center  text-gray-600'>
          <div className='h-20 w-20 rounded-full flex items-center justify-center emboss pointer-events-none text-5xl'>
            <FaSignature />
          </div>
          <h1 className='text-center font-bold text-2xl my-6 mb-10'>
            MEMBER REGISTRATION FORM
          </h1>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="fullName">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <IoMdPerson />
              </div>
              <p>Full Name</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder='John Doe'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange} />
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="gender">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <FaVenusMars />
              </div>
              <p>Gender</p>
            </label>
            <select className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md'
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="age">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <FaBirthdayCake />
              </div>
              <p>Age</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder='27'
              id='age'
              name='age'
              value={formData.age}
              onChange={handleChange} />
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="weight">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <FaWeight />
              </div>
              <p>Weight (kg)</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder='64'
              id='weight'
              name='weight'
              value={formData.weight}
              onChange={handleChange} />
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="height">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <TbRulerMeasure2 />
              </div>
              <p>Height (cm)</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder='174'
              id='height'
              name='height'
              value={formData.height}
              onChange={handleChange} />
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="email">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <IoMdMail />
              </div>
              <p>Email</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder="johndoe@company.com"
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange} />
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="address">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <IoMdHome />
              </div>
              <p>Address</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder='Main Street 56 Building Trace, IL'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange} />
          </div>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="phone">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <FaPhoneAlt />
              </div>
              <p>Phone</p>
            </label>
            <input className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md' type="text" placeholder='+62874627819'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange} />
          </div>
        </div>
        <div className='w-full h-1 emboss my-2 pointer-events-none'>
        </div>
        <div className='flex flex-col gap-5 '>
          <div className='flex gap-5'>
            <label className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3' htmlFor="mainActivity">
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <MdStars />
              </div>
              <p>Main Activity</p>
            </label>
            <select className='focus:outline-none px-2 emboss-inset text-gray-500 w-3/4 ml-auto rounded-md'
              name="mainActivity"
              id="mainActivity"
              value={formData.mainActivity}
              onChange={handleChange}>
              <option value="sport1">Sport 1</option>
              <option value="sport2">Sport 2</option>
              <option value="sport3">Sport 3</option>
              <option value="sport4">Sport 4</option>
              <option value="sport5">Sport 5</option>
            </select>
          </div>
          <div className='flex gap-5 items-center'>
            <div className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3'>
              <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
                <FaRunning />
              </div>
              <p>Skill</p>
            </div>
            <div className='slider-box w-3/4'>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChangeSlider}
                className="slider-range"
                style={{
                  background: `linear-gradient(to right, #adadadc5 ${value}%, #ffffff ${value}%)`
                }}
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 emboss-surface text-gray-600 rounded-md'>
            <div className='gap-2 flex items-center border-b-2 border-gray-400/50'>
              <div className='w-8 h-9 border-r-2 border-gray-400 flex items-center justify-center'>
                <MdOutlineStars />
              </div>
              <p>Other Activity</p>
            </div>
            <div className='flex items-center justify-between pb-4 px-2'>
              <label htmlFor="sport1" className='flex gap-2 justify-start items-center toggle'>
                <input className='toggle-input' type="checkbox" id='sport1' name='sport1' />
                <div className='flex items-center gap-5 toggle-box'>
                  <FaCheck className='toggle-icon' />
                  <p>Sport 1</p>
                </div>
              </label>
              <label htmlFor="sport2" className='flex gap-2 justify-start items-center toggle'>
                <input className='toggle-input' type="checkbox" id='sport2' name='sport2' />
                <div className='flex items-center gap-5 toggle-box'>
                  <FaCheck className='toggle-icon' />
                  <p>Sport 2</p>
                </div>
              </label>
              <label htmlFor="sport3" className='flex gap-2 justify-start items-center toggle'>
                <input className='toggle-input' type="checkbox" id='sport3' name='sport3' />
                <div className='flex items-center gap-5 toggle-box'>
                  <FaCheck className='toggle-icon' />
                  <p>Sport 3</p>
                </div>
              </label>
              <label htmlFor="sport4" className='flex gap-2 justify-start items-center toggle'>
                <input className='toggle-input' type="checkbox" id='sport4' name='sport4' />
                <div className='flex items-center gap-5 toggle-box'>
                  <FaCheck className='toggle-icon' />
                  <p>Sport 4</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className='w-full h-1 emboss my-2 pointer-events-none'></div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-4 emboss-surface text-gray-600 rounded-md'>
            <div className='gap-2 flex items-center border-b-2 border-gray-400/50'>
              <div className='w-8 h-9 border-r-2 border-gray-400 flex items-center justify-center'>
                <TbArrowAutofitRight />
              </div>
              <p>Auto Extend</p>
            </div>
            <div className='flex items-center justify-between pb-4 px-2'>
              <label htmlFor="manual" className='flex gap-2 items-center toggle-radio cursor-pointer'>
                <input
                  id="manual"
                  type="radio"
                  name="extend"
                  value="manual"
                  checked={formData.extend === "manual"}
                  onChange={handleChange} />
                <div className='toggle-radio-box'>
                  <p>Manual</p>
                </div>
              </label>
              <label htmlFor="autoConfirm" className='flex gap-2 items-center toggle-radio cursor-pointer'>
                <input
                  id="autoConfirm"
                  type="radio"
                  name="extend"
                  value="autoConfirm"
                  checked={formData.extend === "autoConfirm"}
                  onChange={handleChange} />
                <div className='toggle-radio-box'>
                  <p>Auto with Notif</p>
                </div>
              </label>
              <label htmlFor="autoNoConfirm" className='flex gap-2 items-center toggle-radio cursor-pointer'>
                <input
                  id="autoNoConfirm"
                  type="radio"
                  name="extend"
                  value="autoNoConfirm"
                  checked={formData.extend === "autoNoConfirm"}
                  onChange={handleChange} />
                <div className='toggle-radio-box'>
                  <p>Auto without Notif</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='text-gray-600 emboss gap-2 flex items-center rounded-md w-1/3'>
            <div className='w-8 h-8 border-r-2 border-gray-400 flex items-center justify-center'>
              <FaBell />
            </div>
            <p>Schedule Notif</p>
          </div>
          <label className="toggle-schedule" htmlFor="notif">
            <input type="checkbox"
              id="notif"
              name='notif'
              checked={formData.notif}
              onChange={handleChange} />
            <p className='text-gray-500'>No</p>
            <div className="toggle-schedule-fill"></div>
            <p className='text-gray-500'>Yes</p>
          </label>
        </div>
        <button
          type='submit'
          className='mt-7 emboss text-gray-600 py-2 max-w-max px-15 mx-auto rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default App