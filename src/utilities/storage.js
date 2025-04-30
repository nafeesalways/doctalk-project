export const getStoredAppointment =()=>{
    const storedBookAppointmentStr = localStorage.getItem("storedBook");

    if(storedBookAppointmentStr){
        const storedBookData = JSON.parse(storedBookAppointmentStr);
        return storedBookData;
    }
    else{
        return [];
    }
}
const addToStoredDb = (doctor) => {
    const storedBookData = getStoredAppointment();
    const isExist = storedBookData.find(p => p.id === doctor.id);
    if (isExist) {
      return false;
    }
    storedBookData.push(doctor);
    localStorage.setItem('storedBook', JSON.stringify(storedBookData));
    return true;
  }



export{addToStoredDb}